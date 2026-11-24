import { Module } from '@nestjs/common';
import { ConvidadosService } from './convidados.service.js';
import { ConvidadosController } from './convidados.controller.js';

@Module({
  providers: [ConvidadosService],
  controllers: [ConvidadosController]
})
export class ConvidadosModule {}
