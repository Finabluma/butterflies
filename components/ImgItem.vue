<template>
  <nuxt-picture
    :src="src"
    :alt="alt"
    :sizes="sizes"
    :modifiers="modifiers"
    :fit="fit"
    :height="height"
    loading="lazy"
  />
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: '',
    },
    modifiers: {
      type: Object,
      default: null,
    },
  },
}
</script>
