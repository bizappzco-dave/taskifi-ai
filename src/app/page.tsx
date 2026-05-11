'use client'

import { Zap, Globe, MessageCircle, Smartphone, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TaskifiAI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                Get Started
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#products" className="block text-gray-600 hover:text-gray-900">Products</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple Websites for<br />
            <span className="text-blue-600">Local Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get online in 48 hours. No hassle, no tech headaches. Just a beautiful, fast website that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Launch Your Site
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#products" className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-colors">
              See Products
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>48-hour launch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>€49/month</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Simple solutions for local businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lite-Sites */}
            <div className="border-2 border-blue-200 rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Lite-Sites</h3>
                  <p className="text-blue-600 font-medium">Most Popular</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Perfect 2-3 page websites for local businesses. Fast, mobile-friendly, and ready in 48 hours.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">2-3 custom pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Mobile-optimized design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Contact form + QR code</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Google Maps integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Free hosting included</span>
                </li>
              </ul>

              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-blue-900">€49<span className="text-lg font-normal">/month</span></div>
                <p className="text-blue-700 text-sm">No setup fee • Cancel anytime</p>
              </div>

              <a href="#contact" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Your Lite-Site
              </a>
            </div>

            {/* Social-Drive AI */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Social-Drive AI</h3>
                  <p className="text-purple-600 font-medium">Coming Soon</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                AI-powered social media content for local businesses. Upload photos, get captions, post everywhere.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">AI caption generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Multi-platform posting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Content calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Auto-reminders if you miss a week</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">🎬 Video Services:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">Reels/Shorts editing (Q3 2026)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">AI video generation (Q4 2026)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-gray-900">€29<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-600 text-sm">Early bird pricing</p>
              </div>

              <button disabled className="block w-full bg-gray-300 text-gray-500 text-center px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                Join Waitlist
              </button>
            </div>

            {/* Maps 3-Pack */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-10 w-10 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Maps 3-Pack</h3>
                  <p className="text-green-600 font-medium">Most Popular</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Get your business in Google's top 3 local results. We optimize your Google Business Profile to dominate local search.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Complete GBP setup & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Keyword research for local SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Weekly posts & photo updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Review monitoring & responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Monthly ranking reports</span>
                </li>
              </ul>

              <div className="bg-green-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-green-900">€99<span className="text-lg font-normal">/month</span></div>
                <p className="text-green-700 text-sm">€299 one-time setup fee</p>
              </div>

              <a href="#contact" className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Found on Google
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">✨ Premium Add-ons:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">AI review response drafts (+€29/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Competitor tracking (+€49/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Citation building (€199 one-time)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social-Chats AI */}
            <div className="border-2 border-orange-200 rounded-2xl p-8 bg-gradient-to-br from-orange-50 to-white hover:border-orange-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-10 w-10 text-orange-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Social-Chats AI</h3>
                  <p className="text-orange-600 font-medium">🔥 Flagship Product</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Your 24/7 AI sales agent on WhatsApp. Turn followers, DMs, and leads into booked customers — automatically.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">AI-powered WhatsApp conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Auto-respond to DMs & comments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Qualified lead handover to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Onboarding flows & surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Works 24/7 — never miss a lead</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Trained on your business info</span>
                </li>
              </ul>

              <div className="bg-orange-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-orange-900">€79<span className="text-lg font-normal">/month</span></div>
                <p className="text-orange-700 text-sm">€199 one-time setup fee</p>
              </div>

              <a href="#contact" className="block w-full bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Start Closing Leads on Autopilot
              </a>

              <div className="mt-6 pt-6 border-t border-orange-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">💡 Best for:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span className="text-gray-700">Coaches, consultants, salons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span className="text-gray-700">High-ticket services (€100+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span className="text-gray-700">Businesses with strong social presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get online in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell Us About Your Business</h3>
              <p className="text-gray-600">Share your info, photos, and what you want to highlight. Takes 10 minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Build Your Site</h3>
              <p className="text-gray-600">Our team creates your custom website. Ready in 48 hours or less.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Relax</h3>
              <p className="text-gray-600">Your site goes live. We handle hosting, updates, and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Lite-Sites</h2>
            <p className="text-xl text-gray-600">See what we've built for local businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* No Label Barber */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">NO LABEL</div>
                  <div className="text-sm opacity-80">Premium Barber Shop</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Label Barber</h3>
                <p className="text-gray-600 mb-4">Dublin 24</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Booking System</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Gallery</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Services Menu</span>
                </div>
                <a href="#" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                  View Site <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* The Coffee Corner */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">☕</div>
                  <div className="text-lg font-semibold">The Coffee Corner</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Coffee Corner</h3>
                <p className="text-gray-600 mb-4">Dublin City Centre</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Menu</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Location Map</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Opening Hours</span>
                </div>
                <a href="#" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                  View Site <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Bloom Florist */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">🌸</div>
                  <div className="text-lg font-semibold">Bloom Florist</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bloom Florist</h3>
                <p className="text-gray-600 mb-4">Ranelagh, Dublin</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Product Gallery</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Contact Form</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Delivery Info</span>
                </div>
                <a href="#" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                  View Site <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see your business here?</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Your Lite-Site
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join dozens of local businesses using TaskifiAI. Start with one service or get the complete bundle and save.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-white">
            <div className="bg-blue-700 rounded-lg p-4">
              <div className="text-2xl font-bold">Lite-Sites</div>
              <div className="text-3xl font-bold mt-2">€49<span className="text-lg">/mo</span></div>
              <div className="text-sm mt-2 opacity-80">Website + Hosting</div>
            </div>
            <div className="bg-green-600 rounded-lg p-4 border-2 border-white">
              <div className="text-2xl font-bold">Maps 3-Pack</div>
              <div className="text-3xl font-bold mt-2">€99<span className="text-lg">/mo</span></div>
              <div className="text-sm mt-2 opacity-80">+ €299 setup</div>
              <div className="text-xs mt-1 font-semibold">MOST POPULAR</div>
            </div>
            <div className="bg-purple-700 rounded-lg p-4">
              <div className="text-2xl font-bold">Social-Drive AI</div>
              <div className="text-3xl font-bold mt-2">€29<span className="text-lg">/mo</span></div>
              <div className="text-sm mt-2 opacity-80">Social Media</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="text-lg font-bold text-blue-900">💰 Bundle & Save</div>
              <div className="text-sm text-blue-700 mt-1">
                Get all 3 services for just <span className="font-bold">€159/month</span> (save €18/mo)
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Interested in...</option>
                  <option value="lite-sites">Lite-Sites (€49/mo) - New Website</option>
                  <option value="migration">Site Migration (€199 + €49/mo) - Replace Old Site</option>
                  <option value="maps">Maps 3-Pack (€99/mo + €299 setup)</option>
                  <option value="socialdrive">Social-Drive AI (€29/mo)</option>
                  <option value="bundle-lite-maps">Lite-Sites + Maps (€129/mo)</option>
                  <option value="bundle-all">Complete Bundle (€159/mo) - Best Value</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Get Started - €0 Setup on Lite-Sites
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              We'll contact you within 24 hours to get started.
            </p>
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
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
