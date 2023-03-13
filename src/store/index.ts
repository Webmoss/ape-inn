// import { ethers } from "ethers";
import { defineStore } from "pinia";
import nftPort from "../services/nftPort.js";

/* Apecoin Contract Address */
// const apecoinAddress = import.meta.env.VITE_APECOIN_CONTRACT_ADDRESS;

/* Ape NFTs Contract Addresses */
// const baycAddress = import.meta.env.VITE_BAYC_CONTRACT_ADDRESS;
// const maycAddress = import.meta.env.VITE_MUTANT_CONTRACT_ADDRESS;
// const bakcAddress = import.meta.env.VITE_BAKC_CONTRACT_ADDRESS;
// const othersideAddress = import.meta.env.VITE_OTHERSIDE_CONTRACT_ADDRESS;
// const sewerpassAddress = import.meta.env.VITE_SEWERPASS_CONTRACT_ADDRESS;
// const chemistryAddress = import.meta.env.VITE_CHEMISTRY_CONTRACT_ADDRESS;

// console.log("Apecoin Address :", apecoinAddress);
// console.log("BAYC Address : ", baycAddress);
// console.log("MAYC Address : ", maycAddress);
// console.log("BAKC Address : ", bakcAddress);
// console.log("Otherside Address : ", othersideAddress);
// console.log("Sewerpass Address : ", sewerpassAddress);
// console.log("Chemistry Address : ", chemistryAddress);

