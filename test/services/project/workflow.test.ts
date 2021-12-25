import app from '../../../src/app';

describe('\'project/workflow\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/workflow');
    expect(service).toBeTruthy();
  });
});
