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
                sourceChannel: 'channel-12',
            },
            {
                chainID: 'injective-888',
                sourceChannel: 'channel-16',
            },
            {
                chainID: 'constantine-3',
                sourceChannel: 'channel-13',
            },
        ],
      },
      main: {},
    },
    osmoChain: {
      testnet: {
        contract:
          'osmo1nz3zm5sq4az3687fk359p8thnx85kk6hcn6e7d6vn4gnyl4s0n4qrweev8',
        counterparties: [
          {
            chainID: 'injective-888',
            sourceChannel: 'channel-1565',
          },
          {
            chainID: 'side-testnet-1',
            sourceChannel: 'channel-1559',
          },
        ],
      },
      main: {},
    },
    injective: {
      testnet: {
        contract: 'inj1rc3mv4ttv6pk98jl27x5xehqxhtgwly7ez3ndw',
        counterparties: [
          {
            chainID: 'osmo-test-5',
            sourceChannel: 'channel-110',
          },
          {
            chainID: 'side-testnet-1',
            sourceChannel: 'channel-109',
          },
        ],
      },
      main: {},
    },
    archway: {
        testnet: {
          contract: 'archway19zxu8xa575e5d8f3pspdlyy0aut9vzaz0farr6dk5vh6aeq3jy8qxwhtuk',
          counterparties: [
            {
              chainID: 'side-testnet-1',
              sourceChannel: 'channel-41',
            },
          ],
        },
        main: {},
      },
  };