# Setup a relayer

> We recommend selecting Hermes instead of rly, as rly appears to face difficulties when utilizing keys generated from coin type 60.

## Pre-requisites
Hermes is developed with the Rust programming language. In order to build and run the relayer you need to install and configure Rust on your machine.

### Rust installation
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

```shell
source ~/.cargo/env
```

### Version requirements
Hermes is developed and tested using the latest version of Rust, `1.70` at the moment. To check that your tool chain is up-to-date run:

```shell
rustc --version
```
In case you already had installed the Rust tool chain in the past, you can update your installation by running rustup update.

### Testing the installation
After you install the Rust tool chain you can execute the following command:
```shell
cargo version
```
This should display the cargo version and confirm the proper installation.

## Install Hermes
Hermes is packaged in the `ibc-relayer-cli` Rust crate. To install the latest release of Hermes, run the following command in a terminal:
```shell
cargo install ibc-relayer-cli@1.5.1 --bin hermes --locked
```
You should now be able to run Hermes by invoking the hermes executable.
```shell
hermes version
```

## Initialise Config
```shell
mkdir .hermes
vim .hermes/config.toml
```

## Add a new relay path
In order to connect two IBC-enabled chains, both chains need an on-chain client that keeps track of the other chain. These two clients can be connected by one or multiple connections. Then, channels need to be created, over a connection, to specify the destination module.

- Use existing connection
    ```sh
    hermes create channel --a-port <PORT-ID> --b-port <PORT-ID> --a-chain <CHAIN-A-ID> --a-connection <CONNECTION-A-ID>
    ```
- Create new client connection
    - Atomic swap: ICS100
        ```sh
        hermes create channel --a-chain side-testnet-1 --b-chain osmo-test-5 --a-port "wasm.side1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfstzz0ej"  --b-port "wasm.osmo18z2ge4vfvnh3wj2yz9f92q9azdrhjf84vct6yzesgcdkp6j2579qxsplh8" --new-client-connection --chan-version "ics100-1"
        ```

    - Interchain swap: ICS101
        ```sh
        hermes create channel --a-port "wasm.side1ghd753shjuwexxywmgs4xz7x2q732vcnkm6h2pyv9s6ah3hylvrqs4af7r" --b-port "wasm.osmo1ekyf3lqyrjep0syhwxgkgqfzqrjthtt83g7lvkmqurlkjxjj45hq8dcag3" --a-chain side-testnet-1 --a-connection <CONNECTION-A-ID> --chan-version "ics101-1"
        ```
        Note: `CONNECTION-A-ID` can be used from previous command logs.

    - Transfer
        ```sh
       hermes create channel --a-port transfer --b-port transfer --a-chain side-testnet-1 --a-connection <CONNECTION-A-ID>
        ```
        Note: `CONNECTION-A-ID` can be used from previous command logs.

> **WARNING**: In production, do not create clients, connections or channels between two chains before checking that a client/connection/channel does not already fulfill the same function.


### Identifiers
A chain allocates identifiers when it creates clients, connections and channels. These identifiers can subsequently be used to refer to existing clients, connections, and channels.

> **NOTE**: If you want to ensure you get the same identifiers while following the tutorials, run each of the commands in this page only once or reset the chains as instructed in section Start local chains.

Chains allocate identifiers using a chain-specific allocation scheme. Currently, the cosmos-sdk implementation uses the following identifiers:

 - `07-tendermint-<n>` for tendermint clients.
 - `connection-<n>` for connections.
 - `channel-<n>` for channels.

It is possible for two chains to use the same identifier to designate two different objects. For example, two different channels, one on the Hub and one on Osmosis, can both be designated with the `channel-0` identifier.

## Initialize
```sh 
vim ~/.hermes/config.toml
```
In this sample, we are setup a relayer which establish a connection between `side-testnet-1` and `osmo-test-5`.
```toml
[global]
log_level = 'info'

[mode]

[mode.clients]
enabled = true
refresh = true
misbehaviour = true

[mode.connections]
enabled = true

[mode.channels]
enabled = true

[mode.packets]
enabled = true
clear_interval = 100
clear_on_start = true
tx_confirmation = true

[telemetry]
enabled = true
host = '127.0.0.1'
port = 3001

[[chains]]
id = 'side-testnet-1'
rpc_addr = 'https://testnet-rpc.side.one'
grpc_addr = 'https://testnet-grpc.side.one'
event_source = { mode = 'push', url = 'wss://testnet-rpc.side.one/websocket', batch_delay = '500ms' }
rpc_timeout = '15s'
account_prefix = 'side'
key_name = 'wallet'
store_prefix = 'ibc'
gas_price = { price = 0.01, denom = 'stake' }
max_gas = 10000000
clock_drift = '5s'
trusting_period = '14days'
trust_threshold = { numerator = '1', denominator = '3' }

[[chains]]
id = 'osmo-test-5'
rpc_addr = 'https://rpc.osmotest5.osmosis.zone'
grpc_addr = 'https://grpc.osmotest5.osmosis.zone'
event_source = { mode = 'push', url = 'wss://rpc.osmotest5.osmosis.zone/websocket', batch_delay = '500ms' }
rpc_timeout = '15s'
account_prefix = 'osmo'
key_name = 'wallet'
store_prefix = 'ibc'
gas_price = { price = 0.01, denom = 'stake' }
max_gas = 10000000
clock_drift = '5s'
trusting_period = '14days'
trust_threshold = { numerator = '1', denominator = '3' }


```

## Create a connection
