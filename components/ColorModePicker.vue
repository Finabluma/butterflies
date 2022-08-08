<template>
  <div class="colorpicker">
    <ul>
      <li
        v-if="$colorMode.preference === 'system'"
        @click="$colorMode.preference = 'dark'"
      >
        <IconSystem />
        <span class="hidden">System ColoMode</span>
      </li>
      <li
        v-else-if="$colorMode.preference === 'dark'"
        @click="$colorMode.preference = 'light'"
      >
        <IconDark />
        <span class="hidden">Dark ColoMode</span>
      </li>
      <li v-else @click="$colorMode.preference = 'system'">
        <IconLight />
        <span class="hidden">Light ColoMode</span>
      </li>
    </ul>
  </div>
</template>
<script>
import IconSystem from '~/assets/icons/system.svg?inline'
import IconLight from '~/assets/icons/light.svg?inline'
import IconDark from '~/assets/icons/dark.svg?inline'
export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark,
  },
  data() {
    return {
      colors: ['system', 'light', 'dark'],
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>
