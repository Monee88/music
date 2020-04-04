<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>  <!-- dom缓存到内存中，不会再次发送请求-->
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Player from 'components/player/player'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
