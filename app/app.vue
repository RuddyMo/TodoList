<template>
  <div class="min-h-screen flex flex-col justify-center max-w-2xl mx-auto">
    <div class="mb-2 text-right">
      <button class="cursor-pointer p-2">
        <Sun
          v-if="colorMode.value === 'light'"
          @click="colorMode.preference = 'dark'"
          class="w-4 h-4"
        />
        <Moon
          v-if="colorMode.value === 'dark'"
          @click="colorMode.preference = 'light'"
          class="w-4 h-4"
        />
      </button>
    </div>
    <Card>
      <CardHeader class="flex flex-row justify-between items-center border-b">
        <div>
          <CardTitle>Todo App</CardTitle>
          <CardDescription class="whitespace-nowrap"
            >Organize your tasks and boost your productivity.</CardDescription
          >
        </div>
        <div v-if="!loggedIn">
          <a href="/auth/github">
            <Button class="shrink-0 cursor-pointer">
              <Fingerprint class="w-4 h-4" /> Login with GitHub
            </Button>
          </a>
        </div>
        <div v-else class="flex flex-wrap -mx-2 sm:mx-0">
          <DropdownMenu v-if="user">
            <DropdownMenuTrigger as-child>
              <Button>
                <Avatar
                  ><AvatarImage
                    :src="`https://github.com/${user.login}.png`"
                    :alt="user.login"
                    size="3xl"
                  /><AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {{ user.login }}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="clear">
                <LogOutIcon class="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <NuxtPage />
    </Card>
    <p class="flex justify-center items-center gap-1 text-gray-500 p-2">
      source •<NuxtLink to="https://github.com/RuddyMo">@RuddyMo</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { Sun, Moon, LogOutIcon } from 'lucide-vue-next';
import { Fingerprint } from 'lucide-vue-next';
import type { User } from '../types/auth';

const { loggedIn, user, clear } = useUserSession() as {
  loggedIn: Ref<boolean>;
  user: Ref<User | null>;
  clear: () => void;
};

const items = [
  {
    title: 'Logout',
    icon: 'i-lucide-log-out',
    onSelect: clear,
  },
];

const colorMode = useColorMode();
</script>
