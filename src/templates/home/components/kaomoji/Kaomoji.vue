<template>
  <div
    class="kaomoji secondary-colored"
    :title="$t('wonderful')">
    <span class="face">{{ face }}</span>
    <span class="hand">ﾉ</span>
  </div>
</template>

<script>
  /**
   * This component displays a waving composite kaomoji.
   */
  export default {
    name: 'Kaomoji',
    data () {
      return {
        edgesList: [
          ['(', ')']
        ],
        eyesList: [
          ['ˇ', 'ˇ'],
          ['❛', '❛'],
          ['^', '^'],
          ['＾', '＾'],
          ['´•', '•`'],
          ['◕', '◕']
        ],
        mouthList: [
          '◡',
          'ᴗ',
          'ᵕ',
          '▽',
          'ヮ'
        ]
      }
    },
    computed: {
      /**
       * Get a face comprising of randomly chosen parts.
       * @returns {string} the assembled face
       */
      face () {
        const [edgeLeft, edgeRight] = this.edgesList[Math.floor(Math.random() * this.edgesList.length)]
        const [eyeLeft, eyeRight] = this.eyesList[Math.floor(Math.random() * this.eyesList.length)]
        const mouth = this.mouthList[Math.floor(Math.random() * this.mouthList.length)]

        return `${edgeLeft} ${eyeLeft} ${mouth} ${eyeRight} ${edgeRight}`
      }
    }
  }
</script>

<style scoped lang="scss" src="./Kaomoji.scss">
</style>

<i18n src="./lang.json">
</i18n>
