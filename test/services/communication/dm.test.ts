import app from '../../../src/app';

describe('\'communication/dm\' service', () => {
  it('registered the service', () => {
    const service = app.service('communication/dm');
    expect(service).toBeTruthy();
  });
});
