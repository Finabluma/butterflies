<template>
  <div class="rich-text">
    <SanityContent :blocks="content" :serializers="serializers" />
  </div>
</template>

<script>
import ImageBlock from '~/components/RichText/ImageBlock'
import LinkInternal from '~/components/RichText/LinkInternal'
import LinkExternal from '~/components/RichText/LinkExternal'
import YouTubeBlock from '~/components/RichText/YouTubeBlock'
import VimeoBlock from '~/components/RichText/VimeoBlock'

export default {
  name: 'RichText',
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          imageBlock: ImageBlock,
          youtubeBlock: YouTubeBlock,
          vimeoBlock: VimeoBlock,
        },
        marks: {
          internalLink: LinkInternal,
          link: LinkExternal,
        },
      },
    }
  },
}
</script>
<style lang="postcss" scoped>
.rich-text {
  @apply font-darkmode
  text-base
  leading-relaxed
  break-words
  lg:text-lg;

  & p,
  & ul,
  & ol,
  & blockquote,
  & figure {
    @apply mb-6;

    &:last-child {
      @apply mb-0;
    }
  }

  & h2 {
    @apply text-5xl
    mb-8;
  }

  & h3 {
    @apply text-4xl
    mb-8;
  }

  & h4 {
    @apply text-3xl
    mb-8;
  }

  & blockquote {
    @apply pl-5
    border-l-8
    border-gray-400
    dark:border-gray-500
    text-xl
    leading-snug
    italic
    md:pl-7;
  }

  & a {
    @apply inline-block
    p-0
    mr-0
    w-auto
    font-darkmode
    bg-gray-700
    text-gray-400
    rounded-none
    text-base
    lg:text-lg;
  }
}
</style>
