import { fastJoin } from 'feathers-hooks-common';
import { resolvers } from '../ticket.resolvers';
import { setTicketNumber } from './setTicketNumber';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setTicketNumber],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [fastJoin(resolvers, ctx => ctx.params.resolve || {})],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
