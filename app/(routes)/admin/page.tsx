import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BillingDashboard from "./_components/BillingDashboard";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }

  return <BillingDashboard />;
}
