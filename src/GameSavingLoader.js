import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    read()
      .then((responce) => json(responce))
      .then((response) => {
        const gameSaving = new GameSaving();
        return gameSaving = response;
      });
  }
}