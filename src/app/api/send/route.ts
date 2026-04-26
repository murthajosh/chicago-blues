// /app/api/send/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const {
    bandSize,
    hours,
    email,
    date,
  } = body

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'CBB <onboarding@resend.dev>',
      to: ['murthajosh@gmail.com'],
      subject: 'CBB',
      html: `
        <h2>New message from CBB</h2>

        <p><strong>Email:</strong>${email}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Band size:</strong>${bandSize}</p>

        <p><strong>Hours:</strong>${hours}</p>

      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
