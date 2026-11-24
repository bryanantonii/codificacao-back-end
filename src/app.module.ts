import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosModule } from './convidados/convidados.module.js';

@Module({
  imports: [ConvidadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
