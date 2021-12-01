import { HookContext } from '@feathersjs/feathers';

export const resolvers = {
  joins: {
    messages: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.messages = (
        (await app
          .service('communication/message')
          .find({
            query: {
              channelId: resource._id,
              $limit: 20,
              $resolve: {
                user: true,
              }
            },
          }))?.data || []
      )
    },
  }
};
