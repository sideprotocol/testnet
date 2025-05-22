# sidechain-testnet-5

## Cloning SIDE Repository and Setup
1. Clone the SIDE repository:
   > NOTE: Please remove previous git working directory (side) on your local and re-clone the repository. 

   ```sh
   git clone https://github.com/sideprotocol/side.git
   ```

2. Move to the SIDE directory:
   ```sh
   cd side
   ```

3. Checkout to the desired version:
   ```sh
   git checkout v2.0.0-rc.1
   ```

4. Install SIDE:
   ```sh
   make install
   ```

# Launch
Here's your tutorial with the commands formatted for clarity:

1. Download the genesis file:
```sh
wget https://github.com/sideprotocol/testnet/raw/main/sidechain-testnet-5/genesis.json -O ~/.side/config/genesis.json
```

2. Verify the SHA256 hash of the downloaded genesis file:
```sh
shasum -a 256 ~/.side/config/genesis.json
```
Expected output:
```
627e3ab93b3f40d9081dfb5b6cbac3f4c30b6fca4da8b0ed5b277ecf219be3db  genesis.json
```

3. Set up persistent_peer:
```sh
8fe46ca180a5c6989e83de31755e6e21f6de67f3@80.240.21.182:26656
```

*Community Peers*
```sh
# please add your peer here.
```


4. Start your node:
```sh
sided version --long
```
```sh
commit: f966c04b768a0a8f510f9882f376acbcac5040a6
cosmos_sdk_version: v0.50.12
go: go version go1.23.0 linux/amd64
name: sidechain
server_name: sided
version: 2.0.0-rc.1
```
```sh
sided start
```

# Faucet
   ```sh
   https://testnet.ping.pub/side/faucet
   ```
   You can get a small amount of side from this address to create a validator or fund tss address.

# Validating

1. Add a **Bitcoin Segwit Address**
```sh
 sided keys add test --key-type="segwit"

- address: tb1qck52yc5vjmth2fjvm4a4jke2ytrgkht4fza5yx
  name: test
  pubkey: '{"@type":"/cosmos.crypto.segwit.PubKey","key":"A9slrakoWNPJz6RYLwbLggGKvRlQUXyAHFk4gNegy7jI"}'
  type: local
```

**Note:**
Please ensure that you use a Segwit address; otherwise, you will not be able to claim your rewards.

2. Create Validator
```sh
sided tx staking create-validator \
--from="test" \
--amount="10000000uside" \
--pubkey=$(sided tendermint show-validator)  \
--moniker="side_node" \
--security-contact="contact@side.one" \
--chain-id="sidechain-testnet-4" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="10000000" \
```
