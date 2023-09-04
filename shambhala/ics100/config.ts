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
      testnet: {},
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
      main: {},
    },
  };