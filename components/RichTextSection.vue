<template>
  <section v-if="pageSection.disabled !== true" class="rich-text-section">
    <div class="text-section__inner">
      <h1 v-if="pageSection.heading">
        {{ pageSection.heading }}
      </h1>
      <RichText
        v-if="pageSection.mainContent.length"
        :content="pageSection.mainContent"
      />
    </div>
  </section>
</template>

<script>
import RichText from '~/components/RichText.vue'
export default {
  name: 'RichTextSection',
  components: {
    RichText,
  },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.rich-text-section {
  @apply min-h-screen
  bg-gray-300
  dark:bg-gray-600
  flex
  justify-center
  items-center
  flex-col
  pt-10
  pb-20;

  & .text-section__inner {
    @apply w-10/12
    mx-auto
    sm:w-9/12
    lg:w-6/12
    lg:px-2
    xl:w-7/12
    2xl:w-5/12;
  }

  & h1 {
    @apply leading-tight
    capitalize
    font-niti
    text-2xl
    lg:text-3xl;
  }
}
</style>
