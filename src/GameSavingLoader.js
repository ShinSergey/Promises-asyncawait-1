import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    read()
      .then((responce1) => {
        console.log(responce1)
        json(responce1)})
      .then((responce2) => {
        console.log(responce2)
        return new GameSaving(responce2.id, responce2.created, responce2.userInfo);
      });
  }
}

const save = GameSavingLoader.load();