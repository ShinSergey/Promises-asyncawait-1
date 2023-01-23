import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((responce1) => json(responce1))
      .then((responce2) => {
        const obj = JSON.parse(responce2);
        return new GameSaving(obj.id, obj.created, obj.userInfo);
      });
  }
}
