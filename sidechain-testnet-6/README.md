# sidechain-testnet-6

## 1. Install SIDE
### 1.1 Clone the SIDE repository
```sh
git clone https://github.com/sideprotocol/side.git
```

### 1.2 Move to the SIDE directory:
```sh
cd side
```

### 1.3 Checkout to the desired version:
```sh
git checkout v2.0.0-rc.4
```

### 1.4 Install SIDE:
```sh
make install
```

### 1.5 Copy to the system's standard path
```sh
sudo cp ~/go/bin/sided /usr/local/bin/
```

### 1.6 Check your SIDE version
```sh
sided version --long
```
Expected Output:
```sh
commit: fb5aeaf33f138d59ba75c19ec79b80b010f3015a
cosmos_sdk_version: v0.50.12
go: go version go1.23.0 linux/amd64
name: sidechain
server_name: sided
version: 2.0.0-rc.4
```

### 1.7 Download the genesis file
```sh
wget https://github.com/sideprotocol/testnet/raw/main/sidechain-testnet-6/genesis.json -O ~/.side/config/genesis.json
shasum -a 256 ~/.side/config/genesis.json
```
Expected output:
```
524548f553449f7cd5c61907d9fe363552de084a394638c7c5b47cceead5b708  .side/config/genesis.json
```

### 1.8 Reset local data (For users upgrading from sidechain-testnet-5)
```sh
sided comet unsafe-reset-all
```

### 1.9 Set up Bitcoin RPC params
```sh
vi ~/.side/config/app.toml
```
Modify the oracle config at the end of the file as follows:

> Strongly recommended, you can run your own bitcoin testnet node and configure it to the corresponding rpc address.
> Bitcoin testnet full node installation instructions: [bitcoin_testnet.md](https://github.com/sideprotocol/testnet/blob/main/sidechain-testnet-6/bitcoin_testnet.md)

```sh
[oracle]
enable = true
bitcoin_rpc = "192.248.150.102:18332"
bitcoin_rpc_user = "side"
bitcoin_rpc_password = "12345678"
http_post_mode = true
disable_tls = true
```
Oracle is necessary only for validator nodes. For fullnodes, it can be disabled by setting `enable = false`.  

### 1.10 Set up persistent peers:
```sh
vi ~/.side/config/config.toml
```
Add the following public node:
```sh
3c39089acb833e0cf0ddab9333aedbf4aa77836f@80.240.21.182:26656
6ec1e87dea8789bf0ac61fc29ab4e1734a08ac47@45.77.249.30:26656
```

### 1.11 Ensure your server's connectivity with exchanges and bitcoin node
（1）Check the connectivity with bitcoin node
```sh
curl --user side:12345678 -H "content-type:text/plain;" \
  --data-binary '{"jsonrpc":"1.0","method":"getblockchaininfo","id":1}' \
  http://192.248.150.102:18332/
```
Expected output like:
```sh
{"result":{"chain":"test","blocks":4503792,"headers":4503792,"bestblockhash":"000000000085742ffa0c14d1db2f58f11d8615bb0edc888e45c0fe42185afd3f","difficulty":1,"time":1749171495,"mediantime":1749165772,"verificationprogress":0.9999959783651268,"initialblockdownload":false,"chainwork":"0000000000000000000000000000000000000000000016a6a5945805353412da","size_on_disk":194506803542,"pruned":false,"warnings":["Unknown new rules activated (versionbit 1)","This is a pre-release test build - use at your own risk - do not use for mining or merchant applications"]},"error":null,"id":1}
```
Please replace the above request parameters with your actual bitcoin node data.

(2) Check the connectivity with exchanges  
Please refer to the document: [check_exchanges.md](https://github.com/sideprotocol/testnet/blob/main/sidechain-testnet-6/check_exchanges.md)

### 1.12 Start your node
```sh
sided start
```

## 2. Testnet Faucet
```sh
https://testnet.ping.pub/side/faucet
```
You can get a small amount of side from this address to create a validator or fund tss address.

## 3. Create Validator

### 3.1 Add a **Bitcoin Segwit Address**
```sh
sided keys add test --key-type="segwit"

- address: tb1qck52yc5vjmth2fjvm4a4jke2ytrgkht4fza5yx
  name: test
  pubkey: '{"@type":"/cosmos.crypto.segwit.PubKey","key":"A9slrakoWNPJz6RYLwbLggGKvRlQUXyAHFk4gNegy7jI"}'
  type: local
```
**Notes**
Please ensure that you use a Segwit address; otherwise, you will not be able to claim your rewards.

### 3.2 Create Validator
```sh
sided tx staking create-validator create_validator.json --from test --chain-id sidechain-testnet-6 --fees 1000uside --gas auto
```
The content of the file create_validator.json is as follows:
```sh
{
   "pubkey": {"@type":"/cosmos.crypto.ed25519.PubKey","key":"<your node pubkey>"},
   "amount": "1000000uside",
   "moniker": "<your moniker>",
   "identity": "<your identity>",
   "website": "<your website>",
   "security": "<your security>",
   "details": "<your details>",
   "commission-rate": "0.1",
   "commission-max-rate": "0.2",
   "commission-max-change-rate": "0.01",
   "min-self-delegation": "1"
}
```
Replace the above parameters with your real data.
