import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((responce) => json(responce))
      .then((jsoned) => {
        const obj = JSON.parse(jsoned);
        return new GameSaving(obj.id, obj.created, obj.userInfo);
      });
  }
}
