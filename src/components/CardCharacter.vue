<script setup>
import { computed } from 'vue'
const props = defineProps(["character"]);


</script>

<template>
  <div class="col-span-10 px-10 lg:col-span-5 grid" id="character_card">
    <div
      class="flex flex-col sm:items-center rounded-lg border shadow-md sm:flex-row  dark:border-primary dark:bg-secondary"
    >
      <img
        class=" object-cover object-center w-full h-60 sm:w-40 sm:h-full  rounded-t-lg md:rounded-none md:rounded-l-lg"
        :src="character.image"
        :alt="character.name + ' image'"
      />
      <div class="flex flex-col mx-2 sm:mx-0  justify-start sm:pl-4 leading-normal text-white">
        <h5 class="mb-2 text-xl md:text-3xl font-bold tracking-tight">
          {{ character.name }}
        </h5>
        <p id="status" class="mb-3 text-medium flex">
          <div :class="character.status === 'Alive' ? 'bg-green-500': '', character.status === 'Dead' ? 'bg-red-500' : 'bg-primary' " class="self-center mr-2 rounded-full  w-[0.5rem] h-[0.5rem] content-none"></div>{{ character.status }} - {{ character.species }}
        </p>
        <p class="mb-3 text-sm text-gray-400">Last Know Location: <span class="text-white">{{ character.location.name }}</span></p>
        <p class="mb-3 text-sm text-gray-400">First seen in: <span class="text-white">{{ character.origin.name }}</span></p>
        <p class="mb-3 text-sm text-gray-400">
          type: <span class="text-white">{{ character.type ? character.type : "is secret..." }}</span>
        </p>


      </div>
    </div>
  </div>
</template>
