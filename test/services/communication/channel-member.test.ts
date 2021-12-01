import app from '../../../src/app';

describe('\'communication/channel-member\' service', () => {
  it('registered the service', () => {
    const service = app.service('communication/channel-member');
    expect(service).toBeTruthy();
  });
});
