<template>
  <div v-for="(link, i) in links" :key="i" class="w-4/6 my-2">
    <div
      :class="{ highlight: selectedLink === `/${link.toLowerCase()}` }"
      class="pl-8 py-1"
    >
      <a :href="'/' + link.toLowerCase()"> {{ link }}</a>
    </div>
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
