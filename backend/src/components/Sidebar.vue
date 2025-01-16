<template>

<div class="flex flex-col w-64 h-screen text-white bg-indigo-500">
    <!-- Header -->
    <div class="flex items-center justify-center h-16 border-b border-blue-500">
      <h1 class="text-2xl font-semibold">Dashboard</h1>
    </div>

    <!-- Navigation Menu -->
    <nav class="flex-1 p-4 space-y-2">
      <ul>
        <li>
          <router-link
        :to="{ name: 'app.dashboard' }"
            class="flex items-center p-2 rounded hover:bg-blue-500"
          >
            <HomeIcon class="w-5 h-5" />
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
        :to="{ name: 'app.products' }"
            class="flex items-center p-2 rounded hover:bg-blue-500"
          >
            <FolderIcon class="w-5 h-5" />
            <span class="ml-3">Products</span>
          </router-link>
        </li>
        <li>
         <router-link
        :to="{ name: 'app.users' }"
            class="flex items-center p-2 rounded hover:bg-blue-500"
          >
            <UserGroupIcon class="w-5 h-5" />
            <span class="ml-3">Users</span>
         </router-link>
        </li>
        <li>
           <router-link
        :to="{ name: 'app.reports' }"
            class="flex items-center p-2 rounded hover:bg-blue-500"
          >
            <ChartBarIcon  class="w-5 h-5" />
            <span class="ml-3">Reports</span>
           </router-link>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-blue-500">
      <a href="#" class="flex items-center p-2 rounded hover:bg-blue-500">
        <CogIcon class="w-5 h-5" />
        <span class="ml-3">Settings</span>
      </a>
    </div>
  </div>
</template>

    <script setup>

import { HomeIcon,UserGroupIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  CogIcon, } from '@heroicons/vue/24/outline';

    </script>


    <style scoped>



    </style>
