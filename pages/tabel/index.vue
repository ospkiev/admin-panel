<template lang="html">
  <tabel />
</template>

<script>
import tabel from '~/components/tabel.vue';

export default {
  components: {
    tabel,
  },
  async fetch({ store }) {
    await store.dispatch('getmode/fetch');
  },
};
</script>

<style lang="scss" scoped>
</style>
