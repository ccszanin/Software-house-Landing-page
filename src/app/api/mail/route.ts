import sgMail from '@sendgrid/mail'
import { NextRequest ,NextResponse } from 'next/server'

type MsgProps = {
  to: string;
  from: string;
  subject: string | undefined;
  text: string | undefined;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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')

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { subject, text, html } = body

  const msg = {
    to: 'gabrielzanin150@gmail.com',
    from: 'zionsoftwarehouse.dev@gmail.com',
    subject: subject,
    text: text,
    html: html
  }
  try {
    await sgMail.send(msg);
    return NextResponse.json(msg);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
