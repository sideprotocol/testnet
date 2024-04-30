# S2-testnet-1


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
commit: 888e3d1bb860b9cb1d4d2e6cb16774fbfc5a0893
cosmos_sdk_version: v0.47.9
go: go version go1.22.1 linux/amd64
name: sidechain
server_name: sided
version: 0.8.0
```
```sh
sided start
```
