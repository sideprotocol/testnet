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

## Add a new relay path
In order to connect two IBC-enabled chains, both chains need an on-chain client that keeps track of the other chain. These two clients can be connected by one or multiple connections. Then, channels need to be created, over a connection, to specify the destination module.

- Use existing connection
    ```sh
    hermes create channel --a-port <PORT-ID> --b-port <PORT-ID> --a-chain <CHAIN-A-ID> --a-connection <CONNECTION-A-ID>
    ```
- Create new client connection
    ```sh
    hermes create channel --a-chain side-testnet-1 --b-chain injective-888 --a-port <a-port>  --b-port <b-port> --new-client-connection --chan-version "ics101-1"
    ```

> **WARNING**: In production, do not create clients, connections or channels between two chains before checking that a client/connection/channel does not already fulfill the same function.


### Identifiers
A chain allocates identifiers when it creates clients, connections and channels. These identifiers can subsequently be used to refer to existing clients, connections, and channels.

> **NOTE**: If you want to ensure you get the same identifiers while following the tutorials, run each of the commands in this page only once or reset the chains as instructed in section Start local chains.

Chains allocate identifiers using a chain-specific allocation scheme. Currently, the cosmos-sdk implementation uses the following identifiers:

 - `07-tendermint-<n>` for tendermint clients.
 - `connection-<n>` for connections.
 - `channel-<n>` for channels.

It is possible for two chains to use the same identifier to designate two different objects. For example, two different channels, one on the Hub and one on Osmosis, can both be designated with the `channel-0` identifier.
