import { Hook } from '@feathersjs/feathers';

export const setTicketTypes: Hook = async (context) => {
  const { app, result } = context;

  const workflow = [
    {
      name: 'Feature',
    },
    {
      name: 'Bug',
    },
    {
      name: 'Task',
    },
  ];

  const promises = workflow.map(item => {
    return app
      .service('project/ticket-type')
      .create({
        accountId: result._id,
        ...item,
      });
  });
  
  await Promise.all(promises);

  return context;
};
