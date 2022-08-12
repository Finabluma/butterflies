<template>
  <header ref="nav" class="global-header" :class="{ white: white }">
    <span role="status" aria-live="polite"></span>
    <!-- <div class="banner">
      <div class="banner__inner l-center">
        <img
          src="/dist/assets/svg/beta.svg"
          class="icon icon--beta"
          alt="Beta icon"
          role="img"
        />
        <p>
          This is a new website.
          <a href="https://github.com/w3c/w3c-website">Give feedback</a> to help
          us improve it.
        </p>
      </div>
    </div> -->
    <!-- <nav id="lang-nav" aria-label="Language options">
      <div class="l-center">
        <div class="l-cluster">
          <ul class="clean-list" role="list">
            <li>
              <a href="/zh" hreflang="zh-hans" lang="zh-hans">简体中文首页</a>
            </li>
            <li>
              <a href="/ja" hreflang="ja" lang="ja">日本語ホームページ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <nav id="global-nav" aria-label="Main">
      <div class="global-nav__inner l-center">
        <NuxtLink
          exact
          to="/"
          class="logo-link"
          aria-label="home"
          labelledby="backhome"
        >
          <span class="logo font-open text-base tracking-widest">
            ofm
            <!-- <img
              src="/dist/assets/svg/w3c-logo.svg"
              alt="W3C logo"
              role="img"
            /> -->
          </span></NuxtLink
        >
        <color-mode-picker />
      </div>
    </nav>
  </header>
</template>
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ColorModePicker from '~/components/ColorModePicker.vue'

export default {
  name: 'AppHeader',
  components: { ColorModePicker },
  data: () => ({
    tl: gsap.timeline({
      paused: true,
    }),
  }),
  computed: {
    white() {
      return this.$route.name === 'bitacora-slug'
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const { nav } = this.$refs

    ScrollTrigger.create({
      start: 'top+=100 top',
      end: 10000,
      toggleClass: {
        targets: nav,
        className: 'scrolled',
      },
      onEnter: () => {
        this.tl.play()
        gsap.to(nav, { yPercent: '-100', duration: 0.25 })
        gsap.fromTo(nav, { yPercent: '-100' }, { yPercent: '0', delay: '0.25' })
        gsap.set(nav, { position: 'fixed' })
      },
      onLeaveBack: () => {
        gsap.set(nav, { position: 'absolute' })
      },
    })
  },
}
</script>

<style lang="postcss" scoped>
.global-header {
  @apply fixed
  top-0
  left-0
  z-20
  w-screen
  flex
  justify-center
  items-center;

  & #global-nav {
    @apply mx-auto
    w-10/12
    md:w-9/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;

    & .global-nav__inner {
      @apply flex
      justify-between
      items-center
      py-5;
    }
  }

  &.scrolled {
    @apply bg-gray-300
    dark:bg-gray-600
    drop-shadow-md;

    & #global-nav .global-nav__inner {
      @apply py-2;
    }
  }

  &.white {
    @apply text-gray-300
    dark:text-gray-400;
    &.scrolled {
      @apply text-current;
    }
  }
}
</style>
