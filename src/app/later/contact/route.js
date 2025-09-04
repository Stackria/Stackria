import { NextResponse } from 'next/server';
import { Resend } from 'resend';

<<<<<<< HEAD
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  // try {
  //   const { name, email, phone, company, budget } = await request.json();

  //   if (!name || !email) {
  //     return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
  //   }

  //   await resend.emails.send({
  //     from: 'mail@stackria.com', // Your verified sender email
  //     to: 'hello@stackria.com',     // Your receiving email
  //     subject: 'New Contact Form Submission from Stackria',
  //     html: `
  //       <h2>New Contact Form Submission</h2>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
  //       <p><strong>Company:</strong> ${company || 'N/A'}</p>
  //       <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
  //     `,
  //   });

  //   return NextResponse.json({ message: 'Message sent successfully' });
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  // }
  console.log('hello')
=======
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, company, budget } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'mail@stackria.com', // Your verified sender email
      to: 'hello@stackria.com',     // Your receiving email
      subject: 'New Contact Form Submission from Stackria',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
>>>>>>> b36d111ab7b3f8582124baea3574876f5b08da07
}
