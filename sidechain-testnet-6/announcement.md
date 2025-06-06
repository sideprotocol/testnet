Announcement: Transition to sidechain-testnet-6

Our previous testnet, sidechain-testnet-5, has been discontinued. The primary reason for this was connectivity issues between certain nodes and major exchanges, which prevented real-time price data retrieval. As a result, block signing could not be completed, leading to insufficient signature weight and ultimately halting block production.

To address this, we are launching a new testnet: sidechain-testnet-6. Please refer to the official documentation(https://github.com/sideprotocol/testnet/blob/main/sidechain-testnet-6) for setup instructions.

Key Notes for the New Testnet:

Exchange Connectivity Check: Before starting your node, ensure your server can establish connections with major exchanges. A connectivity test method is provided in the documentation.

TSS Key Reuse: If you previously submitted a TSS public key, we recommend reusing the same key file when restarting TSS to simplify the process. Detailed guidance has been added to the docs.

We appreciate your cooperation and look forward to a smoother testing experience.