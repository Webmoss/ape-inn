export {};

declare global {
  interface Window {
    ethereum: any;
  }
  interface authNFT {
    endpoint: string;
  }
}
