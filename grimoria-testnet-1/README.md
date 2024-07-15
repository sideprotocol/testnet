# grimoria-testnet-1

## Cloning SIDE Repository and Setup
1. Clone the SIDE repository:
   > NOTE: Please remove previous git working directory (side) on your local and re-clone the repository. 

   ```sh
   git clone https://github.com/sideprotocol/side.git
   ```

3. Checkout to the desired version:
   ```sh
   git checkout v0.9.0
   ```

4. Move to the SIDE directory:
   ```sh
   cd side
   ```

5. Install SIDE:
   ```sh
   make install
   ```

# Launch
Here's your tutorial with the commands formatted for clarity:

1. Download the genesis file:
```sh
wget https://github.com/sideprotocol/testnet/raw/main/grimoria-testnet-1/genesis.json -O ~/.side/config/genesis.json
```

2. Verify the SHA256 hash of the downloaded genesis file:
```sh
shasum -a 256 ~/.side/config/genesis.json
```
Expected output:
```
0d3a447b869cf985d8abd632026558a6d49a5a43066fe57e457b7e3bebc087f6  genesis.json
```

3. Set up persistence_peer:
```sh
6bef0693d7a31fed473b95123ad19b544b414093@202.182.119.24:26656,44f8009ed91fddd7ee51117482ede20fb4f33e78@149.28.156.79:26656
```

*Community Peers*
```sh
# please add your peer here.
```


4. Start your node:
```sh
sided version
```
```sh
commit: f8f3845abd73d6307223f3a6fd5b340990595fce
cosmos_sdk_version: v0.47.5
go: go version go1.22.5 linux/amd64
name: sidechain
server_name: sided
version: 0.9.0
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

