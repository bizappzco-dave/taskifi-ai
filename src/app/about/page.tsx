'use client'

import { Zap, ArrowRight, CheckCircle, Users, Target, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

export default function About() {
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
              <a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple Solutions for<br />
            <span className="text-blue-600">Local Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe every local business deserves a professional online presence — 
            without the agency markup or technical headaches.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TaskifiAI was born from a simple observation: most local businesses in Ireland 
                still don't have a proper website. Or worse, they have one that's broken on 
                mobile, hasn't been updated since 2015, or costs them €500/month to maintain.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to change that. Starting with our Lite-Sites product, we deliver 
                professional websites in 48 hours for €49/month — including hosting, updates, 
                and maintenance. No contracts, no surprises.
              </p>
              <p className="text-gray-600">
                Now we're expanding into local SEO with Maps 3-Pack, AI social media with 
                Social-Drive AI, and AI-powered customer engagement with Social-Chats AI. 
                All designed to help local businesses compete online without needing a tech team.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-gray-600">Local Businesses Served</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">48hrs</div>
                    <div className="text-gray-600">Average Launch Time</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-gray-600">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <Target className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple Beats Complex</h3>
              <p className="text-gray-600">
                Most local businesses don't need a 20-page website with a blog and a 
                members area. They need a clean, fast site that shows what they do, 
                where they are, and how to contact them.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Hidden Costs</h3>
              <p className="text-gray-600">
                €49/month means €49/month. Hosting, updates, security — all included. 
                If we add a feature, it stays included. We'll never surprise you with 
                a €200 "maintenance" bill.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow With You</h3>
              <p className="text-gray-600">
                Start with a Lite-Site. When you're ready, add Maps 3-Pack for local SEO, 
                Social-Drive AI for social media, or Social-Chats AI for automated customer 
                engagement. We scale with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            Small team, big impact. We keep overhead low so our prices stay fair.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-white font-bold">D</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">David</h3>
              <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former developer who got tired of seeing local businesses stuck with 
                terrible websites. Building the tools he wished existed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI Team</h3>
              <p className="text-green-600 font-medium mb-2">Our Silent Partners</p>
              <p className="text-gray-600 text-sm">
                AI handles caption generation, content optimization, and customer 
                engagement. They work 24/7 so our clients don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the local businesses already growing with TaskifiAI.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            See Our Products
            <ArrowRight className="h-5 w-5" />
          </a>
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
              <a href="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
