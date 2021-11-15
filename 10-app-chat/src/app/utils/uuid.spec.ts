import { UUID } from './uuid';

describe('UUID', () => {
  it('should create an instance', () => {
    expect(new UUID()).toBeTruthy();
  });
});
