<template>

        <GuestLayout title="Set new password">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="new-password" class="block font-medium text-gray-900 text-sm/6">New Password</label>
            <div class="mt-2">

              <input type="new-password" name="password" id="password" placeholder="New Password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>

          </div>
          <div class="text-sm">
                <router-link :to="{name:'login'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Go back home</router-link>
              </div>

          <label for="password-repeat" class="block font-medium text-gray-900 text-sm/6">Re-enter Password</label>
          <div class="mt-2">
              <input type="password-repeat" name="password-repeat" id="password"  placeholder="Re-enter Password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Password</button>
          </div>
        </form>
    </GuestLayout>


  </template>




  <script setup>
import GuestLayout from '../components/GuestLayout.vue';

  </script>


  <style scoped>



  </style>
