// Initializes the `communication/channel-member` service on path `/communication/channel-member`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { ChannelMember } from './channel-member.class';
import createModel from '../../../models/channel-member.model';
import hooks from './channel-member.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'communication/channel-member': ChannelMember & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/communication/channel-member', new ChannelMember(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('communication/channel-member');

  service.hooks(hooks);
}
