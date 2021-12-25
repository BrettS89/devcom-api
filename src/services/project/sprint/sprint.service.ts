// Initializes the `project/sprint` service on path `/project/sprint`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Sprint } from './sprint.class';
import createModel from '../../../models/sprint.model';
import hooks from './sprint.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/sprint': Sprint & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/sprint', new Sprint(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/sprint');

  service.hooks(hooks);
}
