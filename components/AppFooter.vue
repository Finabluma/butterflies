<template>
  <footer>
    <!-- <p>https://ofm.sanity.studio/</p> -->
    <div class="container">
      <div class="container-inner__top">
        <nuxt-link
          to="/"
          class="logo-link"
          aria-label="home"
          labelledby="backhome"
        >
          <span class="logo font-open text-base tracking-widest">
            ofm
          </span></nuxt-link
        >
      </div>
      <div class="container-inner__bottom">
        <p class="login">
          <link-external href="https://ofm.sanity.studio">
            <span class="sr-only">Inicia sesión</span> <IconUser />
          </link-external>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import IconUser from '~/assets/icons/user.svg?inline'
import LinkExternal from '~/components/RichText/LinkExternal.vue'
export default {
  name: 'AppFooter',
  components: { IconUser, LinkExternal },
}
</script>

<style lang="postcss" scoped>
footer {
  @apply w-screen
  mt-auto
  py-10;

  & .container {
    @apply mx-auto
    w-full
    md:w-10/12
    lg:w-11/12
    flex
    flex-col
    sm:flex-row
    sm:justify-between
    items-center
    md:px-24;

    & .container-inner__top {
      @apply mb-6
      sm:mb-0;
    }
  }
}
</style>
