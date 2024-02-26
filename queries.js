/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMap = /* GraphQL */ `
  query GetMap($id: ID!) {
    getMap(id: $id) {
      id
      GameSession {
        id
        Players
        GameState
        CurrentTurn
        createdAt
        updatedAt
        __typename
      }
      val1 {
        Word
        Type
        __typename
      }
      val2 {
        Word
        Type
        __typename
      }
      val3 {
        Word
        Type
        __typename
      }
      val4 {
        Word
        Type
        __typename
      }
      val5 {
        Word
        Type
        __typename
      }
      val6 {
        Word
        Type
        __typename
      }
      val7 {
        Word
        Type
        __typename
      }
      val8 {
        Word
        Type
        __typename
      }
      val9 {
        Word
        Type
        __typename
      }
      val10 {
        Word
        Type
        __typename
      }
      val11 {
        Word
        Type
        __typename
      }
      val12 {
        Word
        Type
        __typename
      }
      val13 {
        Word
        Type
        __typename
      }
      val14 {
        Word
        Type
        __typename
      }
      val15 {
        Word
        Type
        __typename
      }
      val16 {
        Word
        Type
        __typename
      }
      val17 {
        Word
        Type
        __typename
      }
      val18 {
        Word
        Type
        __typename
      }
      val19 {
        Word
        Type
        __typename
      }
      val20 {
        Word
        Type
        __typename
      }
      val21 {
        Word
        Type
        __typename
      }
      val22 {
        Word
        Type
        __typename
      }
      val23 {
        Word
        Type
        __typename
      }
      val24 {
        Word
        Type
        __typename
      }
      val25 {
        Word
        Type
        __typename
      }
      createdAt
      updatedAt
      mapGameSessionId
      __typename
    }
  }
`;
export const listMaps = /* GraphQL */ `
  query ListMaps(
    $filter: ModelMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        mapGameSessionId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      PlayerName
      Team
      Score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PlayerName
        Team
        Score
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGameSession = /* GraphQL */ `
  query GetGameSession($id: ID!) {
    getGameSession(id: $id) {
      id
      Players
      GameState
      CurrentTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGameSessions = /* GraphQL */ `
  query ListGameSessions(
    $filter: ModelGameSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Players
        GameState
        CurrentTurn
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
