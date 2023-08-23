# How to run a validator of SIDE blockchain

## Synced Node

Before creating a validator, ensure you have first followed the instructions running fullnode


## Initialize Wallet Keyring

```sh
sided keys add test
Enter keyring passphrase (attempt 1/3):

- address: side1raru385lzypr5jw2al4dl9ls5900t02f99z7dw
  name: test
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ak43PcCCEr8J0ljTUN+xs0nJiLlwrqHVsii8uRNzX7M5"}'
  type: local


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

enroll index bind glad tonight rhythm barely negative south quarter main length venue funny dance short loud foil electric thumb anger similar like nice
```

### Query your local keys:
```sh
sided keys list
```

### Query your validator public key:
```sh
sided tendermint show-validator
```

## Get some SIDE from faucet

 - use faucet at https://faucet.side.one

## Create Validator

```sh
sided tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount_uosmo] \
--pubkey=$(sided tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]" \
--gas="auto" \
--gas-prices="[gas_price]" \
```

here's an sample:

```sh
sided tx staking create-validator \
--from=ping \
--amount=400000000uside \
--pubkey="{"@type":"/cosmos.crypto.ed25519.PubKey","key":"FpGF3a/GimqEDxg4rQsX8CntMJxI2hwoDNLj4x2zZWQ="}"  \
--moniker="side_node" \
--security-contact="contact@side.one" \
--chain-id="side-testnet-1" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="400000000" \
```

If you need further explanation for each of these command flags:

 - the from flag is the KEY_NAME you created when initializing the key on your keyring
 - the amount flag is the amount you will place in your own validator in uosmo (in the example, 500000000uosmo is 500osmo)
 - the pubkey is the validator public key found earlier
 - the moniker is a human readable name you choose for your validator
 - the security-contact is an email your delegates are able to contact you at
 - the chain-id is whatever chain-id you are working with (in the osmosis mainnet case it is osmosis-1)
 - the commission-rate is the rate you will charge your delegates (in the example above, 10 percent)
 - the commission-max-rate is the most you are allowed to charge your delegates (in the example above, 20 percent)
 - the commission-max-change-rate is how much you can increase your commission rate in a 24 hour period (in the example above, 5 percent per day until reaching the max rate)
 - the min-self-delegation is the lowest amount of personal funds the validator is required to have in their own validator to stay bonded (in the example above, 500osmo)
 - the gas-prices is the amount of gas used to send this create-validator transaction