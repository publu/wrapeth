import { configureChains, Chain as WagmiChain } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

type CustomChain = {
  iconUrl: string;
  iconBackground: string;
};

type Chain = CustomChain & WagmiChain;

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
