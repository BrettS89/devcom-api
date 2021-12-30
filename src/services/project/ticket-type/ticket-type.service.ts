// Initializes the `project/ticket-type` service on path `/project/ticket-type`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { TicketType } from './ticket-type.class';
import createModel from '../../../models/ticket-type.model';
import hooks from './ticket-type.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'project/ticket-type': TicketType & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/project/ticket-type', new TicketType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('project/ticket-type');

  service.hooks(hooks);
}
