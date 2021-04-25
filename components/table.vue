<template lang="html">
  <v-container>
    <h4>TABLE</h4>
    <v-layout>
      <v-data-table
        :headers="headers"
        :items="paginationTable"
        hide-actions
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>
            <img
              :src="props.item.Icon"
              width="50px"
              alt="image"
            >
          </td>
          <td>
            {{ props.item.Campaign }}
          </td>
          <td>
            {{ props.item.Level }}
          </td>
          <td>
            <ul>
              <li
                v-for="(item, index) in props.item.Loot"
                :key="index"
              >
                {{ item.ID }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li
                v-for="(item, index) in props.item.Loot"
                :key="index"
              >
                {{ item.SubID }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li
                v-for="(item, index) in props.item.Loot"
                :key="index"
              >
                {{ item.Count }}
              </li>
            </ul>
          </td>
          <td>
            <v-btn
              color="blue darken-1"
            >
              Delete
            </v-btn>
          </td>
        </template>
      </v-data-table>
      <v-flex xs12>
        <v-pagination
          v-model="pagination.page"
          circle
          total-visible="10"
          :length="pages"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import headers from '~/constants/table-headers.js';

export default {
  name: 'TableComponent',
  data: () => ({
    pagination: {
      descending: true,
      page: 1,
    },
    limit: 10,
    dialog: false,
  }),
  computed: {
    ...mapState({
      table: state => state.table.table,
    }),
    total() {
      return this.table.length;
    },
    pages() {
      return Math.ceil(this.total / this.limit);
    },
    headers() {
      return headers.table;
    },
    paginationTable() {
      return this.table.slice((this.page * this.limit), (this.page * this.limit) + this.limit);
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: block;
  ul {
    list-style: none;
  }
}
</style>
