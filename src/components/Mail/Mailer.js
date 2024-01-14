import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './Email'; 

const transporter = nodemailer.createTransport({
  host: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'testing22707@gmail.com',
    pass: 'Testing@22707',
  },
});

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: 'testing22707@gmail.com',
  to: 'afaqahmed0321@gmail.com',
  subject: 'hello world',
};

await transporter.sendMail(options);
