
# Tasks for side-testnet-3

## Address Introduction

Currently, there are two types of addresses: Cosmos Address and Bitcoin Address. Both start with the prefix bc1. We are planning to use `side` for Cosmos Address in the future. We plan to support two types of Bitcoin addresses: Native SegWit and Taproot. Native SegWit (starting with `bc1q`) is supported since `v0.7.0`, and Taproot (`bc1p`) will be supported in `v0.7.1`.

## How to Create Bitcoin Address

### Create SegWit Address
```sh
sided keys add segwit --key-type=segwit
```
```yaml
- address: bc1qcr8te4kr609gcawutmrza0j4xv80jy8z306fyu
  name: segwit
  pubkey: '{"@type":"/cosmos.crypto.segwit.PubKey","key":"AzDVT9DdQgpuX402JPXzSCyuNQ951fB1O/W+75wtka88"}'
  type: local
```

### Create Taproot Address
```sh
sided keys add segwit --key-type=taproot
```
```yaml
- address: bc1p5cyxnuxmeuwuvkwfem96lqzszd02n6xdcjrs20cac6yqjjwudpxqkedrcr
  name: taproot
  pubkey: '{"@type":"/cosmos.crypto.taproot.PubKey","key":"A8yKS8ZNiXvdxfvC9nD3qLoLOGd5EGzxIjxvxdfNb8EV"}'
  type: local
```

You can now use your address to sign transactions on the SIDE blockchain. One thing you should know is that the taproot address is not IBC incompatible, meaning you can **NOT** use it to send/receive IBC tokens.

## Tasks

Testers and developers are encouraged to use Bitcoin to sign transactions.

### #1: Signing Transactions with Segwit Address

1. Send
2. Delegate
3. Withdraw
4. Vote
5. IBC transfer

### #2: Onchain Upgrade

We are planning to upgrade the chain to support taproot next week.

### #3: Signing Transactions with Taproot Address

1. Send
2. Delegate
3. Withdraw
4. Vote
