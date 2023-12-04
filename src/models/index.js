// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const WordState = {
  "RED": "RED",
  "BLUE": "BLUE",
  "ASSASSIN": "ASSASSIN",
  "NEUTRAL": "NEUTRAL"
};

const TeamColor = {
  "RED": "RED",
  "BLUE": "BLUE",
  "UNDECIDED": "UNDECIDED"
};

const StateGame = {
  "WAITING": "WAITING",
  "IN_PROGRESS": "IN_PROGRESS",
  "COMPLETED": "COMPLETED"
};

const { Player, GameSession, WordType } = initSchema(schema);

export {
  Player,
  GameSession,
  WordState,
  TeamColor,
  StateGame,
  WordType
};