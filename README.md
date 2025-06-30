# Dr. Keith Brown DDS - Dental Practice Website

A modern, conversion-optimized dental practice website built with Next.js for Dr. Keith A. Brown DDS, FAGD in Naperville, Illinois.

## 🏥 About the Practice

- **Location**: Naperville, IL (Third floor of Fifth Third Bank building)
- **Specialization**: General dentistry with emergency care
- **Key Features**: 24/7 emergency care, free nitrous oxide, FAGD certified dentist
- **Target Market**: Naperville, Aurora, Bolingbrook, and Chicagoland area

## 🎯 Business Goals & Conversion Funnels

This site is designed around **4 primary conversion funnels** for Google Ads campaigns:

1. **Main** (`/`) - "dentist naperville", "family dentist"
2. **Emergency** (`/emergency`) - "emergency dentist", "tooth pain"
3. **Appointment** (`/appointment`) - "dental appointment", "book dentist"
4. **Services** (`/dental-services`) - "teeth whitening", "root canal"

All funnels lead to the appointment booking form with email notifications.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Environment variables (see below)

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd kab-dentist-2024

# Install dependencies
npm install
# or
pnpm install

# Set up environment variables (see .env.example)
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + Shadcn/UI components
- **UI Components**: Radix UI primitives
- **Maps**: Google Maps API (@vis.gl/react-google-maps)
- **Email**: Nodemailer (Zoho SMTP)
- **AI**: OpenAI API (DocBot feature)
- **Fonts**: Inter (body), Raleway (headers)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics

## 📁 Project Structure

```
app/
├── (routes)/           # Route groups
│   ├── appointment/    # Appointment booking page
│   ├── blog/          # Blog listing + individual posts
│   ├── dental-services/ # Services overview
│   ├── emergency/     # Emergency care page
│   └── insurance/     # Insurance information
├── api/               # API routes
│   ├── DocBot/        # AI chatbot endpoint
│   └── submitForm/    # Form submission handler
├── globals.css        # Global styles
├── layout.js          # Root layout
└── page.js           # Homepage

components/
├── sections/          # Page sections (hero, doctor, testimonials)
├── forms/            # Form components (UnifiedForm, PainSlider)
├── dialogs/          # Modal dialogs
├── layout/           # Header, footer, navigation
├── shadcn-ui/        # Shadcn/UI components
└── shared/           # Reusable components

lib/
├── content/          # JSON content files
├── constants/        # Site constants, phone numbers
└── utils.js         # Utility functions
```

## 🌐 Key Features

### 📝 Appointment Booking System

- **Unified form** for both regular and emergency appointments
- **Pain level slider** (1-10 scale with emojis)
- **Insurance validation** (blocks Medicaid terms)
- **Email notifications** to multiple recipients
- **Emergency prioritization** (pain level 8+ triggers emergency flow)

### 🚨 Emergency Care System

- **24/7 availability** messaging
- **Immediate consultation** booking
- **Separate phone numbers** for different patient types
- **Priority email routing** for urgent cases

### 🤖 DocBot AI Assistant

- **OpenAI-powered** dental Q&A
- **Predefined answers** for common questions
- **Fallback responses** for unknown queries
- **Rate limiting** and error handling

### 📱 Responsive Design

- **Mobile-first** approach
- **Tailwind CSS** for styling
- **Dark/light mode** toggle
- **Accessibility** considerations

### 📊 SEO & Analytics

- **Structured metadata** for all pages
- **Optimized sitemap** (4 priority funnels)
- **Google Analytics** integration
- **Blog content** for long-tail SEO

## 🔑 Environment Variables

Create a `.env.local` file with:

```env
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

# OpenAI (DocBot)
OPENAIAPI=your_openai_api_key

# Email (Zoho SMTP)
EMAIL_PASS=your_email_password

# Analytics
NEXT_PUBLIC_MEASUREMENT_ID=your_ga_measurement_id
```

## 📧 Email System

The form submission system sends emails to multiple recipients:

### Priority Recipients (Immediate)

