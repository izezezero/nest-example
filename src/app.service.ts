import { Injectable } from '@nestjs/common';
import { TestObject } from './app.interface'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World asdiouajdiujasiuod asaws! ';
  }
  getTest(): TestObject{
    return { 
      message: "aspoidkaopdk"
    };
  }
}