/* LFG */
export const useStore = defineStore({
  id: "store",
  state: () => ({
    account: "",
    balance: 0,
    accountNfts: [],
    errorCode: 0,
    errorStatus: "",
    errorMessage: "",
    loading: false,
    searchChainId: "all",
    searchContract: "",
    searchName: "",
    searchImage: "",
    searchResults: [],
    baycTokens: [],
    maycTokens: [],
    bakcTokens: [],
    othersideTokens: [],
    sewerpassTokens: [],
    chemistryTokens: [],
  }),
  getters: {
    getAccount(state) {
      return state.account;
    },
    getBalance(state) {
      return state.balance;
    },
    getAccountNfts(state) {
      return state.accountNfts;
    },
    isErrorCode(state) {
      return state.errorCode;
    },
    isErrorStatus(state) {
      return state.errorStatus;
    },
    isErrorMessage(state) {
      return state.errorMessage;
    },
    isLoading(state) {
      return state.loading;
    },
    getSearchChainId(state) {
      return state.searchChainId;
    },
    getSearchContract(state) {
      return state.searchContract;
    },
    getSearchName(state) {
      return state.searchName;
    },
    getSearchImage(state) {
      return state.searchImage;
    },
    getSearchResults(state) {
      return state.searchResults;
    },
    getBaycTokens(state) {
      return state.baycTokens;
    },
    getMaycTokens(state) {
      return state.maycTokens;
    },
    getBakcTokens(state) {
      return state.bakcTokens;
    },
    getOthersideTokens(state) {
      return state.othersideTokens;
    },
    getSewerpassTokens(state) {
      return state.sewerpassTokens;
    },
    getChemistryTokens(state) {
      return state.chemistryTokens;
    },
  },
  actions: {
    updateAccount(account: string) {
      this.account = account;
    },
    updateBalance(balance: number) {
      this.balance = balance;
    },
    addAccountNfts(tokens: any) {
      this.accountNfts = tokens;
    },
    setErrorCode(value: number) {
      this.errorCode = value;
    },
    setErrorStatus(value: string) {
      this.errorStatus = value;
    },
    setErrorMessage(value: string) {
      this.errorMessage = value;
    },
    setLoading(value: boolean) {
      this.loading = value;
    },
    updateSearchChainId(searchChainId: string) {
      this.searchChainId = searchChainId;
    },
    updateSearchContract(searchContract: string) {
      this.searchContract = searchContract;
    },
    updateSearchName(searchName: string) {
      this.searchName = searchName;
    },
    updateSearchImage(searchImage: string) {
      this.searchImage = searchImage;
    },
    addSearchResults(tokens: any) {
      this.searchResults = tokens;
    },
    clearSearchResults() {
      this.searchChainId = "all";
      this.searchContract = "";
      this.searchName = "";
      this.searchImage = "";
      this.searchResults = [];
    },
    addBaycTokens(tokens: any) {
      this.baycTokens = tokens;
    },
    addMaycTokens(tokens: any) {
      this.maycTokens = tokens;
    },
    addBakcTokens(tokens: any) {
      this.bakcTokens = tokens;
    },
    addOthersideTokens(tokens: any) {
      this.othersideTokens = tokens;
    },
    addSewerpassTokens(tokens: any) {
      this.sewerpassTokens = tokens;
    },
    addChemistryTokens(tokens: any) {
      this.chemistryTokens = tokens;
    },

    /**
     * NFT PORT API - Search NFTs by Name and filter by Contract Address
     * @param {String} contract Results will only include NFTs from this contract address.
     * @param {String} text Required Search query
     * @param {String} chain Allowed values: polygon / ethereum / all
     * @param {String} sort_order Allowed values: desc / asc
     * @param {String} order_by Allowed values: relevance / mint_date
     * @param {Integer} page_size Required Search query
     * @param {Integer} page_number Required Search query
     */
    async searchNFTs(
      contract: string,
      text: string,
      chain: string,
      sort_order: string,
      order_by: string,
      page_size: number,
      page_number: number
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.nftSearch(
        text,
        contract,
        chain,
        sort_order,
        order_by,
        page_size,
        page_number
      );
      return results;
    },

    /**
     * NFT PORT API - Search NFTs by Image URL and filter by Contract Address
     * @param {String} contract Results will only include NFTs from this contract address.
     * @param {String} imageUrl URL that points to the image that returns a Content-Length and Content-Type header or contains the file extension. Supports .JPG, .JPEG, .PNG, .WebP, .PPM, .BMP, .PGM, .TIF, .TIFF file formats.
     * @param {Integer} page_size Required Search query
     * @param {Integer} page_number Required Search query
     * @param {Number} threshold Threshold for classifying an NFT as a counterfeit. >= 0.1 <= 1 Default: 0.9
     */
    async searchNFTImage(
      contract: string,
      imageUrl: string,
      page_size: number,
      page_number: number,
      threshold: number
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.nftSearchImage(
        imageUrl,
        contract,
        page_size,
        page_number,
        threshold
      );
      return results;
    },

    /**
     * NFT PORT API - Search NFTs by Token Id and filter by Contract Address
     * @param {String} contract Results will only include NFTs from this contract address.
     * @param {String} contractFilter NFTs from this contract address will be filtered out. Useful for examples where the whole NFT collection is visually very similar e.g. CryptoPunks.
     * @param {String} text
     * @param {String} tokenId A unique uint256 ID inside the contract. The contract address and token ID pair is a globally unique and fully-qualified identifier for a specific NFT on chain.
     * @param {String} chain Blockchain where the NFT has been minted. Allowed values: polygon / ethereum / all
     * @param {Integer} page_size Required Search query
     * @param {Integer} page_number Required Search query
     * @param {Number} threshold Threshold for classifying an NFT as a counterfeit. >= 0.1 <= 1 Default: 0.9
     */
    async searchNFTTokenId(
      contract: string,
      contractFilter: string,
      tokenId: string,
      text: string,
      chain: string,
      page_size: number,
      page_number: number,
      threshold: number
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.nftSearchTokenId(
        contract,
        contractFilter,
        tokenId,
        text,
        chain,
        page_size,
        page_number,
        threshold
      );
      return results;
    },

    /**
     * NFT PORT API - Fetch NFTs by Contract Address
     * @param {String} contract Results will only include NFTs from this contract address.
     * @param {String} chain Allowed values: polygon / ethereum / rinkeby
     * @param {String} include Include optional data in the response. default Allowed values: default / metadata / all
     * @param {Bool} refresh_metadata Queues and refreshes all the NFTs metadata inside the contract (i.e. all tokens)
     * if they have changed since the updated_date. Useful for example, when NFT collections are revealed.
     * @param {Integer} page_size Required Search query
     * @param {Integer} page_number Required Search query
     * @returns {Promise<String|Error>}
     */
    async contractNftSearch(
      contract: string,
      chain: string,
      include: string,
      refresh_metadata: boolean,
      page_size: number,
      page_number: number
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.contractNftSearch(
        contract,
        chain,
        include,
        refresh_metadata,
        page_size,
        page_number
      );
      return results;
    },

    /**
     * NFT PORT API - Fetch NFTs by Account Address
     * @param {String} account Results will only include NFTs from this account address.
     * @param {String} contract Filter by and return NFTs only from the given contract address.
     * @param {String} continuation Continuation. Pass this value from the previous response to fetch the next page.
     * @param {String} chain Allowed values: polygon / ethereum / rinkeby
     * @param {String} include Include optional data in the response. default is the default response and metadata includes NFT metadata, like in Retrieve NFT details, and contract_information includes information of the NFT’s contract.
     * Allowed values: default / metadata / contract_information  Default: default
     * @param {String} exclude Exclude data from the response. erc721 excludes ERC721 tokens and erc1155 excludes ERC1155 tokens. Allowed values: erc721 / erc1155
     * @param {Integer} page_size Required Search query
     */
    async accountNftSearch(
      account: string,
      contract: string,
      continuation: string,
      chain: string,
      include: string,
      exclude: string,
      page_size: number
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.accountNftSearch(
        account,
        contract,
        continuation,
        chain,
        include,
        exclude,
        page_size
      );
      return results;
    },

    /**
     * NFT PORT API - Fetch NFT Details by Contract and Token Id
     * @param {String} contract Results will only include NFTs from this contract address.
     * @param {String} token_id Results will only include NFTs from this contract address.
     * @param {String} chain Allowed values: polygon / ethereum / rinkeby
     * @param {Bool} refresh_metadata Queues and refreshes all the NFTs metadata inside the contract (i.e. all tokens)
     */
    async detailsNftSearch(
      contract: string,
      token_id: string,
      chain: string,
      refresh_metadata: boolean
    ) {
      /* NFT Port API Search */
      const nftPortApi = new nftPort();
      const results = await nftPortApi.detailsNftSearch(
        contract,
        token_id,
        chain,
        refresh_metadata
      );
      return results;
    },
  },
});
