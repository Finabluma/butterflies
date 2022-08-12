<template>
  <div class="heroSection">
    <section v-if="pageSection.disabled !== true" class="hero">
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
    <!-- <div v-if="heroClass" class="svgDivider">
      <SVGDivider />
    </div> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ImgItem from '~/components/ImgItem.vue'
// import SVGDivider from '~/components/SVGDivider.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    ImgItem,
    // SVGDivider,
  },
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    tlHeading: null,
  }),
  // computed: {
  //   heroClass() {
  //     return this.$route.name === 'index'
  //   },
  // },
}
</script>
<style lang="postcss" scoped>
.heroSection {
  @apply bg-gray-300
  dark:bg-gray-600
  flex
  justify-center
  items-end
  h-36
  lg:h-48;

  & .hero {
    @apply w-10/12
    md:w-9/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12
    mx-auto;

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
</style>
