<template>
  <div class="index">
    <navigation-bar title="" background="" color=""></navigation-bar>

    <van-tabs id="tabs" :active="active" animated swipeable>
      <van-tab title="热榜" name="hot">
        <hot-list></hot-list>
      </van-tab>
      <van-tab title="推荐" name="recommend">
        <hot-list></hot-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar2'
import hotList from '@/components/hotList'
export default {
  data () {
    return {
      // 默认位置有问题 translateX = 0
      // 调用 resize 重绘
      active: 'hot'
    }
  },

  components: {
    navigationBar,
    hotList
  },

  methods: {
    stepToSearch () {
      console.log('-------------- stepToSearch ---------------')
    },
    getHeight() {
      let that = this
      wx.getSystemInfo({
        success(res) {
          let screenHeight = res.windowHeight
          let tabHeight = 0
          let scrollHeight = 0
          console.log({ screenHeight })
          let query = wx.createSelectorQuery() // .in(that.$root.$mp.page)
          query.select('.index >>> .van-tabs__wrap').boundingClientRect()
          query.select('.index >>> ._van-tab').boundingClientRect()

          query.exec((execRes => {
            // 获取tabs 的高度
            console.log(execRes)
            tabHeight = execRes[0].height
            scrollHeight = screenHeight - tabHeight
            console.log({scrollHeight})
          }))

        }
      })
      // _van-tab 
    }
  },

  mounted () {
    this.$mp.page.selectComponent('#tabs').resize()

    // this.$nextTick(() => {
      setTimeout(() => {
        this.getHeight()  
      },100)
    // })
  }
}
</script>

<style scoped>
</style>
