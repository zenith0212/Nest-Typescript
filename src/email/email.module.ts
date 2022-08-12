import { DynamicModule, Module } from '@nestjs/common';
import EmailService from './email.service';
import { EMAIL_CONFIG_OPTIONS } from './constants';
import EmailOptions from './emailOptions.interface';

@Module({})
export class EmailModule {
  static register(options: EmailOptions): DynamicModule {
    return {
      module: EmailModule,
      providers: [
        {
          provide: EMAIL_CONFIG_OPTIONS,
          useValue: options,
        },
        EmailService,
      ],
      exports: [EmailService],
    };
  }
}
