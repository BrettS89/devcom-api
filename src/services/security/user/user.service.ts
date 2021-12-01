// Initializes the `security/user` service on path `/security/user`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { User } from './user.class';
import createModel from '../../../models/user.model';
import hooks from './hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'security/user': User & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$options', '$regex', '$search', '$text', '$exists', '$and'],
  };

  // Initialize our service with any options it requires
  app.use('/security/user', new User(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('security/user');

  service.hooks(hooks);
}
