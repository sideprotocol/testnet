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
      },
      testnet: {
        contract:
        'side1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucs7ygup0',
        counterparties: [
            {
                chainID: 'osmo-test-5',
                sourceChannel: 'channel-1',
            },
            {
                chainID: 'injective-888',
                sourceChannel: 'channel-101',
            },
            {
                chainID: 'constantine-3',
                sourceChannel: 'channel-3',
            },
        ],
      },
      main: {},
    },
    osmoChain: {
      testnet: {
        contract:
          'osmo1ekyf3lqyrjep0syhwxgkgqfzqrjthtt83g7lvkmqurlkjxjj45hq8dcag3',
        counterparties: [
          {
            chainID: 'injective-888',
            sourceChannel: 'channel-1547',
          },
          {
            chainID: 'side-testnet-1',
            sourceChannel: 'channel-1491',
          },
        ],
      },
      main: {},
    },
    injective: {
      testnet: {
        contract: 'inj1qpd2gj05900za4auvz3p26ujfza2h67x5tfkn8',
        counterparties: [
          {
            chainID: 'osmo-test-5',
            sourceChannel: 'channel-103',
          },
          {
            chainID: 'side-testnet-1',
            sourceChannel: 'channel-101',
          },
        ],
      },
      main: {},
    },
    archway: {
        testnet: {
          contract: 'archway1dquhcfju4rpt8whvlvx956mdzcsnyfjzaxn3rq26vtmj747xt0rquvrc2p',
          counterparties: [
            {
              chainID: 'side-testnet-1',
              sourceChannel: 'channel-31',
            },
          ],
        },
        main: {},
      },
  };