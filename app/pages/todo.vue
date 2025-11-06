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
            <Input id="add" type="text" placeholder="Add a new task" />
            <Button size="icon" class='cursor-pointer'>
                <Plus class="w-4 h-4" />
            </Button>
        </div>
        <ul class='mt-4 space-y-2'>
            <li class='flex items-center justify-between p-2 border rounded'>
            <span>Sample Task 1</span>
            <Button size="icon" variant="ghost">X</Button>
            </li>
        </ul>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-vue-next';
</script>
