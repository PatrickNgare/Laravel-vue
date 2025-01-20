<template>
   <div class="flex min-h-full bg-gray-200">

<!-- Sidebar -->
<Sidebar :class="{ '-ml-[200px]':!sidebarOpened }"></Sidebar>
<!-- End Sidebar -->

<div class="flex-1">
  <!-- Header -->
<Navbar @toggle-sidebar="toggleSidebar"></Navbar>
  <!-- End Header -->

  <!-- Content -->
  <main class="p-6">


        <router-view></router-view>


  </main>
  <!-- End Content -->
</div>

</div>


    </template>

    <script setup>
     import {ref,onMounted,onUnmounted} from 'vue'
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from './Navbar.vue';

    const {title} = defineProps({

        title:String


    })

    const sidebarOpened = ref(true);
    function toggleSidebar(){

        sidebarOpened.value=!sidebarOpened.value
    }

 onMounted(() =>{

    handleSidebarOpened();
    window.addEventListener('resize',handleSidebarOpened)
    
 })

 onUnmounted(() =>{

window.removeEventListener('resize',handleSidebarOpened)

})
function handleSidebarOpened(){
    sidebarOpened.value = window.outerWidth > 768;
    
}
    
    </script>


    <style scoped>



    </style>
