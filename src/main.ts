import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
// tslint:disable-next-line: no-var-requires
require('reflect-metadata');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局范围内使用异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  // 端口号
  await app.listen(3003);
}
bootstrap();
