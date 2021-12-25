// Initializes the `project/project` service on path `/project/project`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Project } from './project.class';
import createModel from '../../../models/project.model';
import hooks from './project.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/project': Project & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/project', new Project(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/project');

  service.hooks(hooks);
}
