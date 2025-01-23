<template>
   <div class='flex items-center justify-between mb-3'>
    <hi class=" text-3xl font-semibold">Prodcucts</hi>
 
    <button class="flex justify-center py-4 px-4 border transparent text-sm font-medium rounded-md text-white bg-indigo-600 ">
        Add product
    </button>
</div>


<div class="bg-white p-4 rounded-lg shadow">

    <div class="flex items-center justify-between">
        <div class="flex items-center">

            <span class="whitespace-nowarp mr-3">per page </span>
            <select @change="getProducts(null)" v-model="perPage" 
            
            class="appearance-none border relative block border-gray-300 rounded-md w-24 py-2 px-3 placeholder-gray-500 text-gray-900 leading-tight focus:ring-indigo-500 focus:outline-none focus:bg-white focus:border-indigo-500 focus:z-10 sm:text-sm">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>

        <div>
            <input  v-model="search" @change="getProducts(null)"
            class=""  placeholder="Type to Search Prodcuts">
            

          
         </div>

        

    </div>

</div>
    
</template>


<script setup>

</script>


<style scoped>



</style>
