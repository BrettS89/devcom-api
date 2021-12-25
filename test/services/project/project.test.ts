import app from '../../../src/app';

describe('\'project/project\' service', () => {
  it('registered the service', () => {
    const service = app.service('project/project');
    expect(service).toBeTruthy();
  });
});
