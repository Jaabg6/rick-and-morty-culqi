<script setup>
const props = defineProps(["color", "title", "text"]);
</script>
<template>
  <!-- TODO: use this component with custom color, now is hardcoded because post css dont recognize :class and red color is not in use -->
  <div
    :class="color ? 'bg-' + color + '-200 text-' + color + '-800' : ''"
    class=" p-4 mb-4 text-sm rounded-lg"
    role="alert"
  >
    <span class="font-medium">{{ title }}</span> {{ text }}
  </div>
</template>

<style>
/* if color doest work */
.bg-red-200{
    --tw-bg-opacity: 1;
background-color: rgba(254, 202, 202, var(--tw-bg-opacity));	

}
.bg-red-800{
    --tw-bg-opacity: 1;
background-color: rgba(153, 27, 27, var(--tw-bg-opacity));
}
</style>
