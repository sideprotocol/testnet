# S2-testnet-1

## Cloning SIDE Repository and Setup
1. Clone the SIDE repository:
   ```sh
   git clone https://github.com/sideprotocol/side.git
   ```

2. Move to the SIDE directory:
   ```sh
   cd side
   ```

3. Checkout to the desired version (e.g., v0.8.0):
   ```sh
   git checkout v0.8.0
   ```

4. Install SIDE:
   ```sh
   make install
   ```

# Launch
Here's your tutorial with the commands formatted for clarity:

1. Download the genesis file:
```sh
wget https://github.com/sideprotocol/testnet/raw/main/S2-testnet-1/genesis.json -O ~/.side/config/genesis.json
```

2. Verify the SHA256 hash of the downloaded genesis file:
```sh
shasum -a 256 ~/.side/config/genesis.json
```
Expected output:
```
58d3a28932760a09a15688e7dba660a77f7262e77a8d1a42d54ca7a70006357c  genesis.json
```

3. Set up seeds:
```sh
582dedd866dd77f25ac0575118cf32df1ee50f98@202.182.119.24:26656
```

4. Start your node:
```sh
sided version
commit: a6094f66251b704c59d07c769286d5091b8e75ec
cosmos_sdk_version: v0.47.9
go: go version go1.22.1 linux/amd64
name: sidechain
server_name: sided
version: 0.8.0
```
```sh
sided start
```

# Validating

1. Add a **Bitcoin Segwit Address**
```sh
 sided keys add test --key-type="segwit"

- address: bc1q0xm60dd99hucpkux7rq6vr57g7k479nlw0xapt
  name: test
  pubkey: '{"@type":"/cosmos.crypto.segwit.PubKey","key":"A6gxg+M4sEu0MBFiYlj4r2fEaz/ueeaNE7ymf8Zx+Tqq"}'
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
--chain-id="S2-testnet-1" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="10000000" \
```

