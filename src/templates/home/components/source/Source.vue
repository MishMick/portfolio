<template>
  <a
    v-shortkey="['s']"
    tabindex="0"
    class="source"
    :href="url"
    target="_blank"
    title="[S] See the source code."
    @shortkey="$navigateOutTo(url)">
    <FontAwesomeIcon
      class="icon"
      :icon="['fab', 'github']"
      fixed-width/>
  </a>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faGithub)

  export default {
    name: 'Source',
    components: {
      FontAwesomeIcon
    },
    data () {
      return {
        url: 'https://github.com/dhruvkb/portfolio/'
      }
    }
  }
</script>

<style scoped lang="scss" src="./Source.scss">
</style>
