# SIDE Testnet 3

Welcome to Side-Testnet-3, a testing environment specifically designed to evaluate the functionality of Bitcoin's Native SegWit addresses on SIDE blockchain. Our primary goal is to thoroughly test the signing and verification processes of transactions using popular Bitcoin wallets such as OKX and Unisats.

In this testnet environment, developers and users can experiment with Native SegWit Bitcoin addresses (starts with "bc1q"), including signing transactions, verifying transactions and interacting with the SIDE blockchain seamlessly using Bitcoin wallets.

We encourage developers, testers and blockchain enthusiasts to join us in exploring the capabilities of Native SegWit Bitcoin addresses on SIDE and providing valuable feedback to enhance the interoperability and functionality of our blockchain ecosystem.

SIDE-Testnet-3 is set to be launched in a decentralized manner, with gentx submissions accepted from now until next Tuesday (UTC 14:00, March 26). The genesis block is planned to start at 15:00 UTC. Join us in this exciting launch and contribute to the success of SIDE-Testnet-3!


# Launch

Here's your tutorial with the commands formatted for clarity:

1. Download the genesis file:
```sh
wget https://github.com/sideprotocol/testnet/raw/main/side-testnet-3/genesis.json -O ~/.side/config/genesis.json
```

2. Verify the SHA256 hash of the downloaded genesis file:
```sh
shasum -a 256 ~/.side/config/genesis.json
```
Expected output:
```
395abd3d2c02cf41a45434df9ee1ba8c27ae5c03108d2993ee8c7c17898c3c30  genesis.json
```

3. Set up seeds:
```sh
00170c0c23c3e97c740680a7f881511faf68289a@202.182.119.24:26656
```

4. Start your node:
```sh
sided version
commit: 888e3d1bb860b9cb1d4d2e6cb16774fbfc5a0893
cosmos_sdk_version: v0.47.9
go: go version go1.22.1 linux/amd64
name: sidechain
server_name: sided
version: 0.7.0
```
```sh
sided start
```

Now you have to wait; the blockchain will start at the genesis time (UTC 15:00, March 26).


# Gentx Submission

Certainly! Here's a tutorial with the commands:

### Cloning SIDE Repository and Setup
1. Clone the SIDE repository:
   ```sh
   git clone https://github.com/sideprotocol/side.git
   ```

2. Checkout to the desired version (e.g., v0.7.0-rc2):
   ```sh
   git checkout v0.7.0-rc2
   ```

3. Move to the SIDE directory:
   ```sh
   cd side
   ```

4. Install SIDE:
   ```sh
   make install
   ```

### Initializing SIDE Node
1. Add your account:
   ```sh
   ~/go/bin/sided keys add YourName
   ```

2. Initialize your node with a chain ID (e.g., side-testnet-3) and your chosen name:
   ```sh
   ~/go/bin/sided init YourName --chain-id side-testnet-3
   ```
3. Download Pregenesis.json
   ```sh
   curl -s https://raw.githubusercontent.com/sideprotocol/testnet/main/side-testnet-3/pregenesis.json > ~/.side/config/genesis.json
   ```

4. Add your account to the genesis file with an initial balance (e.g., 100000000uside):
   ```sh
   ~/go/bin/sided add-genesis-account YourName 100000000uside
   ```

### Generating Genesis Transaction
1. Generate the genesis transaction with your identity:
   ```sh
   ~/go/bin/sided gentx YourName 100000000uside --chain-id side-testnet-3 --identity "xxxxx"
   ```

### Submitting Genesis Transaction
1. Locate your generated genesis transaction file:
   ```sh
   ls .side/config/gentx
   ```

   Example Output:
   ```
   .side/config/gentx/gentx-114459c8eb9267fcdb02c44f3885e353ec80f297.json
   ```

2. Fork the SIDE repository on GitHub.

3. Upload your generated genesis transaction file to the `gentxs` directory in your forked repository (e.g., side-testnet-3/gentxs).

4. Create a pull request to the sideprotocol/testnet repository.

By following these steps, you'll be able to contribute your genesis transaction to SIDE-Testnet-3 successfully.
