<template lang="html">
  <tabel />
</template>

<script>
import tabel from '~/components/table.vue';

export default {
  components: {
    tabel,
  },
  async fetch({ store }) {
    await store.dispatch('table/fetch');
  },
};
</script>

<style lang="scss" scoped>
</style>
