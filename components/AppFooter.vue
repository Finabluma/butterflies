<template>
  <footer :class="{ footer_slug: footerSlug }">
    <!-- <p>https://ofm.sanity.studio/</p> -->
    <div class="container">
      <div class="container-inner__top">
        <p class="login">
          <link-external href="https://ofm.sanity.studio">
            <span class="sr-only">Inicia sesión</span> <IconUser />
          </link-external>
        </p>
        <nuxt-link
          to="/"
          class="logo-link"
          aria-label="home"
          labelledby="backhome"
        >
          <span class="logo font-open text-base tracking-widest px-10">
            ofm
          </span></nuxt-link
        >
        <color-mode-picker />
      </div>
      <!-- <div class="container-inner__bottom w-8/12">
        <p class="login ml-20">
          <link-external href="https://ofm.sanity.studio">
            <span class="sr-only">Inicia sesión</span> <IconUser />
          </link-external>
        </p>
        <color-mode-picker />
      </div> -->
    </div>
  </footer>
</template>

<script>
import IconUser from '~/assets/icons/user.svg?inline'
import LinkExternal from '~/components/RichText/LinkExternal.vue'
export default {
  name: 'AppFooter',
  components: { IconUser, LinkExternal },
  computed: {
    footerSlug() {
      return this.$route.name === 'bitacora-slug'
    },
  },
}
</script>

<style lang="postcss" scoped>
footer {
  @apply w-screen
  mt-auto
  py-10;

  & .container {
    @apply mx-auto
    w-10/12
    md:w-9/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12

    flex
    justify-between
    items-center;

    & .container-inner__top {
      @apply w-full flex justify-evenly items-center;
    }

    /* & .container-inner__bottom {
      @apply flex
      items-center
      justify-around;
    } */
  }

  &.footer_slug {
    @apply bg-gray-300
  dark:bg-gray-600;
  }
}
</style>
