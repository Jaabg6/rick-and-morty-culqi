<script setup>
import { ref } from "vue";
import AlertCustom from "@/components/AlertCustom.vue";
import { useVerifications_character } from "@/composables/useVerifications.js";

//data
let dropdown_open = ref(false);
let status = ["Alive", "Dead", "unknown"];
let toggle_dropdown = () => (dropdown_open.value = !dropdown_open.value);

//composables
let { FindAnCharacter, character_to_find, store, error } =
  useVerifications_character();

// fuctions
function status_filter(stat) {
  store.filterCharactersBy(stat);
}
</script>

<template>
  <div class="pt-20 md:pt-24 px-2 md:pl-10">
    <form
      @submit.prevent="FindAnCharacter(character_to_find)"
      class="w-full md:w-[60%] flex flex-col"
    >
      <AlertCustom
        v-if="error.active"
        color="red"
        title="Ops... We do not find the character in this universe"
        :text="error.message"
      />
      <div class="flex gap-5">
        <div class="relative w-full">
          <input
            v-model="character_to_find"
            type="search"
            id="search"
            class="block p-2.5 w-full text-sm rounded-lg bg-primary_light border-transparent focus:border-transparent focus:ring-0 placeholder-gray-400 text-white"
            placeholder="Search character by name"
            required=""
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg focus:ring-4 focus:outline-none bg-secondary hover:bg-secondary_light"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
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
            <span class="sr-only">Search</span>
          </button>
        </div>
        <label
          for="location-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >Your Email</label
        >
        <button
          id="dropdown-button"
          @click="toggle_dropdown"
          class="relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-primary_light dark:hover:bg-gray-600 dark:focus:ring-primary_light dark:text-white dark:border-gray-600"
          type="button"
        >
          STATUS
          <svg
            aria-hidden="true"
            class="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <div
            id="dropdown-status"
            v-if="dropdown_open"
            class="absolute top-full right-0 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-primary_light"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
          >
            <ul
              class="py-1 text-sm text-primary_light dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li v-for="(stat, index) in status" :key="index">
                <button
                  @click="status_filter(stat)"
                  type="button"
                  class="inline-flex py-2 px-4 w-full text-sm text-primary_light hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    {{ stat }}
                    <div :class="stat === 'Alive' ? 'bg-green-500': '', stat === 'Dead' ? 'bg-red-500' : 'bg-primary' " class="self-center mx-2 rounded-full  w-[0.5rem] h-[0.5rem] content-none"></div>

                  </div>
                </button>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<style>
/* if post css dont load dynamicly the color */
.bg-green-500{
    --tw-bg-opacity: 1;
background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
}
</style>