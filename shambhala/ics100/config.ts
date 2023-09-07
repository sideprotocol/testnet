/**
 * 
 * dev : dev development environment
 * 
 * dev|testnet|main : {
 *  
 *    contract: Contract address;
 *    counterparties:[
 *      {
 *        channelId: counterparty channelId
 *      }
 *    ]
 * 
 * }
 */

const config = {
  sideChain: {
    dev: {
      contract:
        'side1kdyjwx6mvnzdv4wvwqpe40wvn7c4w0rtljdvydp7vqee99ss9ves3sry9c',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-30',
        },
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-33',
        },
        {
          chainID: 'constantine-3',
          sourceChannel: 'channel-31',
        },
      ],
    },
    testnet: {
      contract:
        'side1sthrn5ep8ls5vzz8f9gp89khhmedahhdqd244dh9uqzk3hx2pzrsxqeav7',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-14',
        },
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-17',
        },
        {
          chainID: 'constantine-3',
          sourceChannel: 'channel-15',
        },
      ],
    },
    main: {},
  },
  osmoChain: {
    dev: {
      contract:
        'osmo14n40ectsquctcjjqsqqke2anwvdezaf7d80xxpnp8xp4r379ppaqjgtjrg',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-1564',
        },
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-1562',
        },
      ],
    },
    testnet: {
      contract:
        'osmo1rput8wzuw06su6cjgju4e9tmp63nq2h5cgfq6pa45qx34skgupestx3t28',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-1566',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-1560',
        },
      ],
    },
    main: {},
  },
  injective: {
    dev: {
      contract: 'inj1tn6axce6dn5cl4uwahg04mc0wvgcu3k5gdwqr0',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-108',
        },
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-107',
        },
      ],
    },
    testnet: {
      contract: 'inj152zh4zk4kdw8uxev968yppmtldg9gclgn9262n',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-111',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-112',
        },
      ],
    },
    main: {},
  },
  archway: {
    dev: {
      contract: 'archway10nduzug4vd8e3sf3v2frevpn5mytd545rx0wnxjfj20whlrnj2uqzesq87',
      counterparties: [
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-44',
        },
      ],
    },
    testnet: {
      contract: 'archway149l2cyyl4klpshy7p9tyzxk5868vpdagx7f9eu5qmp60lmrn26aqy94qnl',
      counterparties: [
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-42',
        },
      ],
    },
    main: {},
  },
};