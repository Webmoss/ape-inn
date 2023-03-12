<template>
  <div class="token-list">
    <template v-for="token in maycTokens" :key="token.contract_address">
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
  const { maycTokens } = storeToRefs(store);

  /* Ape NFT Contract Addresses */
  const maycAddress = import.meta.env.VITE_MUTANT_CONTRACT_ADDRESS;
  console.log("MAYC Address : ", maycAddress);

  const props = withDefaults(defineProps<Props>(), {
    page: 1,
  });

  async function fetchNfts() {
    try {
      const maycTokens = await store.contractNftSearch(
        maycAddress,
        "ethereum",
        "metadata",
        true,
        12,
        props.page
      );
      if (maycTokens.nfts) {
        store.addMaycTokens(maycTokens.nfts);
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
