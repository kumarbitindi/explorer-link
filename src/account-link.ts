import { addPathToUrl } from "./helpers";
import { getBaseUrlForChain } from "./base-url-for-chain";
import { getBaseUrlForNetwork } from "./base-url-for-network";

interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

function getSectionUrlPath(
  section: "" | "tokentxns" | "tokentxnsErc721" | "tokentxnsErc1155" = ""
): string {
  return section !== "" ? `#${section}` : "";
}

export function createAccountLink(
  address: string,
  networkId: string,
  section: "" | "tokentxns" | "tokentxnsErc721" | "tokentxnsErc1155" = ""
): string {
  const baseUrl = getBaseUrlForNetwork(networkId);
  const sectionParam = getSectionUrlPath(section);
  return baseUrl === null
    ? ""
    : `https://${baseUrl}/address/${address}${sectionParam}`;
}

export function createAccountLinkForChain(
  address: string,
  chainId: string,
  section: "" | "tokentxns" | "tokentxnsErc721" | "tokentxnsErc1155" = ""
): string {
  const baseUrl = getBaseUrlForChain(chainId);
  const sectionParam = getSectionUrlPath(section);
  return baseUrl === null
    ? ""
    : `https://${baseUrl}/address/${address}${sectionParam}`;
}

export function createCustomAccountLink(
  address: string,
  customNetworkUrl: string,
  section: "" | "tokentxns" | "tokentxnsErc721" | "tokentxnsErc1155" = ""
): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, "address", address);
  const sectionParam = getSectionUrlPath(section);
  return `${parsedUrl}${sectionParam}`;
}

export function getAccountLink(
  address: string,
  chainId: string,
  rpcPrefs: RpcPrefsInterface = {},
  networkId = "",
  section: "" | "tokentxns" | "tokentxnsErc721" | "tokentxnsErc1155" = ""
) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomAccountLink(address, rpcPrefs.blockExplorerUrl, section);
  }
  if (networkId) {
    return createAccountLink(address, networkId, section);
  }
  return createAccountLinkForChain(address, chainId, section);
}
