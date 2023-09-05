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
        'side1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qzv89wl',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-21',
        },
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-18',
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
        'osmo1ahyxkyz6m7nk774g3x5amfrcznn06fw5zywedxtqg2hw8cgf9gks2rhgnl',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-1524',
        },
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-1523',
        },
      ],
    },
    testnet: {
      contract:
        'osmo18z2ge4vfvnh3wj2yz9f92q9azdrhjf84vct6yzesgcdkp6j2579qxsplh8',
      counterparties: [
        {
          chainID: 'injective-888',
          sourceChannel: 'channel-?',
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
      contract: 'inj13gttmee75m22058kcnsua3yq8uhk9lwkmyurer',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-100',
        },
        {
          chainID: 'side-devnet-1',
          sourceChannel: 'channel-99',
        },
      ],
    },
    testnet: {
      contract: 'inj1qyvln72dzdadk8jrx45upwjeax55gdaxudxmsc',
      counterparties: [
        {
          chainID: 'osmo-test-5',
          sourceChannel: 'channel-?',
        },
        {
          chainID: 'side-testnet-1',
          sourceChannel: 'channel-102',
        },
      ],
    },
    main: {},
  },
};