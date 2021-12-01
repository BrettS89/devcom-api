// Initializes the `project/task` service on path `/project/task`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Task } from './task.class';
import createModel from '../../../models/task.model';
import hooks from './task.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/task': Task & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/task', new Task(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/task');

  service.hooks(hooks);
}
