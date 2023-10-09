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
        'side1wtza4twglvyyj9hj2dpax6cruscypaumjwj5gwcpfu58fzyjmsmqzq6dqt',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-52',
        },
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-17',
        },
        {
          chainID: 'constantine-3',
          sourceChannel: 'channel-53',
        },
        {
          chainID: 'pion-1',
          sourceChannel: 'channel-54',
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
        'osmo1d0mzrp3cdyplpl4xd5ek86qdm4ggx9hg5jsvtdvuc8t3qja4hpmq5mmy2m',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-1566',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-1841',
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
      contract: 'archway1fvyedz4x5swecjf00z6schhyexzjc9haax7yl7r2j607hgqsc29q9twlng',
      counterparties: [
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-57',
        },
      ],
    },
    main: {},
  },
  neutron: {
    testnet: {
      contract: 'neutron1psua4fyjfxkz2xd5n4e98pvxwmw8ak0g9d8cs75c3d28wfgmarwqcr6flr',
      counterparties: [
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-190',
        },
      ],
    },
    main: {},
  },
};