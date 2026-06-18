import { Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - TaskifiAI',
  description: 'Terms and conditions for using TaskifiAI products and services.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TaskifiAI</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By using TaskifiAI's services or making a purchase, you agree to these terms. 
              If you don't agree, please don't use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
            <p className="mb-4">We provide the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lite-Sites:</strong> Design, development, hosting, and maintenance of websites</li>
              <li><strong>Maps 3-Pack:</strong> Google Business Profile optimization and local SEO</li>
              <li><strong>Social-Drive AI:</strong> AI-powered social media content generation and posting</li>
              <li><strong>Social-Chats AI:</strong> AI-powered WhatsApp customer engagement</li>
            </ul>
            <p className="mt-4">
              Service descriptions and features may change over time. We'll notify you of 
              material changes to your service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pricing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pricing is displayed on our website and invoices. Prices may change with 30 days notice.</li>
              <li>Payment is due at the start of each billing cycle.</li>
              <li>Late payments may result in service suspension after 14 days.</li>
              <li>Setup fees (where applicable) are non-refundable one-time charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate business information</li>
              <li>Supply content (text, images) in a timely manner</li>
              <li>Review and approve work within the agreed timeframe</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not use our services for fraudulent, illegal, or harmful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Content & Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership of your content (text, images, branding)</li>
              <li>We retain ownership of our templates, tools, and proprietary code</li>
              <li>You grant us a license to use your content for service delivery purposes</li>
              <li>AI-generated content (captions, etc.) is licensed to you for your business use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cancellation & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lite-Sites & Social-Drive AI:</strong> Cancel with 30 days notice. No refunds for partial months.</li>
              <li><strong>Maps 3-Pack:</strong> Cancel with 60 days notice. Setup fees are non-refundable.</li>
              <li><strong>Social-Chats AI:</strong> Cancel with 30 days notice. Setup fees are non-refundable.</li>
              <li>If we fail to deliver agreed services, you're entitled to a prorated refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Level</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We aim for 99.9% uptime for hosted websites</li>
              <li>Planned maintenance will be communicated in advance</li>
              <li>We don't guarantee specific SEO rankings or business outcomes</li>
              <li>Response time for support requests: within 24 business hours</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p>
              Our total liability is limited to the amount you've paid us in the 12 months 
              preceding the claim. We're not liable for indirect, incidental, or consequential 
              damages (lost profits, lost customers, business interruption).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services 
              after changes constitutes acceptance. Material changes will be communicated 
              via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Ireland. Any disputes will be resolved 
              in the courts of Ireland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact</h2>
            <p>
              For questions about these terms:
            </p>
            <p className="mt-2">
              <strong>TaskifiAI</strong><br />
              Email: <a href="mailto:taskifiai@gmail.com" className="text-blue-600 hover:underline">taskifiai@gmail.com</a>
            </p>
          </section>
        </div>
      </div>

      <footer className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold text-white">TaskifiAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 TaskifiAI. Simple solutions for local businesses.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</a>
              <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
