<template>
  <div class="bg-blue-100">
    <div class="container mx-auto h-screen">
    <div class="login">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="Email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email"
            type="text" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-600 hover:bg-blue-light text-white font-semibold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 300px;
  }
</style>