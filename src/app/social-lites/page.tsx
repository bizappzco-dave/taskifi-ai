'use client';

import Link from 'next/link';

export default function SocialLitesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="inline-block">
            <img
              src="/social-lites-logo.svg"
              alt="Social-Lites Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Social-Lites
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your Link in Bio, But Better ✨
          </p>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Stop renting your link from Linktree. Get a professional single-page website
            on YOUR domain in 48 hours. Mobile-optimized, contact form, Google Maps,
            and Shopify-ready — everything included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/353871234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Everything You Need to Get Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🌐', title: 'Your Own Domain', desc: 'Not a subdomain. Not Linktree. YourBrand.com' },
              { icon: '📱', title: 'Mobile-Optimized', desc: 'Looks perfect on phones, tablets, and desktops' },
              { icon: '⚡', title: '48-Hour Launch', desc: 'From signup to live in just 2 business days' },
              { icon: '📧', title: 'Contact Form', desc: 'Let customers reach you instantly' },
              { icon: '🗺️', title: 'Google Maps', desc: 'Show customers where to find you' },
              { icon: '📊', title: 'Analytics Ready', desc: 'Track visitors and optimize conversions' },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg text-center">
            <p className="text-indigo-900">
              <strong>💡 Grow with us:</strong> Start with Social-Lites, upgrade to a full multi-page website anytime.
              Your content migrates seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Built for Social Sellers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { platform: 'Instagram', handle: '@yourbrand', followers: '10K followers', stat: 'Link in bio that converts' },
              { platform: 'TikTok', handle: '@yourbrand', followers: '50K followers', stat: 'Drive traffic to your products' },
              { platform: 'Facebook', handle: 'Your Brand Page', followers: '5K followers', stat: 'Professional presence' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl font-semibold text-gray-900 mb-2">{item.platform}</div>
                <div className="text-gray-600 mb-1">{item.handle}</div>
                <div className="text-sm text-gray-500 mb-4">{item.followers}</div>
                <div className="text-indigo-600 font-medium">→ {item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', business: 'Boutique Owner', quote: 'Finally, a link in bio that looks professional. My customers trust it immediately.', rating: '⭐⭐⭐⭐⭐' },
              { name: 'James K.', business: 'Personal Trainer', quote: 'Got my website live in 48 hours. The Shopify integration is seamless.', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Emma L.', business: 'Jewelry Brand', quote: 'Worth every penny. My own domain, my own brand, no Linktree ads.', rating: '⭐⭐⭐⭐⭐' },
            ].map((review, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl mb-4">{review.rating}</div>
                <p className="text-gray-700 mb-4 italic">"{review.quote}"</p>
                <div className="text-gray-900 font-semibold">{review.name}</div>
                <div className="text-gray-600 text-sm">{review.business}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Social-Lites?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 text-lg font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-lg font-semibold bg-indigo-100">Social-Lites</th>
                  <th className="text-center py-4 px-6 text-lg font-semibold">Linktree</th>
                  <th className="text-center py-4 px-6 text-lg font-semibold">Traditional Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Your Own Domain', '✅ Yes', '❌ Subdomain only', '✅ Yes'],
                  ['Price', '€49/month', '€6-24/month', '€1,500-3,000+'],
                  ['Launch Time', '48 hours', 'Instant', '4-8 weeks'],
                  ['Shopify Integration', '✅ Seamless', '⚠️ Limited', '✅ Yes'],
                  ['Professional Design', '✅ Custom', '⚠️ Templates only', '✅ Custom'],
                  ['Contract', 'Month-to-month', 'Monthly', '12+ months'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-900 font-medium">{row[0]}</td>
                    <td className="py-4 px-6 text-center bg-indigo-50 text-indigo-700 font-semibold">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row[2]}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Choose your plan and share your brand details' },
              { step: '2', title: 'We Build', desc: 'Professional single-page website in 48 hours' },
              { step: '3', title: 'Review', desc: 'Preview and request any changes' },
              { step: '4', title: 'Launch', desc: 'Go live with your own domain and start selling' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Everything included. No surprises.
          </p>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-600">
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Social-Lites</h3>
                <p className="text-gray-600">Perfect for social sellers</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-indigo-600 mb-2">€49</div>
                <div className="text-gray-600">per month</div>
                <div className="text-sm text-gray-500 mt-2">or €147 upfront (3 months)</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Single-page professional website',
                  'Your own domain (not a subdomain)',
                  'Mobile-optimized design',
                  'Contact form integration',
                  'Google Maps integration',
                  'Google Analytics setup',
                  'Shopify integration ready',
                  'Unlimited revisions',
                  '48-hour launch',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <a
                  href="https://wa.me/353871234567"
                  className="block w-full py-4 bg-green-500 text-white text-center text-lg font-semibold rounded-lg hover:bg-green-600 transition"
                >
                  💬 Get Started on WhatsApp
                </a>
                <p className="text-xs text-gray-500 text-center">
                  <strong>Optional:</strong> Shopify setup (+€99 one-time) • Custom design work (+€49/hour)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need to buy a domain separately?',
                a: 'No! We include domain registration and management in your €49/month. If you already own a domain, we\'ll use that.'
              },
              {
                q: 'How is this different from Linktree?',
                a: 'Linktree gives you a subdomain (linktr.ee/yourbrand). Social-Lites gives you a real website on YOUR domain (yourbrand.com) with multiple pages, contact forms, and full customization.'
              },
              {
                q: 'Can I integrate my Shopify store?',
                a: 'Yes! Social-Lites seamlessly integrates with Shopify. You can link to products, use Shopify Buy Buttons, or direct traffic to your Shopify store. We handle the setup.'
              },
              {
                q: 'Can I upgrade to a full website later?',
                a: 'Absolutely! Social-Lites is designed to grow with you. When you\'re ready for more pages, blog, or advanced features, we\'ll migrate everything to a full TaskifiAI website. Your domain, content, and SEO rankings all transfer seamlessly.'
              },
              {
                q: 'What if I want changes after launch?',
                a: 'Unlimited revisions are included! Just message us and we\'ll make updates within 24-48 hours.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! No long-term contracts. Cancel anytime with 30 days notice.'
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Own Your Link in Bio?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of social sellers who upgraded from Linktree to a real website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/353871234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:dpmcgoldrick@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Social-Lites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
