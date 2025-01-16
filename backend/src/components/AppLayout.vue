<template>
   <div class="flex min-h-full bg-gray-200">

<!-- Sidebar -->
<Sidebar></Sidebar>
<!-- End Sidebar -->

<div class="flex-1">
  <!-- Header -->
<TopHeader></TopHeader>
  <!-- End Header -->

  <!-- Content -->
  <main class="p-6">


        <router-view></router-view>
        content

  </main>
  <!-- End Content -->
</div>

</div>


    </template>

    <script setup>

    import Sidebar from '@/components/Sidebar.vue';
    import TopHeader from './TopHeader.vue';

    const {title} = defineProps({

        title:String


    })

    </script>


    <style scoped>



    </style>
