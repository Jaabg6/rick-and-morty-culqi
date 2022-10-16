<script setup>
import { computed } from 'vue'
const props = defineProps(["character"]);


</script>

<template>
  <div class="col-span-5 grid" id="character_card">
    <div
      class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-primary dark:bg-secondary"
    >
      <img
        class="object-fit rounded-t-lg md:rounded-none md:rounded-l-lg"
        width="300"
        height="300"
        :src="character.image"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal text-white">
        <h5 class="mb-2 text-xl md:text-3xl font-bold tracking-tight">
          {{ character.name }}
        </h5>
        <p id="status" class="mb-3 font-normal flex">
          status: <div :class="character.status === 'Alive' ? 'bg-green-500': '', character.status === 'Dead' ? 'bg-red-500' : 'bg-primary' " class="self-center mx-2 rounded-full  w-[0.5rem] h-[0.5rem] content-none"></div>{{ character.status }}
        </p>
        <p class="mb-3 font-normal">species: {{ character.species }}</p>
        <p class="mb-3 font-normal">
          type: {{ character.type ? character.type : "is secret..." }}
        </p>
      </div>
    </div>
  </div>
</template>
