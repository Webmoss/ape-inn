<template>
  <div class="token-list">
    <template v-for="token in sewerpassTokens" :key="token.contract_address">
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
  const { sewerpassTokens } = storeToRefs(store);

  /* Ape NFT Contract Addresses */
  const sewerpassAddress = import.meta.env.VITE_SEWERPASS_CONTRACT_ADDRESS;
  console.log("Sewerpass Address : ", sewerpassAddress);

  const props = withDefaults(defineProps<Props>(), {
    page: 1,
  });

  async function fetchNfts() {
    try {
      const sewerpassTokens = await store.contractNftSearch(
        sewerpassAddress,
        "ethereum",
        "metadata",
        true,
        12,
        props.page
      );
      if (sewerpassTokens.nfts) {
        store.addSewerpassTokens(sewerpassTokens.nfts);
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
