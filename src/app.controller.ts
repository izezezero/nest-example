import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface TestObject {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("test")
  getTest(): TestObject {
    return this.appService.getTest();
  }
}
