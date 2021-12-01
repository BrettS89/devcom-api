import { HookContext } from '@feathersjs/feathers';

export const resolvers = {
  joins: {
    messages: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.messages = (
        (await app
          .service('communication/message')
          .find({
            query: {
              dmId: resource._id,
              $limit: 20,
              $resolve: {
                user: true,
              },
            },
          }))?.data || []
      )
    },
    //@ts-ignore
    usersName: (...args: any) => async (resource: Record<string, any>, { app, params: { user } }: HookContext) => {
      const id = resource.userIds.find(id => id.toString() !== user?._id.toString());
      const foundUser = await app.service('security/user').get(id);
      resource.username = `${foundUser.firstName} ${foundUser.lastName}`;
    },
  }
};
