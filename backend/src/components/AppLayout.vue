<template>
   <div class="flex min-h-full">

<!-- Sidebar -->
<Sidebar></Sidebar>
<!-- End Sidebar -->

<div class="flex-1">
  <!-- Header -->
<TopHeader></TopHeader>
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

    import Sidebar from '@/components/Sidebar.vue';
    import TopHeader from './TopHeader.vue';

    const {title} = defineProps({

        title:String


    })

    </script>


    <style scoped>



    </style>
