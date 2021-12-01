// Initializes the `communication/dm` service on path `/communication/dm`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Dm } from './dm.class';
import createModel from '../../../models/dm.model';
import hooks from './dm.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'communication/dm': Dm & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/communication/dm', new Dm(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('communication/dm');

  service.hooks(hooks);
}
