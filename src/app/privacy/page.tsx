import { Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - TaskifiAI',
  description: 'How TaskifiAI collects, uses, and protects your personal information.',
}

export default function Privacy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: June 2026</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and business name (via contact forms)</li>
              <li>Service preferences and communication choices</li>
              <li>Payment information (processed securely via our payment provider)</li>
            </ul>
            <p className="mt-4">We also collect automatically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website usage data via Google Analytics (pages visited, time on site)</li>
              <li>Device and browser information</li>
              <li>IP address (anonymized for analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver and maintain our services (website hosting, SEO, social media)</li>
              <li>Send service-related communications (billing, updates, security alerts)</li>
              <li>Improve our website and products</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> Hosting (Vercel), email (Resend), and analytics (Google Analytics)</li>
              <li><strong>Payment processors:</strong> For billing purposes only</li>
              <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage & Security</h2>
            <p>
              Your data is stored on secure servers in the EU. We use industry-standard 
              encryption (TLS) for data in transit and at rest. Access to your personal 
              information is restricted to authorized team members only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights (GDPR)</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">To exercise these rights, email us at <a href="mailto:taskifiai@gmail.com" className="text-blue-600 hover:underline">taskifiai@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
            <p>
              We use essential cookies (required for the site to function) and analytics 
              cookies (to understand how visitors use our site). You can manage cookie 
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Material changes will 
              be communicated via email or a notice on our website. The "Last updated" date 
              at the top reflects when changes were made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at:
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
              <a href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</a>
              <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
