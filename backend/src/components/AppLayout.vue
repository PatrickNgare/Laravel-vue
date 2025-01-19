<template>
   <div class="flex min-h-full bg-gray-200">

<!-- Sidebar -->
<Sidebar :class="{ '-ml-[200px]':!sidebarOpened }"></Sidebar>
<!-- End Sidebar -->

<div class="flex-1">
  <!-- Header -->
<TopHeader @toggle-sidebar="toggleSidebar"></TopHeader>
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
     import {ref} from 'vue'
    import Sidebar from '@/components/Sidebar.vue';
    import TopHeader from './TopHeader.vue';

    const {title} = defineProps({

        title:String


    })

    const sidebarOpened = ref(true);
    function toggleSidebar(){

        sidebarOpened.value=!sidebarOpened.value
    }

    </script>


    <style scoped>



    </style>
