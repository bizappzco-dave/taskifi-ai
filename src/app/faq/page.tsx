'use client'

import { Zap, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What does TaskifiAI do?',
        a: 'We provide simple, affordable online solutions for local businesses in Ireland. Our products include Lite-Sites (professional websites for €49/month), Maps 3-Pack (local SEO), Social-Drive AI (AI social media), and Social-Chats AI (AI customer engagement on WhatsApp).'
      },
      {
        q: 'Who is TaskifiAI for?',
        a: 'Local businesses — cafes, barbers, salons, tradespeople, boutiques, gyms, and anyone who serves customers in a specific geographic area. If you need customers to find you online, we can help.'
      },
      {
        q: 'Are you based in Ireland?',
        a: 'Yes! We\'re a Dublin-based company serving local businesses across Ireland.'
      },
    ],
  },
  {
    category: 'Lite-Sites & Social-Lites',
    questions: [
      {
        q: 'How long does it take to get my website?',
        a: '48 hours from when we receive your information. Most sites go live even faster. We\'ll share a preview link for you to review before launching.'
      },
      {
        q: 'What\'s the difference between Lite-Sites and Social-Lites?',
        a: 'Lite-Sites is our full product name for multi-page websites (2-3 pages). Social-Lites is our single-page "link in bio" product designed for social sellers. Both start at €49/month.'
      },
      {
        q: 'Do I own my domain?',
        a: 'Yes. We register it in your name. If you cancel, you keep your domain and can transfer it anywhere.'
      },
      {
        q: 'Can I make changes to my site after launch?',
        a: 'Absolutely. Unlimited revisions are included. Message us and we\'ll make updates within 24-48 hours at no extra cost.'
      },
      {
        q: 'What\'s included in the €49/month?',
        a: 'Everything: design, development, hosting, domain, SSL certificate, updates, and maintenance. No hidden fees.'
      },
    ],
  },
  {
    category: 'Maps 3-Pack',
    questions: [
      {
        q: 'What is Google Maps 3-Pack?',
        a: 'When someone searches for your type of business near them, Google shows 3 local businesses in a map pack. We optimize your Google Business Profile to help you rank in those top 3 spots.'
      },
      {
        q: 'How long before I see results?',
        a: 'Most clients see improvement within 4-8 weeks. Some take up to 3 months depending on competition in your area. We provide monthly ranking reports so you can track progress.'
      },
      {
        q: 'Why is there a setup fee?',
        a: 'The €299 one-time setup covers initial keyword research, GBP optimization, and citation building. It\'s a one-time investment — the €99/month keeps your profile optimized and up to date.'
      },
    ],
  },
  {
    category: 'Social-Drive AI',
    questions: [
      {
        q: 'How does AI caption generation work?',
        a: 'You upload photos of your products, services, or business. Our AI analyzes the image and generates engaging captions tailored to your brand voice and target audience. You review and approve before posting.'
      },
      {
        q: 'Which platforms does it post to?',
        a: 'Currently Instagram and Facebook. We\'re adding TikTok and LinkedIn in Q3 2026.'
      },
      {
        q: 'What if I miss a week of posting?',
        a: 'We\'ll send you a reminder notification. If you go more than 2 weeks, our system will auto-generate and post content on your behalf (with your approval templates).'
      },
    ],
  },
  {
    category: 'Social-Chats AI',
    questions: [
      {
        q: 'What is Social-Chats AI?',
        a: 'An AI-powered WhatsApp chatbot that engages with your leads 24/7. It responds to inquiries, qualifies leads, books appointments, and hands off hot leads to you.'
      },
      {
        q: 'Will it sound robotic?',
        a: 'No. It\'s trained on your business information and brand voice. It knows your services, pricing, and policies. Customers won\'t know they\'re chatting with AI.'
      },
      {
        q: 'What happens with qualified leads?',
        a: 'When the AI identifies a qualified lead (someone who meets your criteria), it immediately notifies you via WhatsApp with the conversation summary and next steps.'
      },
    ],
  },
  {
    category: 'Pricing & Billing',
    questions: [
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. No long-term contracts on any product. 30 days notice for Lite-Sites and Social-Drive AI. Maps 3-Pack requires 60 days notice due to ongoing optimization work.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Bank transfer (BACS/IBAN) and credit card. We invoice monthly in advance.'
      },
      {
        q: 'Do you offer discounts for multiple services?',
        a: 'Yes! Bundle Lite-Sites + Maps for €129/month (save €19). Get all services for €159/month (save €39). Contact us for custom packages.'
      },
    ],
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TaskifiAI</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about our products and services.</p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, qIdx) => {
                  const key = `${catIdx}-${qIdx}`
                  const isOpen = openIndex === parseInt(key)
                  return (
                    <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : parseInt(key))}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-medium text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Get in touch and we'll help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/353871234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:taskifiai@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="/about" className="text-gray-400 hover:text-white text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
