import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RevvCityWarriors',
  tokenName: 'Revv City Warriors',
  tokenSymbol: 'RCW',
  hiddenMetadataUri: 'ipfs://QmQkwvP1cjVJ4UCSRSFeRJW4fExPdQYr2PLz8sG7tVMmcT/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
