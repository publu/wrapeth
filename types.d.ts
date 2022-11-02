declare module '**/*.png' {
  const value: any;
  export default value;
}

export type User = {
  attributes: { 'custom:account_address': string };
  network: Network;
  username: string;
  ethBalance: string;
  wethBalance: string;
};

export type Network = {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  network_id: number;
  chain_id: string;
  providers: string[];
  rpc_url: string;
  block_explorer: string;
  hub_sort_order?: number;
};

export type Chain = {
  id: number;
  name: string;
  network: string;
  iconUrl: object;
  iconBackground: string;
  nativeCurrency: object;
  rpcUrls: object;
  blockExplorers: object;
  testnet: boolean;
};
