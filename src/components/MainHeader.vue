<script setup>
import AlertCustom from "@/components/AlertCustom.vue";
import { useVerifications_character } from "@/composables/useVerifications.js";

let { FindAnCharacter, character_to_find, error } =
  useVerifications_character();
</script>

<template>
  <div class="h-screen w-screen bg-primarry grid justify-center items-center">
    <div>
      <img
        src="https://wallpaperaccess.com/full/2880737.png"
        class="md:max-w-lg mx-auto"
        alt="Rick and Morty Image"
      />
      <form class="mt-20" @submit.prevent="FindAnCharacter(character_to_find)">
        <AlertCustom
          v-if="error.active"
          color="red"
          title="Ops... We do not find the character in this universe"
          :text="error.message"
        />
        <label
          for="search-character-input"
          class="mb-2 text-sm font-medium sr-only text-text-primary"
          >Search
        </label>
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <input
            type="search"
            id="search-character-input"
            v-model="character_to_find"
            class="rounded block p-4 pl-10 w-full text-sm md:text-lg bg-primary_light border-gray-600 text-white placeholder-white"
            placeholder="Search by name
                        "
            required=""
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-secondary hover:bg-secondary_light"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
