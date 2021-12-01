import app from '../../../src/app';

describe('\'communication/channel\' service', () => {
  it('registered the service', () => {
    const service = app.service('communication/channel');
    expect(service).toBeTruthy();
  });
});
