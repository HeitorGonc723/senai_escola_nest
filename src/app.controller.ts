import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('info')
  getInfo() {
    return {
      disciplina: 'Desenvolvimento de Sistemas',
      'carga-horaria': 120,
      semestre: 1,
      ativo: true,
    };
  }
}
