export type IDLType = {
    "version": "0.1.0",
    "name": "bank_simulator",
    "instructions": [
      {
        "name": "initializeAccount",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clockworkProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "holderName",
            "type": "string"
          },
          {
            "name": "balance",
            "type": "f64"
          }
        ]
      },
      {
        "name": "deposit",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "amount",
            "type": "f64"
          }
        ]
      },
      {
        "name": "withdraw",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "amount",
            "type": "f64"
          }
        ]
      },
      {
        "name": "addInterest",
        "accounts": [
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          }
        ]
      },
      {
        "name": "removeAccount",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clockworkProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "BankAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "holder",
              "type": "publicKey"
            },
            {
              "name": "holderName",
              "type": "string"
            },
            {
              "name": "balance",
              "type": "f64"
            },
            {
              "name": "threadId",
              "type": "bytes"
            },
            {
              "name": "createdAt",
              "type": "i64"
            },
            {
              "name": "updatedAt",
              "type": "i64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "AmountTooSmall",
        "msg": "Amount must be greater than zero"
      },
      {
        "code": 6001,
        "name": "AmountTooBig",
        "msg": "Withdraw amount cannot be less than deposit"
      }
    ]
}

export const IDLData: IDLType = {
    "version": "0.1.0",
    "name": "bank_simulator",
    "instructions": [
      {
        "name": "initializeAccount",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clockworkProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "holderName",
            "type": "string"
          },
          {
            "name": "balance",
            "type": "f64"
          }
        ]
      },
      {
        "name": "deposit",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "amount",
            "type": "f64"
          }
        ]
      },
      {
        "name": "withdraw",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          },
          {
            "name": "amount",
            "type": "f64"
          }
        ]
      },
      {
        "name": "addInterest",
        "accounts": [
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          }
        ]
      },
      {
        "name": "removeAccount",
        "accounts": [
          {
            "name": "holder",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "bankAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "thread",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "threadAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clockworkProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "threadId",
            "type": "bytes"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "BankAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "holder",
              "type": "publicKey"
            },
            {
              "name": "holderName",
              "type": "string"
            },
            {
              "name": "balance",
              "type": "f64"
            },
            {
              "name": "threadId",
              "type": "bytes"
            },
            {
              "name": "createdAt",
              "type": "i64"
            },
            {
              "name": "updatedAt",
              "type": "i64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "AmountTooSmall",
        "msg": "Amount must be greater than zero"
      },
      {
        "code": 6001,
        "name": "AmountTooBig",
        "msg": "Withdraw amount cannot be less than deposit"
      }
    ]
}