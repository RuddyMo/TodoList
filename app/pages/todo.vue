<template>
    <div class='w-full max-w-2xl mx-auto'>
    <Card class='p-6'>
        <CardHeader class='flex flex-row justify-between items-center p-0'>
        <CardTitle>Todo List</CardTitle>
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </CardHeader>
        <div class='flex items-center gap-2'>
            <Input v-model='task' id="add" type="text" placeholder="Add a new task" />
            <Button @click='addTask' size="icon" class='cursor-pointer'>
                <Plus class="w-4 h-4" />
            </Button>
        </div>
        <ul class='divide-y divide-gray-200 dark:divide-gray-800'>
            <li v-for="(task, i) in taskList" :key="i" class='flex items-center justify-between py-2'>
            <span class="flex-1 font-medium" :class="[task.completed ? 'line-through text-gray-500' : '']">
                {{ task.title }}
            </span>
            <div class='flex justify-center items-center gap-5'>
                <Switch v-model="task.completed"/>
                <button size="icon" class='p-1 h-6 w-6 text-red-500 bg-red-100 hover:bg-red-200 hover:text-red-500 cursor-pointer rounded-sm flex justify-center items-center' @click="removeTask(i)">
                    <X class="w-3 h-3" />
                </button>
            </div>
            </li>
        </ul>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Plus, X } from 'lucide-vue-next';

type Task = {
    id: number
    title: string;
    completed: boolean;
}

const task = ref<string>("")
const taskList = ref<Task[]>([])

const addTask = () => {
    if (task.value.trim() === "") return
    taskList.value.push({
        id: Date.now(),
        title: task.value,
        completed: false
    })
    task.value = ""
    console.log("Task added")
}
const removeTask = (index: number) => {
    taskList.value.splice(index, 1)
}
</script>
