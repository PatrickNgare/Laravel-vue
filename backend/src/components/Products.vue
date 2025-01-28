<template>
   <div class='flex items-center justify-between mb-3'>
    <hi class=" text-3xl font-semibold">Products</hi>

    <button class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
        Add product
    </button>
</div>


<div class="bg-white p-4 rounded-lg shadow animate-fade-in-down">

    <div class="flex justify-between border-b-2 pb-3">
        <div class="flex items-center">

            <span class="whitespace-nowarp mr-3">per page </span>
            <select @change="getProducts(null)" v-model="perPage"

            class="appearance-none relative block w-24 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>

        <div>
            <input v-model="search" @change="getProducts(null)"
               class="appearance-none relative block w-48 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Type to Search products">



         </div>



    </div>

</div>

</template>


<script setup>

</script>


<style scoped>



</style>
