// /app/api/send/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const {
    email,
    message,
    instruments,
    date,
    startTime,
    endTime,
    location,
  } = body

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'CJA <onboarding@resend.dev>',
      to: ['murthajosh@gmail.com'],
      subject: 'CJA',
      html: `
        <h2>New message from CJA</h2>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Instruments:</strong> ${instruments?.join(', ')}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Time:</strong> ${startTime} – ${endTime}</p>

        <p><strong>Location:</strong> ${location}</p>

        <p><strong>Message:</strong></p>
        <p>${message || '—'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
