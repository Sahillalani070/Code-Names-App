/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMap = /* GraphQL */ `
  mutation CreateMap(
    $input: CreateMapInput!
    $condition: ModelMapConditionInput
  ) {
    createMap(input: $input, condition: $condition) {
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
export const updateMap = /* GraphQL */ `
  mutation UpdateMap(
    $input: UpdateMapInput!
    $condition: ModelMapConditionInput
  ) {
    updateMap(input: $input, condition: $condition) {
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
export const deleteMap = /* GraphQL */ `
  mutation DeleteMap(
    $input: DeleteMapInput!
    $condition: ModelMapConditionInput
  ) {
    deleteMap(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createGameSession = /* GraphQL */ `
  mutation CreateGameSession(
    $input: CreateGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    createGameSession(input: $input, condition: $condition) {
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
export const updateGameSession = /* GraphQL */ `
  mutation UpdateGameSession(
    $input: UpdateGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    updateGameSession(input: $input, condition: $condition) {
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
export const deleteGameSession = /* GraphQL */ `
  mutation DeleteGameSession(
    $input: DeleteGameSessionInput!
    $condition: ModelGameSessionConditionInput
  ) {
    deleteGameSession(input: $input, condition: $condition) {
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
