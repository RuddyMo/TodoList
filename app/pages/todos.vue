<template>
  <div class="px-6 space-y-4">
    <div class="flex items-center gap-2">
      <Input v-model="task" id="add" type="text" placeholder="Add a new task" />
      <Button @click="addTask" size="icon" class="cursor-pointer">
        <Plus class="w-4 h-4" />
      </Button>
    </div>
    <ul class="divide-y divide-gray-200 dark:divide-gray-800">
      <li
        v-for="(task, i) in taskList"
        :key="i"
        class="flex items-center justify-between py-2"
      >
        <span
          class="flex-1 font-medium"
          :class="[task.completed ? 'line-through text-gray-500' : '']"
        >
          {{ task.title }}
        </span>
        <div class="flex justify-center items-center gap-5">
          <Switch @update:model-value="(value) => taskCompleted(i, value)" />
          <button
            size="icon"
            class="p-1 h-6 w-6 text-red-500 bg-red-100 hover:bg-red-200 hover:text-red-500 cursor-pointer rounded-sm flex justify-center items-center"
            @click="removeTask(i)"
          >
            <X class="w-3 h-3" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next';

definePageMeta({
  middleware: 'auth',
});

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const { user } = useUserSession();

const task = ref<string>('');
const taskList = ref<Task[]>([]);
const { $supabase } = useNuxtApp();

const fetchTasks = async () => {
  const { data, error } = await $supabase.from('todos').select('*');

  if (error) {
    console.error('Erreur de récupération:', error.message);
    return;
  }

  taskList.value = data.map((t: any) => ({
    id: t.id,
    title: t.title,
    completed: t.completed,
  }));
};

const addTask = async () => {
  if (task.value.trim() === '') return;

  const newTask = {
    title: task.value,
    completed: false,
  };

  const { data, error } = await $supabase
    .from('todos')
    .insert(newTask)
    .select();

  if (error) {
    console.error('Erreur Supabase:', error.message);
    return;
  }

  if (data && data.length > 0) {
    taskList.value.push({
      id: data[0].id,
      title: data[0].title,
      completed: data[0].completed,
    });
  }
  task.value = '';
  console.log('Tâche ajoutée dans Supabase ✅');
};
const removeTask = (index: number) => {
  const taskId = taskList.value[index]?.id;
  if (taskId) {
    $supabase
      .from('todos')
      .delete()
      .eq('id', taskId)
      .then(({ error }) => {
        if (error) {
          console.error('Erreur de suppression:', error.message);
        } else {
          taskList.value.splice(index, 1);
          console.log('Tâche supprimée de Supabase ✅');
        }
      });
  }
};

const taskCompleted = (index: number, completed: boolean) => {
  const taskId = taskList.value[index]?.id;
  if (taskId) {
    $supabase
      .from('todos')
      .update({ completed })
      .eq('id', taskId)
      .then(({ error }) => {
        if (error) {
          console.error('Erreur lors de la mise à jour:', error.message);
        } else {
          if (taskList.value[index]) {
            taskList.value[index].completed = completed;
          }
          console.log('Tâche compléter de Supabase ✅');
        }
      });
  }
};

onMounted(() => {
  fetchTasks();
});
</script>
