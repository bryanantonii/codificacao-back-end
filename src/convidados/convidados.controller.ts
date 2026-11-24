import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { ConvidadosService } from './convidados.service.js';
import { CriarConvidadoDto } from './dto/criar-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {
  constructor(
    private readonly convidadosService: ConvidadosService,
  ) {}

  // Listar todos
  @Get()
  findAll() {
    return this.convidadosService.findAll();
  }

  // Buscar pelo ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.convidadosService.findOne(id);
  }

  // Cadastrar
  @Post()
  create(@Body() dados: CriarConvidadoDto) {
    return this.convidadosService.create(dados);
  }

  // Atualizar com PUT
  @Put(':id')
  updatePut(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: UpdateConvidadoDto,
  ) {
    return this.convidadosService.update(id, dados);
  }

  // Atualizar com PATCH
  @Patch(':id')
  updatePatch(
    @Param('id', ParseIntPipe) id: number,
    @Body() dados: UpdateConvidadoDto,
  ) {
    return this.convidadosService.update(id, dados);
  }

  // Excluir sem retornar conteúdo
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.convidadosService.remove(id);
  }
}