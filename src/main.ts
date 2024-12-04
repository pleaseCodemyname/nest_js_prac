// 프로젝트 시작점(Entry Point), 시작소스 - 서버를 스타트하고 포트 설정, CORS등을 정의합니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // NetsFactory를 사용하여  Application 인스턴스 생성, 생성시에는 AppModule을 사용하도록 지정
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
