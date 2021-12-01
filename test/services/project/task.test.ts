import app from '../../../src/app';

describe('\'project/task\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/task');
    expect(service).toBeTruthy();
  });
});
