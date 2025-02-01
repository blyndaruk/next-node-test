import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'

import { AppModule } from '../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('User can view sign in page', () => {
    return request(`${process.env.WEB_APP_URL}`).get('').expect(200)
  })
})
