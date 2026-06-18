import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, business, email, service, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Send to Supabase (dashboard project) or email
    // For now, store via the TaskifiAI Supabase instance
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/lead_inquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${supabaseKey}`,
            'Apikey': supabaseKey,
          },
          body: JSON.stringify({
            name,
            business,
            email,
            service,
            message,
            source: 'website-contact-form',
          }),
        }
      )

      if (!response.ok) {
        // Table might not exist yet - log and fall through to email
        console.warn('Supabase insert failed (table may not exist):', await response.text())
      }
    }

    // Also send email via Resend or similar if configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'TaskifiAI <onboarding@resend.dev>',
          to: ['taskifiai@gmail.com'],
          subject: `New ${service || 'General'} Inquiry from ${name}`,
          html: `
            <h2>New Website Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Business:</strong> ${business || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interested in:</strong> ${service || 'General inquiry'}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            <hr/>
            <p><em>Sent from taskifiai.com contact form</em></p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
