# Deploy a contract
Instructions for Deploying ICS 100 (Atomic Swap) and ICS 101 (Interchain Swap) Cosmwasm Contracts:

## Introduction:
ICS 100 and ICS 101 are the first cross-chain DApps based on the IBC protocol. You can deploy them on any Cosmwasm blockchain, such as Injective, Osmosis, Neutron and more. They enable asset exchange among blockchains that have deployed this contract.

## Deploy a contract

> **NOTE** :
> We are currently in the testing stage. Please deploy the contract only on the testnet and avoid doing so on any mainnet.

### Download contract
First, You need to download the latest contract from [github release](https://github.com/sideprotocol/ibcswap-wasm/releases)


### Deploy contract
There are two ways to deploy contracts:

### Deploy contract via the CLI

> Here, we are using `sided` as an example to upload the contract to the SIDE blockchain. If you intend to upload it to other blockchains, you can easily substitute `sided` with the name of the respective binary.

1. Upload

Upload the contract using the following command:

```shell
sided tx wasm store <CONRTACT_NAME.wasm> --chain-id="side-testnet-1" --from <KEY> -y --gas-prices=0.025uside --gas=auto --gas-adjustment 1.5
```
Subsequently, this will provide you with a transaction hash. Using this information, you should initiate a query to retrieve the code ID associated with the contract on the blockchain.
```shell
sided q tx 38330E909CD219B80927009DA37FD69D334D19B2AD4EC47456A24E85034F0085 --output=json
```
This will provide transaction data, which includes the code ID of our contract.

```json
{
  "height":"88588",
  "txhash":"A4F97683A5A648D5BDB355AD48C2380CD8C3406C40C5C97462134A642FEFD5D6",
  "codespace":"",
  "code":0,
  "data":"124E0A262F636F736D7761736D2E7761736D2E76312E4D736753746F7265436F6465526573706F6E73651224080212208998B8C5DA8803F0A1BF966C287342DB563AF38855E3D864B2E544B446935CA7",
  "raw_log":"[{\"msg_index\":0,\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmwasm.wasm.v1.MsgStoreCode\"},{\"key\":\"sender\",\"value\":\"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld\"},{\"key\":\"module\",\"value\":\"wasm\"}]},{\"type\":\"store_code\",\"attributes\":[{\"key\":\"code_checksum\",\"value\":\"8998b8c5da8803f0a1bf966c287342db563af38855e3d864b2e544b446935ca7\"},{\"key\":\"code_id\",\"value\":\"2\"}]}]}]",
  "logs":[
    {
      "msg_index":0,
      "log":"",
      "events":[
        {
          "type":"message",
          "attributes":[
            {
              "key":"action",
              "value":"/cosmwasm.wasm.v1.MsgStoreCode"
            },
            {
              "key":"sender",
              "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld"
            },
            {
              "key":"module",
              "value":"wasm"
            }
          ]
        },
        {
          "type":"store_code",
          "attributes":[
            {
              "key":"code_checksum",
              "value":"8998b8c5da8803f0a1bf966c287342db563af38855e3d864b2e544b446935ca7"
            },
            {
              "key":"code_id",
              "value":"2"
            }
          ]
        }
      ]
    }
  ],
  "info":"",
  "gas_wanted":"62244349",
  "gas_used":"41511708",
  "tx":{
    "@type":"/cosmos.tx.v1beta1.Tx",
    "body":{
      "messages":[
        {
          "@type":"/cosmwasm.wasm.v1.MsgStoreCode",
          "sender":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "instantiate_permission":null
        }
      ],
      "memo":"",
      "timeout_height":"0",
      "extension_options":[

      ],
      "non_critical_extension_options":[

      ]
    },
    "auth_info":{
      "signer_infos":[
        {
          "public_key":{
            "@type":"/cosmos.crypto.secp256k1.PubKey",
            "key":"ArT6KLBCAim72FU76qqFuJvDE93M6UsAuLIPWo6artaO"
          },
          "mode_info":{
            "single":{
              "mode":"SIGN_MODE_DIRECT"
            }
          },
          "sequence":"5"
        }
      ],
      "fee":{
        "amount":[
          {
            "denom":"uside",
            "amount":"1556109"
          }
        ],
        "gas_limit":"62244349",
        "payer":"",
        "granter":""
      },
      "tip":null
    },
    "signatures":[
      "htd8LvE8rA5MS8O3yBsOoIkN5YeqbTOJbsisvFFZVk4KM7rzvlYxBpLwhMRxRSHjj0IwNBoMp6RpibEK02fM9g=="
    ]
  },
  "timestamp":"2023-08-27T06:57:12Z",
  "events":[
    {
      "type":"coin_spent",
      "attributes":[
        {
          "key":"spender",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "index":true
        },
        {
          "key":"amount",
          "value":"1556109uside",
          "index":true
        }
      ]
    },
    {
      "type":"coin_received",
      "attributes":[
        {
          "key":"receiver",
          "value":"side17xpfvakm2amg962yls6f84z3kell8c5lyc7646",
          "index":true
        },
        {
          "key":"amount",
          "value":"1556109uside",
          "index":true
        }
      ]
    },
    {
      "type":"transfer",
      "attributes":[
        {
          "key":"recipient",
          "value":"side17xpfvakm2amg962yls6f84z3kell8c5lyc7646",
          "index":true
        },
        {
          "key":"sender",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "index":true
        },
        {
          "key":"amount",
          "value":"1556109uside",
          "index":true
        }
      ]
    },
    {
      "type":"message",
      "attributes":[
        {
          "key":"sender",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "index":true
        }
      ]
    },
    {
      "type":"tx",
      "attributes":[
        {
          "key":"fee",
          "value":"1556109uside",
          "index":true
        },
        {
          "key":"fee_payer",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "index":true
        }
      ]
    },
    {
      "type":"tx",
      "attributes":[
        {
          "key":"acc_seq",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld/5",
          "index":true
        }
      ]
    },
    {
      "type":"tx",
      "attributes":[
        {
          "key":"signature",
          "value":"htd8LvE8rA5MS8O3yBsOoIkN5YeqbTOJbsisvFFZVk4KM7rzvlYxBpLwhMRxRSHjj0IwNBoMp6RpibEK02fM9g==",
          "index":true
        }
      ]
    },
    {
      "type":"message",
      "attributes":[
        {
          "key":"action",
          "value":"/cosmwasm.wasm.v1.MsgStoreCode",
          "index":true
        },
        {
          "key":"sender",
          "value":"side162ttnnflhvuazp42vxu5jf3fgxy750lrn3zrld",
          "index":true
        },
        {
          "key":"module",
          "value":"wasm",
          "index":true
        }
      ]
    },
    {
      "type":"store_code",
      "attributes":[
        {
          "key":"code_checksum",
          "value":"8998b8c5da8803f0a1bf966c287342db563af38855e3d864b2e544b446935ca7",
          "index":true
        },
        {
          "key":"code_id",
          "value":"2",
          "index":true
        }
      ]
    }
  ]
}
```
2. Instantiate

With the code now deployed on the chain, we can proceed to execute the logic to establish our own instance of the contract under our control. This will generate a distinct contract address that others can engage with based on the contract's logic.
```shell
CODE_ID = 123
side tx wasm instantiate $CODE_ID {"TOKEN_ID": 1}\
    --from=<KEY> -y \
    --admin=<ADDRESS_OF_ADMIN>
    --label "some-contract" \
    --broadcast-mode=block \
    --chain-id=side-testnet-1 \
    --gas-prices=0.025ujunox \
    --gas=auto \
    --gas-adjustment=1 
```

3. Query My Contracts address

You can query all your Instantiated contracts
```shell
sided q wasm list-contracts-by-creator side1m8mma95ta2zajqtmfp5c5y3wgeyqzcrc2tddvx
contract_addresses:
- side14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9scdth4q
pagination:
  next_key: null
  total: "0"

```

In this example, the contract address is "side14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9scdth4q".

4. Query Contract Info
```shell
sided q wasm contract side14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9scdth4q
address: side14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9scdth4q
contract_info:
  admin: side1m8mma95ta2zajqtmfp5c5y3wgeyqzcrc2tddvx
  code_id: "1"
  created:
    block_height: "38071"
    tx_index: "0"
  creator: side1m8mma95ta2zajqtmfp5c5y3wgeyqzcrc2tddvx
  extension: null
  ibc_port_id: wasm.side14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9scdth4q
  label: cross chain swap
```

**Note** : The `ibc_port_id` will be utilized by the relayer to establish an IBC connection with the contracts deployed on other blockchains.

### Deploy contract on ping.pub (Recommended)

Ping Dashboard offers a user-friendly web UI for interacting with WASM contracts, making it much easier for you to perform such tasks.

1. Access Ping Dashboard for the testnet.

Open either Google Chrome or Mozilla Firefox web browser. In the address bar, type "[https://testnet.ping.pub]()". Please make sure you have the Keplr Wallet Extension installed, as it's used for signing transactions.

![step1](https://github.com/sideprotocol/testnet/assets/2882920/291dce80-9314-4a72-9011-83f0ba11976a)

You can choose any CosmWasm blockchain listed on this homepage to deploy a contract. We are using SIDE as an example.

2. Upload contract on Cosmwasm Module

You can click the buttons in the order indicated on the screenshot.

<img width="1434" alt="upload" src="https://github.com/sideprotocol/testnet/assets/2882920/427131eb-db48-446c-be04-6ab79872d37e">

Once the transaction has succeeded, you will be able to see your code on the wasm code list. Please note that you might need to reload the page occasionally.

3. Instantiate Contract

To instantiate a contract, you can click the code hash into the contract list page. then you will see: 
<img width="1435" alt="image" src="https://github.com/sideprotocol/testnet/assets/2882920/7e074aa7-7f2d-410e-b0b6-b5e4380f40d4">

You can click `Instantiate Contract`
<img width="1433" alt="image" src="https://github.com/sideprotocol/testnet/assets/2882920/2d8e8482-cb51-4f12-b262-78c81a56d061">

if you see result like this, it means you have instantated the code to a contract.

<img width="1430" alt="image" src="https://github.com/sideprotocol/testnet/assets/2882920/21348c85-29d1-4fb7-bccc-6c5c155c43dc">

4. Query Contract State

You can now query all kind of states of the contract:
<img width="1433" alt="image" src="https://github.com/sideprotocol/testnet/assets/2882920/eb84c592-e188-4dd5-92ae-523fdbec5584">

