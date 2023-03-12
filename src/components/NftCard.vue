<template>
  <div v-if="token" class="nft">
    <div v-if="token.metadata && token.metadata.image" class="nft-image">
      <img :src="getUrlProtocol(token.metadata.image)" />
    </div>
    <div v-else-if="token && token.cached_file_url" class="nft-image">
      <img :src="getUrlProtocol(token.cached_file_url)" />
    </div>
    <div v-else-if="token.file_url && token.file_url" class="nft-image">
      <img :src="getUrlProtocol(token.file_url)" />
    </div>
    <div v-else-if="token.file_url && token.file_url" class="nft-image">
      <img :src="getUrlProtocol(token.file_url)" />
    </div>
    <div v-if="!token.token_id" class="nft-title">
      Token ID: {{ token.token_id }}
    </div>
    <div v-if="token.metadata && token.metadata.name" class="nft-title">
      {{ token.metadata.name }}
    </div>
    <div v-if="token.metadata && token.metadata.title" class="nft-title">
      {{ token.metadata.title }}
    </div>
    <div
      v-if="token.metadata && token.metadata.description"
      class="nft-description"
    >
      {{ token.metadata.description }}
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineProps<{ token: object }>();

  function getUrlProtocol(url: string) {
    let protocol = url.endsWith("jpg") ? 5 : 0;
    if (protocol == 0) protocol = url.startsWith("http://") ? 1 : 0;
    if (protocol == 0) protocol = url.startsWith("https://") ? 2 : 0;
    if (protocol == 0) protocol = url.startsWith("ipfs://") ? 3 : 0;
    if (protocol == 0) protocol = url !== "" ? 4 : 0;
    switch (protocol) {
      case 1:
        return url;
      case 2:
        return url;
      case 3:
        return "https://ipfs.io/ipfs/" + url.substring(7);
      case 4:
        return url;
      case 5:
        return url;
      case 0:
        return "Not http or https";
    }
  }

  // NFT Token Metadata
  // {
  //   "chain": "ethereum",
  //   "contract_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  //   "token_id": "1005",
  //   "metadata_url": "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1005",
  //   "metadata":
  //     {
  //       "image": "ipfs://QmamnQUBpTW9fRbh1L3r23XQU9rXbaSiGaKVui4CahJbox",
  //       "attributes":
  //         [
  //           { "trait_type": "Mouth", "value": "Bored" },
  //           { "trait_type": "Fur", "value": "Cream" },
  //           { "trait_type": "Background", "value": "Aquamarine" },
  //           { "trait_type": "Eyes", "value": "X Eyes" }
  //         ]
  //       },
  //       "file_url": "ipfs://QmamnQUBpTW9fRbh1L3r23XQU9rXbaSiGaKVui4CahJbox",
  //       "animation_url": null,
  //       "cached_file_url": "https://storage.googleapis.com/sentinel-nft/raw-assets/35057f98680d61ad2fc44b530e7465e17386349d600cd1c01858c986f23fc3c9.png",
  //       "cached_animation_url": null,
  //       "creator_address": "0xef651aeb3f20ee4e2bcd22e111d202cde25184bb",
  //       "updated_date": "2023-02-23T16:03:41.986686",
  //       "owner": null
  //     }
  // }
</script>
<style lang="scss">
  @import "../assets/styles/variables.scss";
  @import "../assets/styles/mixins.scss";

  .nft {
    display: inline;
    float: left;
    box-sizing: border-box;
    width: 240px;
    background: #f4f4f4;
    border: 2px solid #f4f4f4;
    border-radius: 15px;
    margin: 0 13px 25px 13px;
    padding: 10px;
    transition: 0.4s;
    cursor: pointer;

    @include breakpoint($break-md) {
      width: 380px;
      padding: 20px 20px 10px;
    }
    @include breakpoint($break-sm) {
      width: 380px;
    }
    @include breakpoint($break-xs) {
      width: 380px;
      margin: 0 auto 20px;
    }

    &:hover {
      border: 2px solid #8d50f5;
    }

    .nft-image {
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
        @include breakpoint($break-md) {
          width: 360px;
        }
        @include breakpoint($break-sm) {
          width: 320px;
        }
        @include breakpoint($break-xs) {
          width: 300px;
        }
      }
    }

    .nft-title {
      color: #1a1a1a;
      width: 100%;
      font-size: 14px;
      font-weight: normal;
      text-transform: uppercase;
      text-align: center;
      margin: 10px 0 0 0;
    }

    .nft-description {
      color: #1a1a1a;
      width: 100%;
      font-size: 12px;
      font-weight: normal;
      text-align: center;
      margin: 0;
    }
  }
</style>
