const assert = require("assert");
const {
  createAccountLink,
  createCustomAccountLink,
  createExplorerLink,
  createCustomExplorerLink,
  createTokenTrackerLink,
  createCustomTokenTrackerLink,
  createExplorerLinkForChain,
  createAccountLinkForChain,
  createTokenTrackerLinkForChain,
  getBlockExplorerLink,
  getAccountLink,
  getTokenTrackerLink,
} = require("../dist");

// `https://${baseUrl}/address/${address}`
describe("account-link", function () {
  describe("by networkId", function () {
    it("should handle mainnet correctly", function () {
      const result = createAccountLink("foo", "1");
      assert.strictEqual(
        result,
        "https://etherscan.io/address/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly", function () {
      const result = createAccountLink("foo", "3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/address/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc testnet correctly", function () {
      const result = createAccountLink("foo", "97");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo",
        "should handle bsc testnet"
      );
    });

    it("should have null as a prefix", function () {
      const result = createAccountLink("foo", "3234");
      assert.strictEqual(result, "", "should return an empty string");
    });

    it("should handle no section", function () {
      const result = createAccountLink("foo", "97");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo",
        "should handle empty section"
      );
    });

    it("should handle empty section", function () {
      const result = createAccountLink("foo", "97", "");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo",
        "should handle empty section"
      );
    });

    it("should handle tokentxns section", function () {
      const result = createAccountLink("foo", "97", "tokentxns");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo#tokentxns",
        "should handle tokentxns section"
      );
    });

    it("should handle tokentxnsErc721 section", function () {
      const result = createAccountLink("foo", "97", "tokentxnsErc721");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo#tokentxnsErc721",
        "should handle tokentxnsErc721 section"
      );
    });

    it("should handle tokentxnsErc1155 section", function () {
      const result = createAccountLink("foo", "97", "tokentxnsErc1155");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/address/foo#tokentxnsErc1155",
        "should handle tokentxnsErc1155 section"
      );
    });
  });

  describe("by chainId", function () {
    it("should handle mainnet correctly", function () {
      const result = createAccountLinkForChain("foo", "0x1");
      assert.strictEqual(
        result,
        "https://etherscan.io/address/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly", function () {
      const result = createAccountLinkForChain("foo", "0x3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/address/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc correctly", function () {
      const result = createAccountLinkForChain("foo", "0x38");
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo",
        "should handle bsc"
      );
    });

    it("should have null as a prefix", function () {
      const result = createAccountLinkForChain("foo", "0xca2");
      assert.strictEqual(result, "", "should return an empty string");
    });

    it("should handle no section", function () {
      const result = createAccountLinkForChain("foo", "0x38");
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo",
        "should handle empty section"
      );
    });

    it("should handle empty section", function () {
      const result = createAccountLinkForChain("foo", "0x38", "");
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo",
        "should handle empty section"
      );
    });

    it("should handle tokentxns section", function () {
      const result = createAccountLinkForChain("foo", "0x38", "tokentxns");
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo#tokentxns",
        "should handle tokentxns section"
      );
    });

    it("should handle tokentxnsErc721 section", function () {
      const result = createAccountLinkForChain(
        "foo",
        "0x38",
        "tokentxnsErc721"
      );
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo#tokentxnsErc721",
        "should handle tokentxnsErc721 section"
      );
    });

    it("should handle tokentxnsErc1155 section", function () {
      const result = createAccountLinkForChain(
        "foo",
        "0x38",
        "tokentxnsErc1155"
      );
      assert.strictEqual(
        result,
        "https://bscscan.com/address/foo#tokentxnsErc1155",
        "should handle tokentxnsErc1155 section"
      );
    });
  });

  describe("custom account link", function () {
    it("should handle customNetwork url correctly", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo",
        "should return binance testnet address url"
      );
    });

    it("should handle customNetwork url that ends with / correctly", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo",
        "should return binance testnet address url"
      );
    });

    it("should handle no section", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo",
        "should handle empty section"
      );
    });

    it("should handle empty section", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        ""
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo",
        "should handle empty section"
      );
    });

    it("should handle tokentxns section", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        "tokentxns"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo#tokentxns",
        "should handle tokentxns section"
      );
    });

    it("should handle tokentxnsErc721 section", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        "tokentxnsErc721"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo#tokentxnsErc721",
        "should handle tokentxnsErc721 section"
      );
    });

    it("should handle tokentxnsErc1155 section", function () {
      const result = createCustomAccountLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545",
        "tokentxnsErc1155"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/address/foo#tokentxnsErc1155",
        "should handle tokentxnsErc1155 section"
      );
    });
  });

  describe("getAccountLink", function () {
    it("should return the correct account-link url for an account based on chainId, networkId and rpcPref args", function () {
      const getAccountLinkTests = [
        {
          expected: "https://etherscan.io/address/0xabcd",
          chainId: "0x1",
          address: "0xabcd",
          section: "",
        },
        {
          expected: "https://etherscan.io/address/0xabcd",
          networkId: "1",
          address: "0xabcd",
          section: "",
        },
        {
          expected: "https://ropsten.etherscan.io/address/0xdef0",
          chainId: "0x3",
          address: "0xdef0",
          rpcPrefs: {},
          section: "",
        },
        {
          // test handling of `blockExplorerUrl` for a custom RPC
          expected: "https://block.explorer/address/0xabcd",
          chainId: "0x21",
          address: "0xabcd",
          rpcPrefs: {
            blockExplorerUrl: "https://block.explorer",
          },
          section: "",
        },
        {
          // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
          expected: "https://another.block.explorer/address/0xdef0",
          chainId: "0x1f",
          address: "0xdef0",
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
          section: "",
        },
        {
          expected: "https://another.block.explorer/address/0xdef0#tokentxns",
          chainId: "0x1f",
          address: "0xdef0",
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
          section: "tokentxns",
        },
        {
          expected:
            "https://another.block.explorer/address/0xdef0#tokentxnsErc721",
          chainId: "0x1f",
          address: "0xdef0",
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
          section: "tokentxnsErc721",
        },
        {
          expected:
            "https://another.block.explorer/address/0xdef0#tokentxnsErc1155",
          chainId: "0x1f",
          address: "0xdef0",
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
          section: "tokentxnsErc1155",
        },
      ];
      getAccountLinkTests.forEach(
        ({ expected, address, chainId, rpcPrefs, networkId, section }) => {
          assert.strictEqual(
            getAccountLink(address, chainId, rpcPrefs, networkId, section),
            expected
          );
        }
      );
    });
  });
});

