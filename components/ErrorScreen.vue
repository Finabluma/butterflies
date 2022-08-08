<template>
  <div id="error">
    <main>
      <div class="content">
        <div>
          <h1>404</h1>
          <span># {{ page.title }} #</span>
        </div>
      </div>
      <aside>
        <p>
          <LinkButton type="internal" path="/" variant="tertiary"
            >Vuelve a la página inicial</LinkButton
          >
        </p>
      </aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'
import dynamicHeadTags from '~/utils/dynamicHeadTags.js'
import AppFooter from '~/components/AppFooter.vue'
export default {
  components: { AppFooter, LinkButton },
  data() {
    return {
      page: {
        title: 'Página no encontrada',
      },
    }
  },
  head() {
    const generalData = {
      title: this.page.title,
    }
    return {
      ...dynamicHeadTags(this, generalData, this.page.pageMetaData || {}),
    }
  },
}
</script>
<style lang="postcss" scoped>
#error {
  @apply w-screen
  min-h-screen
  flex
  flex-col
  justify-center
  bg-gray-300
  dark:bg-gray-600;

  & main {
    @apply w-11/12
    mx-auto
    pt-12
    flex
    items-center
    flex-col
    md:w-10/12
    md:pt-10
    lg:w-8/12
    xl:w-7/12
    xl:pt-20;

    & div {
      @apply mb-10 text-center;
      & h1 {
        @apply text-9xl
        font-cameo
        mb-10;

        &::after {
          @apply content-none;
        }
      }

      & span {
        @apply text-base
        font-niti;
      }
    }

    & aside {
      & p {
        @apply flex
        font-niti;

        & a {
          @apply ml-1
          block
          content-after;

          &:after {
            @apply block w-full h-0.5 bg-current;
          }

          &:hover {
            @apply text-opacity-60;

            &:after {
              @apply bg-opacity-60;
            }
          }
        }
      }
    }
  }

  & footer {
    @apply mt-auto;
  }
}
</style>
