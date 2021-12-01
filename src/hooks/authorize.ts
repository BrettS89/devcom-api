import { HookContext } from '@feathersjs/feathers';

export const authorize = async (context: HookContext): Promise<HookContext> => {
  return context;
};
