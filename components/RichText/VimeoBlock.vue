<template>
  <video-player :src="vimeoUrl" class="video" />
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  name: 'VimeoBlock',
  components: {
    VideoPlayer,
  },
  props: {
    vimeoUrl: {
      type: String,
      default: '',
    },
  },
}
</script>
