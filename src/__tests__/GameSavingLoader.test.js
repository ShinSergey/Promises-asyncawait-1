import GameSavingLoader from '../GameSavingLoader';

test('should load', () => {
  GameSavingLoader.load().then((data) => {
    expect(data).toEqual({
      created: 1546300800,
      id: 9,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  });
});
