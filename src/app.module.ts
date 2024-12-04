// module 소스 - 모듈을 정의합니다. (Controller와 service 정의)
// AppModule은 main.ts에서 지정한 root Module입니다.
// module은 @Module 데코레이터를 사용하여 ㅅ너언
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UsersModule, CatsModule], // imports는 다른 module을 가져올 때 사용합니다.
  controllers: [AppController], // controllers는 이 모듈에서 사용하는 컨트롤러의 세트입니다.
  providers: [AppService], // providers는 NestJS의 injector에 의해 인스턴스화 되는 class를 지정합니다.
})
export class AppModule {} // export를 통해 모듈을 다른 곳에서 사용할 수 있습니다.