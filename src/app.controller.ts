import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//controller主要是路径和注入实现，是module的组件
//因为要调用appService所以要注入到controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
