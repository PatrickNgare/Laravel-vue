<template>
    
<div class="w-[200px] bg-blue-700 text-gray-300 py-4 px-2  ">

    <router-link :to="{name:'app.dashboard'}"  class="flex items-center py-1 px-2 transition-colors rounded hover:bg-black/30">

        <span class="mr-2"> <HomeIcon class="w-5 h-5" /> </span>

        <span class="text-sm font-light">Dashboard </span>
    </router-link>
    
 
</div>
</template>
    
    <script setup>

import { HomeIcon } from '@heroicons/vue/24/outline';  
    
    </script>
    
    
    <style scoped>
    
    
    
    </style>
    