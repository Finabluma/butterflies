<template>
  <section v-if="pageSection.disabled !== true" class="note-section">
    <div class="note-section__inner">
      <h1 v-if="pageSection.heading">
        {{ pageSection.heading }}
      </h1>
      <p>{{ pageSection.obs }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NoteSection',
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.note-section {
  @apply pt-10
  pb-2
  sm:pb-7;

  & .note-section__inner {
    @apply w-10/12
    mx-auto
    md:w-8/12
    lg:w-7/12
    lg:px-2
    xl:w-7/12
    2xl:w-5/12;

    & h1 {
      @apply text-sm
      font-darkmode
      font-medium;
    }

    & p {
      @apply text-base
      font-niti
      text-center;
    }
  }
}
</style>
