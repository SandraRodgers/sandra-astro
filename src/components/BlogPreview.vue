<template>
  <article
    :class="computedClassStyles + `post-preview post-${index}`"
    :data-replace="computedDataStyles"
  >
    <header>
      <p class="publish-date">{{ post.frontmatter.publishDate }}</p>
      <a :href="post.url"
        ><h2 class="title">{{ post.frontmatter.title }}</h2></a
      >
    </header>

    <p>{{ post.frontmatter.description }}</p>
    <a :href="post.url">Read more</a>
  </article>
</template>

<script>
import { onMounted, computed } from "vue";

export default {
  props: ["post", "index"],
  setup(props) {
    onMounted(() => {
      // document.addEventListener("DOMContentLoaded", function () {
      // setTimeout(function () {
      var replacers = document.querySelectorAll("[data-replace]");
      console.log(replacers);
      for (var i = 0; i < replacers.length; i++) {
        let replaceClasses = JSON.parse(
          replacers[i].dataset.replace.replace(/'/g, '"')
        );
        Object.keys(replaceClasses).forEach(function (key) {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
      //   }, 1);
      // });
    });
    const computedClassStyles = computed(() => {
      if (props.index === 0) {
        return "scale-50 transition duration-700 translate-y-12 opacity-0 ";
      } else if (props.index === 2) {
        return "-translate-x-1/3 intersect:translate-x-0 transition intersect:opacity-100 opacity-0 ease-out duration-500 ";
      } else {
        `post-preview post-${props.index}`;
      }
    });
    const computedDataStyles = computed(() => {
      if (props.index === 0) {
        return "{ 'translate-y-12': 'translate-y-0', 'opacity-0': 'opacity-100', 'scale-50':'scale-100' }";
      } else {
        return null;
      }
    });
    return { computedClassStyles, computedDataStyles };
  },
};
</script>

<style scoped>
article {
  @apply p-8;
}

.post-preview {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  @apply rounded-sm drop-shadow-lg;

  /* @apply border-b-2 border-tertiary;  */
  /* border-bottom: 4px solid red; */
}

.post-0 {
  @apply bg-secondary text-white;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.post-1 {
  /* grid-column-start: 1;
    grid-column-end: 3; */
  grid-row-start: 3;
  grid-row-end: 6;
  @apply border-2 border-primary;
  @apply mr-8 mt-8;
}

.post-2 {
  @apply bg-tertiary text-white;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
  @apply mt-8;
}

.post-3 {
  @apply bg-success text-white;
  @apply mr-8;
  /* grid-column-start: 3;
    grid-column-end: 5; */
  /* grid-row-start: 5;
    grid-row-end: 6; */
}

.post-4 {
  @apply border-2 border-success;

  /* @apply mr-8; */
  /* grid-row-start: 5;
    grid-row-end: 7; */
}
.post-5 {
  @apply border-2 border-primary;
  grid-column-start: 1;
  grid-column-end: 3;
  @apply mr-8;
}

.post-6 {
  @apply border-2 border-primary;
}

header {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: left;
}

.title,
.author,
.publish-date {
  margin: 0;
}

.publish-date,
.author {
  font-size: 1.25rem;
  color: var(--theme-text-lighter);
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--theme-text);
}
</style>
