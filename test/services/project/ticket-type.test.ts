import app from '../../../src/app';

describe('\'project/ticket-type\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/ticket-type');
    expect(service).toBeTruthy();
  });
});
