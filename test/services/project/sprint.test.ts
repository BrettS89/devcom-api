import app from '../../../src/app';

describe('\'project/sprint\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/sprint');
    expect(service).toBeTruthy();
  });
});
