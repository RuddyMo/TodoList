<script setup lang='ts'>
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Fingerprint } from "lucide-vue-next"
</script>

<template>
    <div class=''>
    <Card>
        <CardHeader class='flex flex-row gap-14 justify-between items-center'>
        <div>
            <CardTitle>Todo App</CardTitle>
            <CardDescription class='whitespace-nowrap'>Organize your tasks and boost your productivity.</CardDescription>
        </div>
        <NuxtLink to='/todo'>   
            <Button class='shrink-0 cursor-pointer'>
                <Fingerprint class="w-4 h-4" /> Login with GitHub
            </Button>
        </NuxtLink>
        </CardHeader>
        <CardContent>
            <div class='border-1 rounded-sm p-4'>
                <h4 class='text-base font-semibold pb-3'>Welcome to my Todo List Application</h4>
                <p>This application allows you to manage your tasks <span class='text-green-400'>efficiently</span>.
                Log in with your <a href='https://github.com/' target='_blank' class='text-green-400'>GitHub</a> 
                account to start organizing your tasks and boost your productivity.</p>
            </div>
        </CardContent>
        <CardFooter class="flex justify-between border-t-1 pt-4 text-gray-400">
            <p>No personal informations regarding your GitHub account are stored in database.
            We store only the todos created linked with your GitHub ID.</p>
        </CardFooter>
    </Card>
  </div>
</template>