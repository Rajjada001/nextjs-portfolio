import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL

export async function POST(req) {
  try {
    const requestBody = await req.json() // Fix: Correctly parse JSON
    const { email, subject, message } = requestBody

    const data = await resend.emails.send({
      from: fromEmail,
      to: [email], // Only sending to user
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New Message submitted:</p>
          <p>{message}</p>
        </>
      ),
    })

    return NextResponse.json({ message: 'Email sent successfully!', data })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
