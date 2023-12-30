import { UserDecorator } from './user.decorator';

describe('UserDecorator', () => {
  it('should be defined', () => {
    expect(new UserDecorator()).toBeDefined();
  });
});
