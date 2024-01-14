import * as React from 'react';
import { Button } from 'react-bootstrap'; 
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

export function Email(props) {

    const { url } = props;

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
      
      transporter.sendMail(options);
      

    return (
        <div>
            <Button href={url}>Click me</Button>
        </div>
    );
}