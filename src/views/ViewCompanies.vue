<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Companies</h1>
    <table class="border-collapse w-full">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Company name</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">email</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Logo</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Website</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
				ghome
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                Switzerland
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" @click="showModal = true" class="mr-4 bg-transparent hover:bg-blue-400 text-blue-600 font-semibold hover:text-white px-4 border border-blue-400 hover:border-transparent rounded">Edit</a>
                <a href="#" class="hover:bg-red-400 text-red-600 font-semibold hover:text-white px-4 border border-red-400 hover:border-transparent rounded">Remove</a>
            </td>
        </tr>
        
        </tbody>
    </table>

    <modal v-if="showModal" @close="showModal = false">
       <template v-slot:header>
          <h3 class="text-xl">test header</h3>
       </template>
       <template v-slot:body>
          <h3 class="text-xl">test body</h3>
       </template>
       <template v-slot:footer>
          <div class="flex justify-end">
            <button class="mr-4 bg-transparent hover:bg-blue-400 text-blue-600 font-semibold hover:text-white px-4 border border-blue-400 hover:border-transparent rounded" @click="showModal = false">ok</button>
            <button class="hover:bg-red-400 text-red-600 font-semibold hover:text-white px-4 border border-red-400 hover:border-transparent rounded" @click="showModal = false">cancel</button>
          </div>
       </template>
    </modal>
  </div>
</template>

<script>

  export default {
    name: 'ViewCompanies',
		data() {
      return {
        showModal: true
      }
    },
		methods: {
		}
	};
</script>

<style scoped>

</style>