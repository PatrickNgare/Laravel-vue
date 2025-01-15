<template>

    <div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">Set New Password</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

      </div>
    </div>

  </template>


  <script>

  </script>


  <style scoped>



  </style>
