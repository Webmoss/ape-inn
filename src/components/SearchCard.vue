<template>
  <div
    v-if="
      (token && token.cached_file_url) ||
      token.mint_date ||
      token.name ||
      token.description ||
      token.chain ||
      token.contract ||
      token.contract_address
    "
    class="search-nft"
  >
    <div v-if="token.name && token.cached_file_url" class="search-nft-image">
      <img
        v-if="token.cached_file_url"
        :src="`${token.cached_file_url}`"
        :alt="`${token.name}`"
      />
    </div>
    <div v-if="token.mint_date" class="search-nft-description">
      Mint Date: {{ token.mint_date }}
    </div>
    <div v-if="token.chain" class="search-nft-description">
      Blockchain: {{ token.chain }}
    </div>
    <div v-if="token.name" class="search-nft-title">
      {{ token.name }}
    </div>
    <div v-if="token.description" class="search-nft-description">
      {{ token.description }}
    </div>
    <div v-if="token.contract" class="search-nft-description">
      {{ token.contract ? token.contract : token.contract_address }}
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineProps<{ token: object }>();
  // Body
  // application/json
  // response
  // string
  // required
  // Response status, either OK or NOK.

  // Allowed values:
  // OK
  // NOK
  // search_results
  // array[TextSearchNft]
  // chain
  // string
  // required
  // Blockchain where the NFT has been minted.

  // Allowed values:
  // polygon
  // ethereum
  // contract_address
  // string
  // required
  // The contract address of the NFT.

  // token_id
  // string
  // required
  // A unique uint256 ID inside the contract. The contract address and token ID pair is a globally unique and fully-qualified identifier for a specific NFT on chain.

  // cached_file_url
  // string
  // required
  // Cached file (image, video, etc) in NFTPort's cloud with no access restrictions and without IPFS issues.

  // name
  // string
  // required
  // Name of the NFT in the metadata.

  // description
  // string
  // required
  // Description of the NFT in the metadata.

  // mint_date
  // string
  // Date when the NFT was minted (ISO).
</script>
<style lang="scss">
  @import "../assets/styles/variables.scss";
  @import "../assets/styles/mixins.scss";

  .search-nft {
    display: inline;
    float: left;
    box-sizing: border-box;
    width: 300px;
    background: #f4f4f4;
    border: 2px solid #f4f4f4;
    border-radius: 15px;
    margin: 0 auto 25px;
    padding: 10px;
    transition: 0.4s;
    cursor: pointer;

    @include breakpoint($break-md) {
      width: 380px;
      padding: 20px 20px 10px;
    }
    @include breakpoint($break-sm) {
      width: 100;
    }
    @include breakpoint($break-xs) {
      width: 100%;
      margin: 0 auto 20px;
    }

    &:hover {
      border: 2px solid #8d50f5;
    }

    .search-nft-image {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      overflow: hidden;

      img,
      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
      }
    }

    .search-nft-title {
      color: #1a1a1a;
      width: 100%;
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
      text-align: center;
      margin: 10px 0 0 0;
    }

    .search-nft-description {
      color: #1a1a1a;
      width: 100%;
      font-size: 12px;
      font-weight: normal;
      text-align: center;
      margin: 0;
    }
  }
</style>
