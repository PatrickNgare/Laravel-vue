<template>
   <div class="min-h-full flex">

<!-- Sidebar -->
<Sidebar></Sidebar>
<!-- End Sidebar -->

<div class="flex-1">
  <!-- Header -->
  <header class="h-8 shadow bg-white">Header</header>
  <!-- End Header -->

  <!-- Content -->
  <main>

    content
    <router-view></router-view>
  </main>
  <!-- End Content -->
</div>

</div>


    </template>

    <script setup>

    import Sidebar from '@/components/Sidebar.vue'

    const {title} = defineProps({

        title:String


    })

    </script>


    <style scoped>



    </style>
