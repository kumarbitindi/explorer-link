# Explorer Link Generator

## Installation

`npm install '@block-wallet/explorer-link' -S`
`yarn add '@block-wallet/explorer-link'`

## Usage

```javascript
const explorerLink = require("@block-wallet/explorer-link");
const networkId = "1";
const chainId = "0x1";
const account = "0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825";
const accountLink = explorerLink.createAccountLink(account, networkId);
const accountLinkForChain = explorerLink.createAccountLinkForChain(
  account,
  chainId
);

const hash =
  "0xa7540793de6b6ca7d3c948a8cc0a163bf107f5535a69353162ea9dec7ee7beca";
const txLink = explorerLink.createExplorerLink(hash, networkId);
const txtLinkForChain = explorerLink.createExplorerLinkForChain(hash, chainId);

const token = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const tokenTrackerLink = explorerLink.createTokenTrackerLink(token, networkId);
// You can also track token balances by account
const accountTokenTrackerLink = explorerLink.createTokenTrackerLink(
  token,
  networkId,
  account
);

const accountTokenTrackerLinkForChain =
  explorerLink.createTokenTrackerLinkForChain(token, chainId, account);

// Create urls for interacting with custom networks
const customNetworkUrl = "https://customnetwork.com/";

const customtTokenTrackerLink = explorerLink.createCustomTokenTrackerLink(
  token,
  customNetworkUrl
);

const customAccountLink = explorerLink.createCustomAccountLink(
  account,
  customNetworkUrl
);

const customExplorerLink = explorerLink.createCustomExplorerLink(
  hash,
  customNetworkUrl
);

// Generate custom or native block explorer link based on rcpPrefs
const blockExplorerLink = explorerLink.getBlockExplorerLink(
  transaction,
  rcpPrefs
);

// Generate account link for custom or native network
const getAccountLink = explorerLink.getAccountLink(
  address,
  chainId,
  rpcPrefs,
  networkId
);

// Generate token tracker link for custom or native network
const tokenTrackerLink = explorerLink.getTokenTrackerLink(
  tokenAddress,
  chainId,
  networkId,
  holderAddress,
  rpcPrefs
);
```

## Running tests

```bash
yarn test
```
