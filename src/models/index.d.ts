import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum WordState {
  RED = "RED",
  BLUE = "BLUE",
  ASSASSIN = "ASSASSIN",
  NEUTRAL = "NEUTRAL"
}

export enum TeamColor {
  RED = "RED",
  BLUE = "BLUE",
  UNDECIDED = "UNDECIDED"
}

export enum StateGame {
  WAITING = "WAITING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED"
}

type EagerWordType = {
  readonly Word?: string | null;
  readonly Type?: WordState | keyof typeof WordState | null;
}

type LazyWordType = {
  readonly Word?: string | null;
  readonly Type?: WordState | keyof typeof WordState | null;
}

export declare type WordType = LazyLoading extends LazyLoadingDisabled ? EagerWordType : LazyWordType

export declare const WordType: (new (init: ModelInit<WordType>) => WordType)

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PlayerName?: string | null;
  readonly Team?: TeamColor | keyof typeof TeamColor | null;
  readonly Score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PlayerName?: string | null;
  readonly Team?: TeamColor | keyof typeof TeamColor | null;
  readonly Score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

type EagerGameSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameSession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Players: (string | null)[];
  readonly GameState?: StateGame | keyof typeof StateGame | null;
  readonly CurrentTurn?: TeamColor | keyof typeof TeamColor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGameSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameSession, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Players: (string | null)[];
  readonly GameState?: StateGame | keyof typeof StateGame | null;
  readonly CurrentTurn?: TeamColor | keyof typeof TeamColor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GameSession = LazyLoading extends LazyLoadingDisabled ? EagerGameSession : LazyGameSession

export declare const GameSession: (new (init: ModelInit<GameSession>) => GameSession) & {
  copyOf(source: GameSession, mutator: (draft: MutableModel<GameSession>) => MutableModel<GameSession> | void): GameSession;
}