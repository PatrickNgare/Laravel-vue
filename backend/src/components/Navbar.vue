<template>
  <header class="flex items-center justify-between py-4 bg-white shadow hd-25">
    <button @click="$emit('toggle-sidebar')" class="p-4 transition-colors rounded text-grey-700 hover:bg-black/10">
      <Bars3Icon class="w-6" />
    </button>
    <div class="px-4">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton class="flex items-center">
            <img src="https://randomuser.me/api/portraits/men/14.jpg" class="w-8 mr-2 rounded-full" />
            <small>{{currentUser.name}}</small>
            <ChevronDownIcon class="w-5 h-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <UserIcon class="w-5 h-5 mr-2 text-blue-500" aria-hidden="true" />
                  Profile
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  @click="logout"
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  <ArrowRightStartOnRectangleIcon class="w-5 h-5 mr-2 text-blue-500" aria-hidden="true" />
                  Logout
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>

<script setup>
import { Bars3Icon, ChevronDownIcon, UserIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { useRouter } from 'vue-router';
import store from "../store";
import { computed } from 'vue';

const emit = defineEmits(['toggle-sidebar']);
const router = useRouter();
const currentUser=computed(()=>store.state.user.data);

function logout() {
  store
    .dispatch('logout')
    .then(() => {
      router.push({ name: 'login' });
    })
    .catch((error) => {
      console.error("Logout failed:", error);
    });
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
