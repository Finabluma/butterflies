<template>
  <div class="meta-info">
    <ul>
      <li>
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name">ofm</span>
        </span>
      </li>
      <li>
        <time
          v-if="article.publishedAt"
          :datetime="article.publishedAt | htmlDate"
          itemprop="dateCreated pubdate datePublished"
        >
          {{ article.publishedAt | readableDate }}
        </time>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleDateAndAuthor',
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.meta-info {
  & ul {
    @apply text-xs
    font-niti
    flex
    justify-start
    mt-1
    lg:text-sm;

    & li {
      @apply border-b-0 mb-0;

      &:first-child {
        @apply content-after flex items-center;
      }
    }
  }
}
</style>