- `kabdds@aol.com` (Dr. Brown's main email - iPhone VIP)
- `trevorbrown.web@gmail.com` (Developer monitoring)

### Backup Recipients (5-second delay)

- `tbrown034@gmail.com` (Backup)
- `kbdds@sbcglobal.net` (Secondary)

### Email Features

- **Emergency detection** (pain level 8+ or form type)
- **Retry logic** (up to 2 retries for failed sends)
- **Custom templates** with patient information
- **Test mode** available via URL parameters

## 🎨 Content Management

Content is managed via JSON files in `lib/content/`:

- **`sectionContent.json`** - Page sections, hero text, FAQs
- **`blogContent.json`** - Blog posts with metadata
- **`servicesContent.json`** - Dental services information

### Adding Blog Posts

Add new posts to `blogContent.json`:

```json
{
  "slug": "post-url-slug",
  "headline": "Post Title",
  "subhead": "Subtitle",
  "author": "Dr. Keith A. Brown",
  "date": "2025-06-13",
  "tags": ["tag1", "tag2"],
  "category": "Category Name",
  "body": "Post content...",
  "further_reading": [...]
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Build Commands

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🧪 Testing

### Form Testing

- **Test Mode**: Add `?test=true` to form submission URL
- **Emergency Test**: Add `?test=true&type=emergency`
- **Email Testing**: Uses separate recipient list

### API Testing

```bash
# Test DocBot
curl -X POST http://localhost:3000/api/DocBot \
  -H "Content-Type: application/json" \
  -d '{"question": "What are your office hours?"}'

# Test form submission
curl -X POST http://localhost:3000/api/submitForm?test=true \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@example.com", ...}'
```

## 📈 Google Ads Integration

### Landing Page Quality Optimization

- **Fast loading** (Vercel Edge Network)
- **Mobile responsive** design
- **Clear CTAs** on every page
- **Relevant content** matching ad keywords
- **Contact information** prominently displayed

### Conversion Tracking

- **Goal**: Appointment form submissions
- **Events**: Form starts, completions, phone clicks
- **UTM parameters** supported for campaign tracking

## 🛠 Common Development Tasks

### Adding New Pages

1. Create page in `app/(routes)/new-page/page.jsx`
2. Add navigation links in header components
3. Update sitemap.xml
4. Add to robots.txt if needed

### Updating Contact Information

Edit `lib/constants/constants.js`:

```javascript
export const officeNumber = "(630) 357-9358";
export const trackingNumber = "(630) 296-8702";
export const email = "kabdds@keithbrowndss.com";
export const address = "1296 Rickert Drive #300, Naperville, IL 60540";
```

### Modifying Email Templates

Edit `app/api/submitForm/EmailTemplate.jsx` for custom email formatting.

### Adding Services

Update `lib/content/servicesContent.json` with new service categories and details.

## 🚨 Troubleshooting

### Common Issues

**Email Not Sending**

- Check SMTP credentials in environment variables
- Verify Zoho SMTP settings
- Check server logs for error details

**Google Maps Not Loading**

- Verify API key in environment variables
- Check API key restrictions in Google Console
- Ensure Maps JavaScript API is enabled

**Form Validation Issues**

- Check `restrictedInsuranceTerms.js` for blocked terms
- Verify form field requirements
- Test with different input combinations

**DocBot Not Responding**

- Verify OpenAI API key and credits
- Check rate limiting
- Review predefined answers in API route

## 📞 Support & Maintenance

### Key Contacts

- **Dr. Keith Brown**: Practice owner
- **Developer**: Trevor Brown (trevorbrown.web@gmail.com)

### Maintenance Schedule

- **Monthly**: Review form submissions, update content
- **Quarterly**: Update dependencies, security patches
- **Annually**: Review Google Ads performance, SEO optimization

### Monitoring

- **Vercel Analytics**: Performance and usage
- **Google Analytics**: Traffic and conversions
- **Email Notifications**: Form submission monitoring

---

## 📝 Notes for Future Developers

- This site prioritizes **conversion optimization** over flashy design
- **Emergency care** is a key differentiator - keep prominent
- **Mobile experience** is critical (many dental searches are mobile)
- **Page speed** directly impacts Google Ads Quality Score
- **Form completion rate** is the primary success metric
- Insurance validation prevents Medicaid-related issues
- The FAGD credential is important for credibility - keep highlighted

### Business Context

- Built by journalist-turned-developer managing the practice's digital marketing
- Google Ads campaigns drive most traffic
- Conversion rate optimization is ongoing priority
- Dr. Brown has 40+ years experience - leverage this credibility
