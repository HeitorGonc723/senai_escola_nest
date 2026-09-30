import { Controller, Get, Param } from '@nestjs/common';

@Controller('cursos')
export class CursosController {
	@Get()
	getCursos(): string[] {
		return [
			'Técnico em Desenvolvimento de Sistemas',
			'Técnico em Eletrotécnica',
			'Técnico em Mecânica',
		];
	}

	@Get(':nome')
	getCursoPorNome(@Param('nome') nome: string): string {
		return nome;
	}
}
