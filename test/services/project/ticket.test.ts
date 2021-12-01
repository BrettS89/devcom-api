import app from '../../../src/app';

describe('\'project/ticket\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/ticket');
    expect(service).toBeTruthy();
  });
});
