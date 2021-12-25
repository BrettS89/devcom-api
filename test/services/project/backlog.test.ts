import app from '../../../src/app';

describe('\'project/backlog\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/backlog');
    expect(service).toBeTruthy();
  });
});
