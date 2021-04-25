import urls from '~/constants/urls.js';
import key from '~/constants/key.js';

export const state = () => ({
  table: [],
});

export const mutations = {
  SET_TABLE(state, data) {
    state.table = data;
  },
};
export const actions = {
  async fetch({ commit }) {
    try {
      const { data } = await this.$axios.post(`${urls.getData}/table?Key=${key.key}`);
      commit('SET_TABLE', data.Data);
      return false;
    } catch (error) {
      return error;
    }
  },
};
