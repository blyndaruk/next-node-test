import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

// nodemailer service
@Injectable()
export class NodemailerService {
  constructor(private readonly mailerService: MailerService) {}

  // send email
  async sendEmail(args: ISendMailOptions): Promise<SentMessageInfo> {
    try {
      await this.mailerService.sendMail({ ...args, bcc: process.env.EMAIL_FROM });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Can`t send email');
    }
  }
}
