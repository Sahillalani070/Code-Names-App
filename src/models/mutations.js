/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
