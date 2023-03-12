<template>
  <div class="token-list">
    <template v-for="token in othersideTokens" :key="token.contract_address">
      <NftCard :token="token" />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useStore } from "../../store";

  export interface Props {
    page?: number;
  }

  /* Components */
  import NftCard from "../../components/NftCard.vue";

  /* Init Pinia Store Values and Methods */
  const store = useStore();
  const { othersideTokens } = storeToRefs(store);

  /* Ape NFT Contract Addresses */
  const othersideAddress = import.meta.env.VITE_OTHERSIDE_CONTRACT_ADDRESS;
  console.log("Otherside Address : ", othersideAddress);

  const props = withDefaults(defineProps<Props>(), {
    page: 1,
  });

  async function fetchNfts() {
    try {
      const othersideTokens = await store.contractNftSearch(
        othersideAddress,
        "ethereum",
        "metadata",
        true,
        12,
        props.page
      );
      if (othersideTokens.nfts) {
        store.addOthersideTokens(othersideTokens.nfts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(async () => {
    await fetchNfts();
  });
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";
  @import "../../assets/styles/mixins.scss";
</style>
