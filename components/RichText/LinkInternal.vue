<template>
  <LinkButton
    v-if="linkButton"
    type="internal"
    :path="toPath"
    variant="secondary"
    size="small"
  >
    <slot />
  </LinkButton>
  <NuxtLink v-else :to="toPath">
    <slot />
  </NuxtLink>
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'
export default {
  name: 'LinkInternal',
  components: {
    LinkButton,
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
    dataType: {
      type: String,
      default: '',
    },
    linkButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    toPath() {
      if (this.dataType === 'page') {
        return this.slug === 'index' ? '/' : `/${this.slug}`
      } else if (this.dataType === 'article') {
        return `/prensa/${this.slug}`
      } else {
        return this.slug
      }
    },
  },
}
</script>
