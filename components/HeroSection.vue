<template>
  <div class="heroSection">
    <section
      v-if="pageSection.disabled !== true"
      :class="{ bitacora: heroClass }"
      class="hero"
    >
      <div class="h-content">
        <div class="h-text">
          <div class="h-text__inner">
            <h1 v-if="pageSection.heroHeading">
              {{ pageSection.heroHeading }}
            </h1>
            <p v-if="pageSection.heroLegend">
              {{ pageSection.heroLegend }}
            </p>
          </div>
        </div>
        <div v-if="pageSection.heroImage" class="h-image">
          <img-item
            :src="pageSection.heroImage.asset._ref"
            :modifiers="{
              crop: pageSection.heroImage.crop,
              hotspot: pageSection.heroImage.hotspot,
              q: 80,
              blur: 20,
            }"
            fit="crop"
          />
        </div>
      </div>
    </section>
    <div v-if="heroClass" class="svgDivider">
      <SVGDivider />
    </div>
  </div>
</template>

<script>
import ImgItem from '~/components/ImgItem.vue'
import SVGDivider from '~/components/SVGDivider.vue'

export default {
  components: { ImgItem, SVGDivider },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  computed: {
    heroClass() {
      return this.$route.name === 'bitacora'
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  @apply w-screen
  min-h-[40vh]
  sm:min-h-[50vh]
  md:min-h-[50vh]
  lg:min-h-[50vh]
  xl:min-h-[45vh]
  overflow-hidden
  bg-gray-300
  dark:bg-gray-600
  flex
  justify-center
  items-end
  pb-10
  sm:pb-20;

  & .h-content {
    @apply relative
    h-full;

    & .h-text {
      @apply w-screen;

      & .h-text__inner {
        @apply w-10/12
        mx-auto
        max-h-full
        h-full
        text-center
        lg:w-8/12;

        & h1 {
          @apply font-cameo
          tracking-wider
          mb-2;

          &:after {
            @apply content-none;
          }
        }

        & p {
          @apply mt-0
          text-sm
          font-niti
          leading-tight
          lowercase;
        }
      }
    }

    & .h-image {
      @apply relative
      content-before;

      &::before {
        @apply absolute
        top-0
        left-0
        z-10
        w-screen
        h-full
        bg-gradient-to-b
        from-gray-400/30
        to-gray-300/90;
      }
    }
  }
}
.bitacora {
  @apply min-h-0
  pb-0
  h-80
  md:h-[500px]
  2xl:h-[600px];

  & .h-content {
    @apply flex
    items-center
    pb-10;
  }
}
.heroSection {
  @apply relative;

  & .svgDivider {
    @apply absolute
    w-full
    bottom-0
    left-0;
  }
}
</style>
