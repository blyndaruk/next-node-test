import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import compression from '@fastify/compress';
import fastifyCookie from '@fastify/cookie';

import { AppModule } from './app.module';
import { cookieSecret, corsConfig, nodeEnv, port } from './config';

// server
const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.enableCors(corsConfig);

  await app.register(fastifyCookie, { secret: cookieSecret });
  await app.register(compression, { encodings: ['gzip', 'deflate'] });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, stopAtFirstError: true, transform: true }),
  );

  await app.listen(port, () =>
    console.log(`server start: port - ${port}; environment - ${nodeEnv}`),
  );
};

// start server
bootstrap().catch((error) => console.log('--- server error: ', error));
