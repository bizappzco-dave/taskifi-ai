# TaskifiAI - Company Website

**Local dev:** http://localhost:3001

---

## What We Built

A clean, modern website for TaskifiAI showcasing:

### Products
1. **Lite-Sites** (€49/mo) - 2-3 page websites for local businesses
   - 48-hour launch
   - Mobile-optimized
   - Contact form + QR code
   - Google Maps integration
   - Free hosting included

2. **SocialDrive AI** (€29/mo) - AI social media content (coming soon)
   - AI caption generation
   - Multi-platform posting
   - Content calendar
   - Analytics dashboard

### Key Features
- ✅ Single-page design (scrolling)
- ✅ Mobile responsive
- ✅ Clear pricing
- ✅ Lead capture form
- ✅ Professional branding
- ✅ Fast loading (Next.js)

---

## Next Steps

### Deploy to Vercel
```bash
cd /home/dpmcg/.openclaw/workspace/taskifi-ai
npx vercel deploy --prod --yes
```

### Custom Domain
- Point `taskifiai.com` to Vercel
- Add domain in Vercel dashboard

### Form Backend
- Connect form to email service (Formspree, EmailJS, or Supabase)
- Or integrate with existing CRM

### Add Pages (Optional)
- `/about` - Company story
- `/portfolio` - Example sites
- `/faq` - Common questions
- `/contact` - Dedicated contact page

---

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS (via inline styles for speed)
- Lucide React icons
- Vercel hosting

---

## Brand Guidelines

**Colors:**
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Green (#22c55e)

**Logo:** Zap icon (lightning bolt) - represents speed, efficiency, AI

**Tagline:** "Simple solutions for local businesses"

**Voice:** Friendly, straightforward, no-jargon

---

## Business Model

**Lite-Sites:**
- Revenue: €49/month per client
- Costs: ~€5/month (Vercel hosting)
- Margin: 90%+
- Time to build: 2-4 hours
- Maintenance: <1 hour/month

**Target:** 50 clients = €2,450/month revenue, ~€250 costs

**SocialDrive AI:**
- Revenue: €29/month per client
- Costs: ~€0.03/month (AI generation)
- Margin: 99%+
- Time to onboard: 30 minutes
- Maintenance: Automated

**Target:** 100 clients = €2,900/month revenue, ~€3 costs

**Bundle:** Both services = €69/month (save €9)

---

## Lead Generation Strategy

1. **Local outreach** - Direct contact with businesses without websites
2. **Google My Business** - List TaskifiAI locally
3. **Referrals** - Offer €50 credit for successful referrals
4. **Partnerships** - Web designers who don't want maintenance work
5. **Facebook groups** - Local business communities

---

## Monitoring & Uptime

**Vercel provides:**
- Automatic HTTPS
- 99.9% uptime SLA
- Global CDN
- Automatic SSL renewal
- DDoS protection

**Monitoring options:**
- Vercel Analytics (built-in)
- UptimeRobot (free tier: 50 checks, 5-min intervals)
- Better Stack (paid, more features)

**Recommended:** Start with Vercel Analytics + UptimeRobot free tier

---

## Contact Form Integration

**Option 1: Formspree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
- Free: 50 submissions/month
- Paid: €10/month (unlimited)

**Option 2: Supabase (More control)**
- Store submissions in database
- Trigger email notifications
- Build admin dashboard

**Option 3: EmailJS (Client-side)**
- Send emails directly from browser
- Free: 200 emails/month
- Paid: €15/month

---

**Status: READY TO DEPLOY** ✅
**Next: Deploy to Vercel + connect domain**
