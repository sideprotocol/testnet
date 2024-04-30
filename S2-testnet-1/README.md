# S2-testnet-1

## Cloning SIDE Repository and Setup
1. Clone the SIDE repository:
   ```sh
   git clone https://github.com/sideprotocol/side.git
   ```

2. Checkout to the desired version (e.g., v0.8.0):
   ```sh
   git checkout v0.8.0
   ```

3. Move to the SIDE directory:
   ```sh
   cd side
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
b6ff2dd83a552632e22803941c7d86085b1368d8a37c5414ccf8f39bcd6038c4  genesis.json
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

1. add a **Bitcoin Segwit Address**
```sh
 sided keys add test --key-type segwit

- address: bc1q0xm60dd99hucpkux7rq6vr57g7k479nlw0xapt
  name: test
  pubkey: '{"@type":"/cosmos.crypto.segwit.PubKey","key":"A6gxg+M4sEu0MBFiYlj4r2fEaz/ueeaNE7ymf8Zx+Tqq"}'
  type: local
```

**Note:**
Please ensure that you use a Segwit address; otherwise, you will not be able to claim your rewards.



