import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQLModuleClass } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { FastifyReply, FastifyRequest } from 'fastify';
import { join } from 'path';

interface IContext {
  request: FastifyRequest & { extra?: { request: { rawHeaders: string[] } } };
  reply: FastifyReply;
}

export interface IContextServer {
  req: FastifyRequest;
  res: FastifyReply;
  socketToken?: string;
}

// graphql module
@Module({
  imports: [
    GraphQLModuleClass.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageLocalDefault(),
      ],
      autoSchemaFile: join(process.cwd(), 'src/app/schema.graphql'),
      subscriptions: {
        'graphql-ws': true,
      },
      context: async (
        request: IContext['request'],
        replay: IContext['reply'],
      ): Promise<IContextServer> => {
        const cookies = request?.extra?.request?.rawHeaders
          ?.find((el) => el.includes('token='))
          ?.replaceAll(' ', '')
          ?.split(';');
        const socketToken: string | undefined = cookies
          ?.find((el) => el.includes('token='))
          ?.replace('token=', '');

        return {
          req: {
            ...request,
            cookies: !socketToken
              ? { ...request.cookies }
              : { ...request.cookies, token: socketToken },
          },
          res: replay,
          socketToken,
        };
      },
    }),
  ],
})
export class GraphqlModule {}
