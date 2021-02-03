<template>
  <div class="login-container bg-blue-200">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 class="text-3xl font-semibold text-center pb-8">Login</h1>
      <div class="mb-4">
        <label class="block text-grey-darker font-bold mb-2" for="Email">
          Email
        </label>
        <input v-model="email" class="shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text"
          placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker  font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" class="shadow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password" type="password" placeholder="********" @keyup.enter="login">
      </div>
      <div class="flex items-center justify-between">
        <button @click="login"  class="bg-blue-500 hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        email: 'admin@admin.com',
        password: 'admin123'
      }
    },
    methods: {
      login() {
        this.$store.dispatch('AUTH_REQUEST', { email: this.email, password: this.password })
          .then(() => this.$router.push({name: 'Home'}))
      }
    }
  }
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>