export function getBaseUrlForNetwork(networkId: string): string | null {
  // eslint-disable-next-line radix
  const net = parseInt(networkId);
  let baseUrl;

  switch (net) {
    case 1: // main net
      baseUrl = "etherscan.io";
      break;
    case 3: // ropsten test net
      baseUrl = "ropsten.etherscan.io";
      break;
    case 4: // rinkeby test net
      baseUrl = "rinkeby.etherscan.io";
      break;
    case 5: // goerli test net
      baseUrl = "goerli.etherscan.io";
      break;
    case 10: // optimism main net
      baseUrl = "optimistic.etherscan.io";
      break;
    case 42: // kovan test net
      baseUrl = "kovan.etherscan.io";
      break;
    case 56: // bsc main net
      baseUrl = "bscscan.com";
      break;
    case 97: // bsc test net
      baseUrl = "testnet.bscscan.com";
      break;
    case 137: // polygon main net
      baseUrl = "polygonscan.com";
      break;
    case 250: // fantom main net
      baseUrl = "ftmscan.com";
      break;
    case 42161: // arbitrum main net
      baseUrl = "arbiscan.io";
      break;
    case 43114: // avalanche main net
      baseUrl = "snowtrace.io";
      break;
    case 80001: // polygon test net mumbai
      baseUrl = "mumbai.polygonscan.com";
      break;
    default:
      baseUrl = null;
  }
  return baseUrl;
}
