// service 소스 - contoller가 요청한 비즈니스 로직을 처리합니다.
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'; // controller의 요청을 받은 서비스는 비즈니스 로직을 처리한 후 controller에게 return 합니다.
  }
}
