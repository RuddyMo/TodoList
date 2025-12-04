<script setup lang="ts"></script>

<template>
  <CardContent>
    <div class="border-1 rounded-sm p-4">
      <h4 class="text-base font-semibold pb-3">
        Welcome to my Todo List Application
      </h4>
      <p>
        This application allows you to manage your tasks
        <span class="text-green-400">efficiently</span>. Log in with your
        <a href="https://github.com/" target="_blank" class="text-green-400"
          >GitHub</a
        >
        account to start organizing your tasks and boost your productivity.
      </p>
    </div>
  </CardContent>
  <CardFooter class="flex justify-between border-t-1 pt-4 text-gray-400">
    <p>
      No personal informations regarding your GitHub account are stored in
      database. We store only the todos created linked with your GitHub ID.
    </p>
  </CardFooter>
</template>
