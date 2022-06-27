import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { LinkModule } from './links/link.module';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
