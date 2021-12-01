import app from '../../src/app';

describe('\'channel-member\' service', () => {
  it('registered the service', () => {
    const service = app.service('channel-member');
    expect(service).toBeTruthy();
  });
});
