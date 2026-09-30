import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Bem-vindo ao SENAI');
  });

  it('/info (GET)', () => {
    return request(app.getHttpServer())
      .get('/info')
      .expect(200)
      .expect({
        disciplina: 'Desenvolvimento de Sistemas',
        'carga-horaria': 120,
        semestre: 1,
        ativo: true,
      });
  });

  it('/cursos (GET)', () => {
    return request(app.getHttpServer())
      .get('/cursos')
      .expect(200)
      .expect([
        'Técnico em Desenvolvimento de Sistemas',
        'Técnico em Eletrotécnica',
        'Técnico em Mecânica',
      ]);
  });

  it('/cursos/:nome (GET)', () => {
    return request(app.getHttpServer())
      .get('/cursos/eletrotecnica')
      .expect(200)
      .expect('eletrotecnica');
  });

  afterEach(async () => {
    await app.close();
  });
});
