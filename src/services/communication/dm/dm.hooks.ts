import { fastJoin } from 'feathers-hooks-common';
import { resolvers } from './dm.resolvers';
import { authenticate } from '../../../hooks/authenticate';

export default {
  before: {
    all: [authenticate],
    find: [],
    get: [],
    create: [],
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
