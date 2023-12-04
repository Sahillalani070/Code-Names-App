export const schema = {
    "models": {
        "Player": {
            "name": "Player",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "PlayerName": {
                    "name": "PlayerName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Team": {
                    "name": "Team",
                    "isArray": false,
                    "type": {
                        "enum": "TeamColor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Score": {
                    "name": "Score",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Players",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "GameSession": {
            "name": "GameSession",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Players": {
                    "name": "Players",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "GameState": {
                    "name": "GameState",
                    "isArray": false,
                    "type": {
                        "enum": "StateGame"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CurrentTurn": {
                    "name": "CurrentTurn",
                    "isArray": false,
                    "type": {
                        "enum": "TeamColor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GameSessions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "WordState": {
            "name": "WordState",
            "values": [
                "RED",
                "BLUE",
                "ASSASSIN",
                "NEUTRAL"
            ]
        },
        "TeamColor": {
            "name": "TeamColor",
            "values": [
                "RED",
                "BLUE",
                "UNDECIDED"
            ]
        },
        "StateGame": {
            "name": "StateGame",
            "values": [
                "WAITING",
                "IN_PROGRESS",
                "COMPLETED"
            ]
        }
    },
    "nonModels": {
        "WordType": {
            "name": "WordType",
            "fields": {
                "Word": {
                    "name": "Word",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Type": {
                    "name": "Type",
                    "isArray": false,
                    "type": {
                        "enum": "WordState"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "9dcfc04ec2b4dbdc614d4377709e811b"
};