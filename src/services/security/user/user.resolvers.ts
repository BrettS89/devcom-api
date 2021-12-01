import { HookContext } from '@feathersjs/feathers';

export const resolvers = {
  joins: {
    account: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.account = (
        await app
          .service('security/account')
          .get(resource.accountId)
      )
    },
    role: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.role = (
        await app
          .service('security/role')
          .get(resource.roleId)
      )
    },
    channels: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.channels = (
        (await app
          .service('communication/channel-member')
          .find({
            query: {
              userId: resource.userId,
            },
          })).data
      )
    },
  }
};
