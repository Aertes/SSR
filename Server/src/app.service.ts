import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  setHello(params): string {
    return `${params} say Hello World-`;
  }
}
