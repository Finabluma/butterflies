<template>
  <div class="enlaces">
    <nav id="breadcrumb" aria-label="Breadcrumb">
      <h2 class="sr-only">Breadcrumbs</h2>
      <div>
        <ol class="breadcrumbs" role="list">
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/bitacora">Bitácora</NuxtLink></li>
          <li>
            {{ article.title }}
          </li>
        </ol>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbsArticle',
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.enlaces {
  @apply px-0.5 pt-3
    md:pt-1
    md:pb-2;

  & nav {
    @apply py-3 lg:py-6;

    & ol {
      @apply flex flex-wrap;

      & li {
        @apply lowercase
          leading-6
          text-sm
          font-niti
          flex
          items-center
          content-after;

        &:after {
          @apply bg-gray-600
          dark:bg-gray-400;
        }

        &:last-child::after {
          @apply content-none;
        }

        /* & a {
          @apply content-after;

          &:after {
            @apply block w-full h-0.5;
          }

          &:hover {
            @apply text-opacity-60;

            &:after {
              @apply bg-opacity-60;
            }
          }
        } */
      }
    }
  }
}
</style>
