<template>
  <div class="px-8 flex items-center justify-center gap-8 flex-wrap">
    <img
      v-for="koala in koalas"
      :key="koala"
      :src="koala"
      alt="koala"
      class="h-64 w-64 rounded-md bg-neutral-700 hover:scale-105 transition"
    />
  </div>
</template>

<script setup lang="ts">
const koalaGlobs = await import.meta.glob(
  "../assets/koalas/*.(jpg|png|jpeg|webp|svg)"
);
const koalas = await Promise.all(
  Object.values(koalaGlobs).map(async (koala) => (await koala()).default)
);
</script>
