// Initializes the `project/ticket` service on path `/project/ticket`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Ticket } from './ticket.class';
import createModel from '../../../models/ticket.model';
import hooks from './hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/ticket': Ticket & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/ticket', new Ticket(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/ticket');

  service.hooks(hooks);
}
