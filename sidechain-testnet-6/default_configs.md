*** Introduction ***  
This document provides the default configurations for each program.

# SideChain
## 1. app.toml
```sh
vi .side/config/app.toml
```

```sh
...
minimum-gas-prices = "0.0006uside,0.000001sat"
# Do not set too high gas prices to avoid transaction submission failures.
...
[oracle]
# If this node will act as a validator, set to true. For non-validator (full) nodes, set to false.
enable = true
bitcoin_rpc = "192.248.150.102:18332"
bitcoin_rpc_user = "side"
bitcoin_rpc_password = "12345678"
http_post_mode = true
disable_tls = true
# Please replace it with your own bitcoin testnet information
...
# Keep other parameters as default.
```

## 2. config.toml
```sh
vi .side/config/config.toml
```

```sh
...
persistent_peers = "3c39089acb833e0cf0ddab9333aedbf4aa77836f@80.240.21.182:26656"
# You can get more peer nodes from the community.
...
# Keep other parameters as default.
```

# TSSigner 
```sh
vi .shuttler/config.toml
```

```sh
port = 5158
enable_rpc = true
rpc_address = "127.0.0.1:6780"
bootstrap_nodes = ["/ip4/80.240.21.182/tcp/5158/p2p/12D3KooWJoyN8YPdMmE7HXZQG8uN3X3MkidDsDgxQaoYfUXN9iRA","/ip4/45.77.249.30/tcp/5158/p2p/12D3KooWHz2XLXiGEsf7uE8mDXaPQG32Kmgn8xvKqRzMi4pQiZoy","/ip4/188.40.66.173/tcp/5158/p2p/12D3KooWPPuPBjCVTTLdvh96NomEXDvmFCKwvC6pScWK3VPqxh9C"]
log_level = "debug"
mnemonic = "<MNEMONIC>"
priv_validator_key_path = "priv_validator_key.json"
relay_runes = false
last_scanned_height_side = 0
last_scanned_height_bitcoin = 0
loop_interval = 60
batch_relayer_count = 10
max_attempts = 5

[bitcoin]
network = "testnet"
rpc = "http://192.248.150.102:18332"
user = "side"
password = "12345678"
# Please replace it with your own bitcoin testnet information

[side_chain]
grpc = "http://localhost:9090"
rpc = "http://localhost:26657"
gas = 1000000
# Please replace it with your own side chain information

[side_chain.fee]
amount = 1000
denom = "uside"

[ordinals]
endpoint = ""

[fee_provider]
submit_fee_rate = false
fetch_fee_rate_url = "https://mempool.space/testnet/api/v1/fees/recommended"
```

# Bitcoin Testnet
```sh
vi .bitcoin/bitcoin.conf
```

```sh
testnet=1
txindex=1

[test]
rpcbind=0.0.0.0:18332
rpcallowip=0.0.0.0/0
rpcuser=side
rpcpassword=12345678
```
