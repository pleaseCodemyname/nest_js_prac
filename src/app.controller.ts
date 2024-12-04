// controller 소스 - client의 request를 처리하고, response를 보냅니다.
import { Controller, Get } from '@nestjs/common'; // Controller는 client의 요청에 대한 라우팅 처리
import { AppService } from './app.service'; // provider인 AppService에게 비즈니스 처리 요청 보냄

@Controller() // Controller는 client의 요청에 대한 라우팅 처리
export class AppController {
  constructor(private readonly appService: AppService) {} // provider인 AppService에게 비즈니스 처리 요청 보냄

  @Get()
  getHello(): string {
    return this.appService.getHello(); // 서비스에서 받은 결과를 client에 응답으로 보냄
  }
}
