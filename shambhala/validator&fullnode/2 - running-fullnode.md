# How to run a fullnode of SIDE blockchain



## Initialize Wallet Keyring

```sh
sided keys add test
Enter keyring passphrase (attempt 1/3):

- address: side1raru385lzypr5jw2al4dl9ls5900t02f99z7dw
  name: test
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ak43PcCCEr8J0ljTUN+xs0nJiLlwrqHVsii8uRNzX7M5"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

enroll index bind glad tonight rhythm barely negative south quarter main length venue funny dance short loud foil electric thumb anger similar like nice
```

### Query your local keys:
```sh
sided keys list
```

## Get some SIDE from faucet

 - use faucet at https://faucet.side.one

## Initialize Sidechain Node

Use `sided` to initialize your node (replace the NODE_NAME with a name of your choosing):

```sh
sided init NODE_NAME --chain-id=side-testnet-1
```

Open the config.toml to edit the seeds and persistent peers:

```sh
cd $HOME/.sidechain/config
nano config.toml
```

Edit seed node or persistence node, you can found the seeds and persistence on endpoint.md

```toml
seeds = ""
```

or 
```toml
# persistent_peers = "2eba9c8e6fb9d56bbdd10d007a598541c37f6493@13.212.61.41:26656"
persistent_peers = ""

```

Download genesis file:

```sh
wget https://github.com/sideprotocol/testnet/raw/main/shambhala/genesis.json -O $HOME/.sidechain/config/genesis.json
```

# Start Node and Sync
```sh
sided tendermint unsafe-reset-all 
sided start
```