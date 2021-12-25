// Initializes the `project/workflow` service on path `/project/workflow`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Workflow } from './workflow.class';
import createModel from '../../../models/workflow.model';
import hooks from './workflow.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/workflow': Workflow & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/workflow', new Workflow(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/workflow');

  service.hooks(hooks);
}