// `https://${prefix}etherscan.io/tx/${hash}`
describe("explorer-link", function () {
  describe("by networkId", function () {
    it("should handle mainnet correctly", function () {
      const result = createExplorerLink("foo", "1");
      assert.strictEqual(
        result,
        "https://etherscan.io/tx/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly", function () {
      const result = createExplorerLink("foo", "3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/tx/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc correctly", function () {
      const result = createExplorerLink("foo", "56");
      assert.strictEqual(
        result,
        "https://bscscan.com/tx/foo",
        "should handle bsc"
      );
    });

    it("should have null as a prefix", function () {
      const result = createExplorerLink("foo", "45345");
      assert.strictEqual(result, "", "should return an empty string");
    });
  });

  describe("by chainId", function () {
    it("should handle mainnet correctly", function () {
      const result = createExplorerLinkForChain("foo", "0x1");
      assert.strictEqual(
        result,
        "https://etherscan.io/tx/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly", function () {
      const result = createExplorerLinkForChain("foo", "0x3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/tx/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc testnet correctly", function () {
      const result = createExplorerLinkForChain("foo", "0x61");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/tx/foo",
        "should handle bsc testnet"
      );
    });

    it("should have null as a prefix", function () {
      const result = createExplorerLinkForChain("foo", "0xFF");
      assert.strictEqual(result, "", "should return an empty string");
    });
  });

  it("should handle customNetwork url correctly", function () {
    const result = createCustomExplorerLink(
      "foo",
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    );
    assert.strictEqual(
      result,
      "https://data-seed-prebsc-1-s1.binance.org:8545/tx/foo",
      "should return binance testnet transaction url"
    );
  });
});

/**
 * `https://${prefix}etherscan.io/token/${tokenAddress}${
 *    holderAddress ? `?a=${ holderAddress }` : ''
 *  }`
 */
describe("token-tracker-link", function () {
  describe("by networkId", function () {
    it("should handle mainnet correctly (no account)", function () {
      const result = createTokenTrackerLink("foo", "1");
      assert.strictEqual(
        result,
        "https://etherscan.io/token/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly (no account)", function () {
      const result = createTokenTrackerLink("foo", "3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/token/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc correctly (no account)", function () {
      const result = createTokenTrackerLink("foo", "56");
      assert.strictEqual(
        result,
        "https://bscscan.com/token/foo",
        "should handle bsc"
      );
    });

    it("should handle mainnet correctly (account)", function () {
      const result = createTokenTrackerLink("foo", "1", "0xabc");
      assert.strictEqual(
        result,
        "https://etherscan.io/token/foo?a=0xabc",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly (account)", function () {
      const result = createTokenTrackerLink("foo", "3", "0xabc");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/token/foo?a=0xabc",
        "should handle ropsten"
      );
    });

    it("should handle bsc testnet correctly (account)", function () {
      const result = createTokenTrackerLink("foo", "97", "0xabc");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/token/foo?a=0xabc",
        "should handle bsc testnet"
      );
    });

    it("should null has a prefix", function () {
      const result = createTokenTrackerLink("foo", "3654", "0xabc");
      assert.strictEqual(result, "", "should return an empty string");
    });
  });

  describe("by chainId", function () {
    it("should handle mainnet correctly (no account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x1");
      assert.strictEqual(
        result,
        "https://etherscan.io/token/foo",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly (no account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x3");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/token/foo",
        "should handle ropsten"
      );
    });

    it("should handle bsc testnet correctly (no account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x61");
      assert.strictEqual(
        result,
        "https://testnet.bscscan.com/token/foo",
        "should handle bsc testnet"
      );
    });

    it("should handle mainnet correctly (account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x1", "0xabc");
      assert.strictEqual(
        result,
        "https://etherscan.io/token/foo?a=0xabc",
        "should handle mainnet"
      );
    });

    it("should handle ropsten correctly (account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x3", "0xabc");
      assert.strictEqual(
        result,
        "https://ropsten.etherscan.io/token/foo?a=0xabc",
        "should handle ropsten"
      );
    });

    it("should handle bsc correctly (account)", function () {
      const result = createTokenTrackerLinkForChain("foo", "0x38", "0xabc");
      assert.strictEqual(
        result,
        "https://bscscan.com/token/foo?a=0xabc",
        "should handle bsc"
      );
    });

    it("should null has a prefix", function () {
      const result = createTokenTrackerLinkForChain("foo", "0xe46", "0xabc");
      assert.strictEqual(result, "", "should return an empty string");
    });

    it("should handle customNetwork url correctly", function () {
      const result = createCustomTokenTrackerLink(
        "foo",
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      );
      assert.strictEqual(
        result,
        "https://data-seed-prebsc-1-s1.binance.org:8545/token/foo",
        "should return binance testnet token url"
      );
    });

    describe("getTokenTrackerLink", function () {
      it("should return the correct token tracker url based on chainId, networkId and rpcPref args", function () {
        const getTokenTrackerTests = [
          {
            expected: "https://etherscan.io/token/0xabcd",
            networkId: "1",
            tokenAddress: "0xabcd",
          },
          {
            expected: "https://ropsten.etherscan.io/token/0xdef0",
            networkId: "3",
            tokenAddress: "0xdef0",
          },
          {
            expected: "https://bscscan.com/token/0xdef0",
            networkId: "56",
            tokenAddress: "0xdef0",
          },
          {
            // test handling of `blockExplorerUrl` for a custom RPC
            expected: "https://block.explorer/token/0xar31",
            tokenAddress: "0xar31",
            rpcPrefs: {
              blockExplorerUrl: "https://block.explorer",
            },
          },
          {
            // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
            expected: "https://another.block.explorer/token/0xdef0",
            tokenAddress: "0xdef0",
            rpcPrefs: {
              blockExplorerUrl: "https://another.block.explorer/",
            },
          },
          {
            expected: "https://etherscan.io/token/0xabcd",
            chainId: "0x1",
            tokenAddress: "0xabcd",
          },
          {
            expected: "https://ropsten.etherscan.io/token/0xdef0",
            chainId: "0x3",
            tokenAddress: "0xdef0",
            rpcPrefs: {},
          },
          {
            expected: "https://testnet.bscscan.com/token/0xdef0",
            chainId: "0x61",
            tokenAddress: "0xdef0",
            rpcPrefs: {},
          },
          {
            // test handling of `blockExplorerUrl` for a custom RPC
            expected: "https://block.explorer/token/0xabcd",
            chainId: "0x1f",
            tokenAddress: "0xabcd",
            rpcPrefs: {
              blockExplorerUrl: "https://block.explorer",
            },
          },
          {
            // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
            expected: "https://another.block.explorer/token/0xdef0",
            chainId: "0x21",
            tokenAddress: "0xdef0",
            rpcPrefs: {
              blockExplorerUrl: "https://another.block.explorer/",
            },
          },
        ];

        getTokenTrackerTests.forEach((test) => {
          assert.strictEqual(
            getTokenTrackerLink(
              test.tokenAddress,
              test.chainId,
              test.networkId,
              test.holderAddress,
              test.rpcPrefs
            ),
            test.expected
          );
        });
      });
    });
  });

  /*
   * Test getBlockExplorerLink,
   * Which applies correct explorer-link generator based on args
   */
  describe("getBlockExplorerLink", function () {
    it("should return the correct block explorer url for an account based on chainId, networkId and rpcPref args", function () {
      const getBlockExplorerLinkTests = [
        {
          expected: "https://etherscan.io/tx/0xabcd",
          transaction: {
            metamaskNetworkId: "1",
            hash: "0xabcd",
          },
        },
        {
          expected: "https://ropsten.etherscan.io/tx/0xdef0",
          transaction: {
            metamaskNetworkId: "3",
            hash: "0xdef0",
          },
          rpcPrefs: {},
        },
        {
          expected: "https://bscscan.com/tx/0xdef0",
          transaction: {
            metamaskNetworkId: "56",
            hash: "0xdef0",
          },
          rpcPrefs: {},
        },
        {
          // test handling of `blockExplorerUrl` for a custom RPC
          expected: "https://block.explorer/tx/0xabcd",
          transaction: {
            metamaskNetworkId: "31",
            hash: "0xabcd",
          },
          rpcPrefs: {
            blockExplorerUrl: "https://block.explorer",
          },
        },
        {
          // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
          expected: "https://another.block.explorer/tx/0xdef0",
          transaction: {
            metamaskNetworkId: "33",
            hash: "0xdef0",
          },
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
        },
        {
          expected: "https://etherscan.io/tx/0xabcd",
          transaction: {
            chainId: "0x1",
            hash: "0xabcd",
          },
        },
        {
          expected: "https://ropsten.etherscan.io/tx/0xdef0",
          transaction: {
            chainId: "0x3",
            hash: "0xdef0",
          },
          rpcPrefs: {},
        },
        {
          expected: "https://testnet.bscscan.com/tx/0xdef0",
          transaction: {
            chainId: "0x61",
            hash: "0xdef0",
          },
          rpcPrefs: {},
        },
        {
          // test handling of `blockExplorerUrl` for a custom RPC
          expected: "https://block.explorer/tx/0xabcd",
          transaction: {
            chainId: "0x1f",
            hash: "0xabcd",
          },
          rpcPrefs: {
            blockExplorerUrl: "https://block.explorer",
          },
        },
        {
          // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
          expected: "https://another.block.explorer/tx/0xdef0",
          transaction: {
            chainId: "0x21",
            hash: "0xdef0",
          },
          rpcPrefs: {
            blockExplorerUrl: "https://another.block.explorer/",
          },
        },
      ];

      getBlockExplorerLinkTests.forEach((test) => {
        assert.strictEqual(
          getBlockExplorerLink(test.transaction, test.rpcPrefs),
          test.expected
        );
      });
    });
  });
});
