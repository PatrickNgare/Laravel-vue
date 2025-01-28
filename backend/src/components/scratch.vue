<template>
    <div>
      <!-- v-if Block -->
      <div v-if="currentUser.id" class="flex min-h-full bg-gray-200">
        <!-- Sidebar -->
        <Sidebar :class="{ '-ml-[200px]': !sidebarOpened }"></Sidebar>
        <!-- End Sidebar -->

        <div class="flex-1">
          <!-- Header -->
          <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
          <!-- End Header -->

          <!-- Content -->
          <main class="p-6">
            <router-view></router-view>
          </main>
          <!-- End Content -->
        </div>
      </div>

      <!-- v-else Block -->
      <div v-else class="flex items-center justify-center min-h-screen bg-gray-200">
        <Spinner/>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, computed, onUnmounted } from "vue";
  import Sidebar from "@/components/Sidebar.vue";
  import Navbar from "./Navbar.vue";
  import store from "@/store";
  import Spinner from "@/components/core/Spinner.vue";

  const { title } = defineProps({
    title: String,
  });

  const sidebarOpened = ref(true);

  const currentUser = computed(() => store.state.user.data);

  function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value;
  }

  onMounted(() => {
    store.dispatch("getUser");
    handleSidebarOpened();
    window.addEventListener("resize", handleSidebarOpened);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleSidebarOpened);
  });

  function handleSidebarOpened() {
    sidebarOpened.value = window.outerWidth > 768;
  }
  </script>

  <style scoped></style>
