import { HookContext } from '@feathersjs/feathers';

export const resolvers = {
  joins: {
    messages: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.messages = (
        (await app
          .service('communication/message')
          .find({
            query: {
              ticketId: resource._id,
              $limit: 20,
              $resolve: {
                user: true,
              }
            },
          }))?.data || []
      )
    },
    assigner: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.assigner = !resource.assignerUserId ? null : (
        await app
          .service('security/user')
          .get(resource.assignerUserId)
      )
    },
    assignee: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.assignee = !resource.assigneeUserId ? null : (
        await app
          .service('security/user')
          .get(resource.assigneeUserId)
      )
    },
    tester: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.tester = !resource.testerUserId ? null : (
        await app
          .service('security/user')
          .get(resource.testerUserId)
      )
    },
    sprint: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.sprint = !resource.sprintId ? null : (
        await app
          .service('project/sprint')
          .get(resource.sprintId)
      )
    },
    status: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.status = !resource.statusId ? null : (
        await app
          .service('project/workflow')
          .get(resource.statusId)
      )
    },
    type: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.type = !resource.typeId ? null : (
        await app
          .service('project/ticket-type')
          .get(resource.typeId)
      )
    },
  }
};
