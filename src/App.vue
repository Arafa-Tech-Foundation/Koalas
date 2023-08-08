<template>
  <div class="min-h-screen w-screen bg-neutral-500">
    <Navbar />
    <Suspense>
      <KoalaProvider />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import KoalaProvider from "./components/KoalaProvider.vue";
import Navbar from "./components/Navbar.vue";
</script>
