<template>


      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="mt-8 space-y-6"  method="POST"  @submit.prevent="login">
          <div>
            <label for="email" class="block font-medium text-gray-900 text-sm/6">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required="" v-model="user.email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block font-medium text-gray-900 text-sm/6">Password</label>
              <div class="text-sm">
                <router-link :to="{name:'requestPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
              </div>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required="" v-model="user.password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"
                 class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p class="mt-10 text-center text-gray-500 text-sm/6">
          Not a registered?
          {{ ' ' }}
          <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Sign up</a>
        </p>
      </div>

  </template>



<script setup>
import { ref } from 'vue';
import GuestLayout from '../components/GuestLayout.vue';
import store from '../store';

let loading = ref(false);
let errMsg = ref("");

const user={
    email:'',
    password:'',
    rememeber:false
}
function login(){
  loading.value=true
  store.dispatch('login',user)
}

</script>


<style scoped>



</style>
