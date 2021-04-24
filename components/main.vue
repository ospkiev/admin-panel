<template lang="html">
  <div class="main">
    <b-form
      class="form"
      @submit.prevent="onSubmit"
    >
      <b-form-group
        label="Login"
        label-for="login"
      >
        <b-form-input
          id="login"
          v-model="user.login"
          type="text"
          placeholder="Enter login"
          required
        />
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="user.password"
          placeholder="Enter password"
          type="password"
          required
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
      >
        Enter
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      login: '',
      password: '',
    },
  }),
  computed: {
    login() {
      return 'admin';
    },
    password() {
      return 'admin';
    },
  },
  methods: {
    onSubmit() {
      if (this.user.login === this.login && this.user.password === this.password) {
        this.$router.push('/tabel');
      } else {
        alert('Invalid Login or Password!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
