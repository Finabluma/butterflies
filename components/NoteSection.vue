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
  @apply bg-gray-300
  dark:bg-gray-600;

  & .note-section__inner {
    @apply w-10/12
      md:w-9/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12
      mx-auto
      content-after
      content-before
      py-7;

    &:before {
      @apply mb-7;
    }

    &:after {
      @apply mt-7;
    }

    &:after,
    &:before {
      @apply block
      h-0.5
      w-1/12
      rounded-full
      bg-current;
    }

    & h1 {
      @apply hidden;
    }

    & p {
      @apply text-base
      font-niti;
    }
  }
}
</style>
