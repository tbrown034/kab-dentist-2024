# Better Auth Documentation Reference

This file contains key documentation from Better Auth for reference.

## Installation

Better Auth requires a database connection to store user data. The library supports PostgreSQL, MySQL, SQLite, and more.

### Basic Setup

1. **Install the package:**
```bash
npm install better-auth
```

2. **Set environment variables:**
```txt
BETTER_AUTH_SECRET=<random-secret-string>
BETTER_AUTH_URL=http://localhost:3000  # MUST match actual URL
POSTGRES_URL=postgresql://...
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

3. **Create auth instance (auth.ts):**
```ts
import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";
import { NeonDialect } from "kysely-neon";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },

  database: {
    dialect: new NeonDialect({
      neon: neon(process.env.POSTGRES_URL || ""),
    }),
    type: "postgres",
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [nextCookies()],
});
```

4. **Create API route (/app/api/auth/[...all]/route.ts):**
```ts
import { auth } from "@/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
```

5. **Create client (lib/auth-client.ts):**
```ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
});

export const { signIn, signOut, signUp, useSession } = authClient;
```

## Next.js Middleware

### Simple Cookie Check (Recommended for Redirects)

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
```

**WARNING:** `getSessionCookie` only checks for cookie existence, not validity. Always validate sessions server-side for protected actions.

### Alternative: Cookie Cache

```ts
import { getCookieCache } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const session = await getCookieCache(request);

  if (!session && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

### Server-Side Session Validation

Always validate sessions in your protected pages:

```tsx
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login");
  }

  return <div>Protected Content</div>;
}
```

## OAuth Flow

1. User clicks "Continue with Google" on `/login`
2. `signIn.social({ provider: "google", callbackURL: "/admin" })` called
3. Better Auth redirects to Google OAuth
4. Google redirects to `/api/auth/callback/google`
5. Better Auth creates session
6. User redirected to `callbackURL`

## Session Management

Better Auth uses cookie-based sessions:

- **Session cookie name:** `better-auth.session_token` (by default)
- **Session expiration:** 7 days (configurable)
- **Session refresh:** Updates when `updateAge` is reached

### Session Configuration

```ts
export const auth = betterAuth({
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // 5 minutes
    }
  }
});
```

## Common Issues

### `state_mismatch` Error

**Causes:**
- Missing or incorrect `BETTER_AUTH_URL`
- Cookie persistence issues
- baseURL mismatch between client/server
- Google OAuth redirect URI misconfiguration

**Fix:**
1. Set explicit `BETTER_AUTH_URL` in `.env`
2. Verify Google Console redirect URI matches
3. Test in incognito mode
4. Check browser cookies in DevTools

### Redirect Loop After OAuth

**Causes:**
- Middleware running before session cookie is set
- Cookie name mismatch
- Session not being properly created

**Debug:**
1. Check network tab for `Set-Cookie` headers
2. Verify cookie is being sent on subsequent requests
3. Check middleware isn't running on `/api/auth/*` routes
4. Ensure `nextCookies()` plugin is loaded

## Best Practices

1. **Always validate sessions server-side** for protected routes
2. **Use middleware only for optimistic redirects**
3. **Never trust client-side session state** for authorization
4. **Keep OAuth credentials in `.env.local`** (not git)
5. **Set explicit `BETTER_AUTH_URL`**
6. **Test OAuth in incognito mode**

## Key Files

- `auth.ts` - Server auth configuration
- `lib/auth-client.ts` - Client auth configuration
- `app/api/auth/[...all]/route.ts` - API route handler
- `middleware.ts` - Route protection (optional)

## Important Notes

- The `nextCookies()` plugin MUST be the last plugin in the array
- Server actions need the `nextCookies()` plugin to set cookies
- RSCs cannot set cookies until the server is interacted with via Server Actions or Route Handlers
- For Next.js 15.2.0+, you can use Node.js runtime in middleware to call `auth.api` directly
