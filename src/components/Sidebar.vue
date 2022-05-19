<template>
  <div
    v-for="(link, i) in links"
    :key="i"
    class="w-full mt-2 py-2 mb-6"
    :class="{ highlight: selectedLink === `/${link.toLowerCase()}` }"
  >
    <a class="pl-24 py-1 w-full" :href="'/' + link.toLowerCase()">
      {{ link }}</a
    >
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";

export default {
  setup() {
    const state = reactive({
      links: ["About", "Interests", "Learnings", "Blog"],
      selectedLink: null,
    });
    onMounted(() => {
      state.selectedLink = window.location.pathname;
    });

    function selectLink(i) {
      state.selectedLink = i;
    }

    return {
      ...toRefs(state),
      selectLink,
    };
  },
};
</script>

<style scoped>
.highlight {
  @apply bg-primary text-white;
  @apply rounded-r-md;
}
</style>
