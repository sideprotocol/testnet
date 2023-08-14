# Deploying ICS WebAssembly (Wasm) Contracts

This document outlines the process for deploying ICS (Interchain Standards) WebAssembly (Wasm) contracts.

## Requirements

- Rust
- Command-line interface (CLI) or library for deployment on a blockchain. For example, `injectived` or `osmosisd`.

## Setting Up Rust

Rust is the primary programming language used for CosmWasm smart contracts. While Wasm smart contracts can theoretically be written in any programming language, CosmWasm libraries and tooling work best with Rust.

To set up Rust, follow these steps:

1. Install `rustup`.

2. Run the following commands in your terminal:

   ```sh
   # 1. Set 'stable' as the default release channel:
   rustup default stable
   cargo version
   # If the version is lower than 1.50.0+, update Rust
   rustup update stable

   # 2. Add the Wasm compilation target:
   rustup target list --installed
   rustup target add wasm32-unknown-unknown

   # 3. Install required packages to generate the contract:
   cargo install cargo-generate --features vendored-openssl
   cargo install cargo-run-script

## Deployment Steps for Different Chains

### Osmosis

##### Compilation

To compile the contract for Osmosis, execute the following command:

```sh
RUSTFLAGS='-C link-arg=-s' cargo build --release --target wasm32-unknown-unknown
```
#### Optimized Compilation

For further optimization, consider using the rust-optimizer. This tool produces reproducible CosmWasm contract builds with extensive optimization, utilizing binary stripping and wasm-opt. Use the following command:
```
sudo docker run --rm -v "$(pwd)":/code \
    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
    cosmwasm/rust-optimizer:0.12.6
```

#### Setting Up Accounts

For configuring accounts, refer to the documentation: Setup Osmosis Testnet Accounts.

#### Deploying on Osmosis Testnet

To deploy the contract on the Osmosis testnet and store it on-chain, run the following command:
```
# store the code on chain
RES=$(osmosisd tx wasm store artifacts/ics101.wasm --from wallet --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -y --output json -b block)
```

Replace ics101.wasm with your contract's filename and adjust parameters as necessary.

### Injective

### Juno