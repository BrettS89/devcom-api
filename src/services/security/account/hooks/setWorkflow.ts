import { Hook } from '@feathersjs/feathers';

export const setWorkflow: Hook = async (context) => {
  const { app, result } = context;

  const workflow = [
    {
      name: 'Backlog',
      order: 1,
      status: 'backlog',
    },
    {
      name: 'Ready to Begin',
      order: 2,
      status: 'unstarted',
    },
    {
      name: 'In Progress',
      order: 3,
      status: 'started'
    },
    {
      name: 'In QA',
      order: 4,
      status: 'started',
    },
    {
      name: 'Done',
      order: 5,
      status: 'complete',
    },
    {
      name: 'Cancelled',
      order: 6,
      status: 'cancelled',
    },
  ];

  const promises = workflow.map(item => {
    return app
      .service('project/workflow')
      .create({
        accountId: result._id,
        ...item,
      });
  });
  
  await Promise.all(promises);

  return context;
};
