import { Hook } from "@feathersjs/feathers";

export const setTicketNumber: Hook = async (context) => {
  const { app, data } = context;

  const lastTicket = await app.service('project/ticket')
    .find({
      query: {
        projectId: data.projectId,
        $sort: { createdAt: -1 },
      },
    });

  const lastNumber = lastTicket.data[0]?.number || 0;

  const newNumber = lastNumber + 1;

  data.number = newNumber;

  return context;
};
