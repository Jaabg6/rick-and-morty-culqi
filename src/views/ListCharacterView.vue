<script setup>
import Navbar from "@/components/layout/NavbarMain.vue";
import MainContainer from "@/components/layout/MainContainer.vue";
import SearchBar from "@/components/SearchBar.vue";
import CardCharacter from "@/components/CardCharacter.vue";
import { useRoute } from "vue-router";
import { onMounted, toRaw } from "vue";
import { storeToRefs } from "pinia";
import { useCharacterStore } from "@/stores/character";
import { useVerifications_character } from "@/composables/useVerifications.js";

const store = useCharacterStore();
const route = useRoute();
const { actual_character, get_actual_character } = storeToRefs(store);
const { FindAnCharacter } = useVerifications_character();

onMounted(() => {
  const some_charapters = toRaw(get_actual_character.value).length; // get length of actual_character
  if (some_charapters === 0) {
    FindAnCharacter(route.params.name_character);
  }
});
</script>

<template>
  <Navbar />
  <MainContainer>
    <SearchBar />
    <div class="mt-10 grid grid-cols-10 gap-2 w-full h-full md:px-10">
      <transition-group name="bounce" mode="out-in" appear>
        <CardCharacter
          v-for="(character, index) in actual_character"
          :key="index"
          :character="character"
        />
      </transition-group>
    </div>
  </MainContainer>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
