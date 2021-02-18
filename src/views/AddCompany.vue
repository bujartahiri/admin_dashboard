<template>
  <div class="bg-gray-100 flex flex-col justify-center">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div class="h-14 w-14 bg-blue-300 shadow-lg rounded-full flex flex-shrink-0 justify-center items-center  text-2xl font-mono">B</div>
          <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Add company</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Company name</label>
              <input v-model="name" required type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title">
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Company email</label>
              <input v-model="email" type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional">
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Logo</label>
              <input v-model="logo" type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional">
            </div>

            <div class="flex flex-col">
              <label class="leading-loose">Website</label>
              <input v-model="website" type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional">
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button @click="createCompany" class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'AddCompany',
    data() {
      return {
        name: null,
        email: null,
        logo: null,
        website: null
      }
    },
    methods: {
      createCompany() {
        this.$store.dispatch('CREATE_COMPANY',
          {
            name: this.name,
            email: this.email,
            logo: this.logo,
            website: this.website
          }
        )
          .then(() => {
            this.$swal({
              title: 'Company added.',
              icon: 'success'
            })
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>