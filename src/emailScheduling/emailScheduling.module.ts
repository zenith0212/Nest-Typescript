import { Module } from '@nestjs/common';
import EmailSchedulingService from './emailScheduling.service';
import { EmailModule } from '../email/email.module';
import EmailSchedulingController from './emailScheduling.controller';

@Module({
  imports: [
    EmailModule.register({
      service: 'gmail',
      user: 'email.account@gmail.com',
      password: 'mystrongpassword',
    }),
  ],
  controllers: [EmailSchedulingController],
  providers: [EmailSchedulingService],
})
export class EmailSchedulingModule {}
