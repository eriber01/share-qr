import { HomeEmail } from "@/components/Emails/HomeEmail";
import { resend } from "@/utils/resend";


export async function POST(req: Request) {

  try {
    const { email } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'noreply@eriber-tejeda.com',
      to: email,
      subject: 'Thank you for contacting us.',
      react: HomeEmail()
    })

    await resend.emails.send({
      from: 'onePersonSubscribe@eriber-tejeda.com',
      to: 'eriber01@gmail.com',
      subject: 'Hey a person subscribes to Share Qr',
      text: `This is the email ${email}`
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}