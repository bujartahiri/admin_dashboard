<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <transition name="slide" mode="out-in">
            <router-view :key="$route.path" />
          </transition>
        </div>

        <Footer />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
export default {
  name: 'Layout',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 250ms, transform 250ms;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-10%);
  }
</style>