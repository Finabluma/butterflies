<template>
  <video-player :src="youtubeUrl" class="video" />
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  name: 'YoutubeBlock',
  components: {
    VideoPlayer,
  },
  props: {
    youtubeUrl: {
      type: String,
      default: '',
    },
  },
}
</script>
