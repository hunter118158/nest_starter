import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';



//就是一个功能
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
