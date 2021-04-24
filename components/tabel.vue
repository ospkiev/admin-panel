<template lang="html">
  <b-container
    fluid
  >
    <h2>table</h2>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
    />
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    items: [],
    fields: [],
  }),
  computed: {
    ...mapState({
      winners: state => state.winners.winners,
    }),
  },
  methods: {
    ...mapActions({
      add: 'winners/add',
    }),
  },
};
</script>

<style lang="scss" scoped>

* {
padding: 0;
margin: 0;
}

ul {
  list-style: none;;
}

.input_wrapper {
  padding: 30px 10px 10px;
}

.name {
  min-height: 40px;
  p:last-child {
    color: red;
    font-weight: 700;
  }
}

.main {
  height: 70%;
  width: 70%;
  margin: 0 auto;
}

.button {
  background-color: #1B3950;
  color: #ffffff;
  position: relative;
  text-transform: uppercase;
  min-width: max-content;
  padding: 0 10px;
  &.rules__btn {
    margin: 0 10px;
  }
}

.play {
  width: 33%;
  background-color: #1B3950;
}

.winners {
  width: max-content;
  height: 400px;
  overflow-y: scroll;
  padding: 0 10px;
}

.cell {
  border: .1px solid #222;
  transition: 0.3s ease-in-out;
  &_row {
    transition: 0.3s ease-in-out;
  }
}

.field {
  width: 100%;
  height: 100%;
  min-height: 280px;
  background-color: #85D6CE;
}

.active {
  left: 0;
}

.computer_cell {
  background-color: red;
}

.catch_cell {
  background-color: blue;
}

.date {
  width: max-content;
}

.your__game {
  color: red;
  font-weight: 700;
  animation: result 0.5s ease 15;
}

@keyframes result {
  0% {
    color: #222;
  }
  50% {
    color: red;
    font-weight: 900;
    text-shadow: 3px 5px 9px red;
  }
  100% {
    color: #222;
  }
}
</style>
