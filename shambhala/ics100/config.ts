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
        'side1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfstzz0ej',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-?',
        },
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-5',
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
        'osmo18z2ge4vfvnh3wj2yz9f92q9azdrhjf84vct6yzesgcdkp6j2579qxsplh8',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-1548',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-?',
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
      contract: 'inj1qyvln72dzdadk8jrx45upwjeax55gdaxudxmsc',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-104',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-102',
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
    },
    main: {},
  },
};