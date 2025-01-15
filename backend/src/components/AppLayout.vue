<template>
    <div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <p>part of the layout</p>

          </div>

          <router-view> </router-view>
        </div>

    </template>

    <script setup>

    const {title} = defineProps({

        title:String


    })

    </script>


    <style scoped>



    </style>
