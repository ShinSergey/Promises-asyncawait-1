import GameSaving from '../GameSaving';

test('should create GameSaving', () => {
  const save = new GameSaving(1, 2, 3);
  expect(save).toEqual({ id: 1, created: 2, userInfo: 3 });
});
