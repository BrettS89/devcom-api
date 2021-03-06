import { fastJoin } from 'feathers-hooks-common';
import { resolvers } from '../user.resolvers';
import { hashPassword, setFullName } from './hooks';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      hashPassword,
      setFullName,
    ],
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
