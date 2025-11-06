<template>
  <div class="min-h-screen flex flex-col justify-center max-w-2xl mx-auto">
    <div class='mb-2 text-right'>
      <button class='cursor-pointer p-2'>
        <Sun class="w-4 h-4" />
      </button>
    </div>
    <NuxtPage />
    <p class='flex justify-center items-center gap-1 text-gray-500 p-2'>
      source •<NuxtLink to="https://github.com/RuddyMo">@RuddyMo</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { Sun } from "lucide-vue-next"

</script>

<style>

</style>