import { Injectable, NotFoundException } from '@nestjs/common';

 export interface Convidado {
  id: number;
  nome: string;
  email: string;
}

@Injectable()
export class ConvidadosService {
  private convidados: Convidado[] = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' },
  ];

  private proximoId = 3;

  // Listar todos os convidados
  findAll() {
    return this.convidados;
  }

  // Buscar um convidado pelo ID
  findOne(id: number) {
    const convidado = this.convidados.find(
      (convidado) => convidado.id === id,
    );

    if (!convidado) {
      throw new NotFoundException('Convidado não encontrado');
    }

    return convidado;
  }

  // Cadastrar um convidado
  create(dados: Omit<Convidado, 'id'>) {
    const novoConvidado: Convidado = {
      id: this.proximoId++,
      nome: dados.nome,
      email: dados.email,
    };

    this.convidados.push(novoConvidado);

    return novoConvidado;
  }

  // Atualizar os campos enviados
  update(id: number, dados: Partial<Omit<Convidado, 'id'>>) {
    const convidado = this.findOne(id);

    if (dados.nome !== undefined) {
      convidado.nome = dados.nome;
    }

    if (dados.email !== undefined) {
      convidado.email = dados.email;
    }

    return convidado;
  }

  // Excluir um convidado
  remove(id: number) {
    const convidado = this.findOne(id);

    this.convidados = this.convidados.filter(
      (item) => item.id !== convidado.id,
    );
  }
}