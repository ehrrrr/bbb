import { helloBuilder } from '../src/handlers';

describe('helloBuilder', () => {
  it('returns correct data', async () => {
    const expectedResponse = { hello: 'test' };
    const actualResponse = helloBuilder('test');

    expect(actualResponse).toEqual(expectedResponse);
  });
});
