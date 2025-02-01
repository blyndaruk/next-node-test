import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import * as process from 'process';

import { NodemailerService } from './nodemailer.service';

// nodemailer module
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: `${process.env.EMAIL_HOST}`,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.NODE_ENV === 'production',
        auth: {
          user: `${process.env.EMAIL_USER}`,
          pass: `${process.env.EMAIL_PASS}`,
        },
        tls: {
          rejectUnauthorized: true,
        },
      },
      defaults: {
        from: `${process.env.EMAIL_FROM}`,
      },
    }),
  ],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule {}
