import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller.js';

@Module({
  controllers: [CursosController]
})
export class CursosModule {}
