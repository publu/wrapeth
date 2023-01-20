import { chain, configureChains, Chain as WagmiChain } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';

type CustomChain = {
  iconUrl: string;
  iconBackground: string;
};

type Chain = CustomChain & WagmiChain;

const xdai: Chain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'gnosis',
  iconUrl: 'https://i.imgur.com/lL4RlAZ.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'XDAI',
  },
  rpcUrls: {
    default: 'https://rpc.gnosischain.com',
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://blockscout.com/poa/xdai' },
  },
  testnet: false,
};

const zkevm: Chain = {
  id: 1422,
  name: 'Polygon ZKEVM Testnet',
  network: 'zkevmtest',
  iconUrl: 'https://polygon.technology/_nuxt/img/hermez.739fdde.svg',
  iconBackground: '#6a0dad',
  nativeCurrency: {
    decimals: 18,
    name: 'WETH',
    symbol: 'WETH',
  },
  rpcUrls: {
    default: 'https://rpc.public.zkevm-test.net',
  },
  blockExplorers: {
    default: { name: 'JordiScout', url: 'https://explorer.public.zkevm-test.net' },
  },
  testnet: true,
};

export const { chains, provider } = configureChains(
  [
/*    chain.mainnet,
    xdai,
    chain.polygon,
    chain.arbitrum,
    chain.optimism,
    chain.goerli,
    chain.sepolia,*/
    zkevm,
  ],
  [
    jsonRpcProvider({
      rpc: (localChain: any) => ({
        http: localChain.rpcUrls.default,
      }),
    }),
  ],
);
