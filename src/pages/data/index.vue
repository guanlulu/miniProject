<template>
  <div class="lobby-container">
    <navigation-bar></navigation-bar>
    <div class="lobby-top">
      <div class="top-user">
        <span >利于，你好！</span>
        <span @click="bindViewTap"> > </span>
      </div>
    </div>
    <div class="card-container">
      <div class="lobby-upcoming">
        <div class="van-grid van-hairline--top">
          <div class="van-grid-item" style="flex-basis: 25%;">
            <div class="van-grid-item__content van-grid-item__content--center van-hairline">
              <span class="upcoming-num" style="color: rgb(138, 152, 181);">559</span>
              <span class="upcoming-title">待跟进线索</span>
            </div>
          </div>
          <div class="van-grid-item" style="flex-basis: 25%;">
            <div class="van-grid-item__content van-grid-item__content--center van-hairline">
              <span class="upcoming-num" style="color: rgb(0, 170, 255);">0</span>
              <span class="upcoming-title">待跟进客户</span>
            </div>
          </div>
          <div class="van-grid-item" style="flex-basis: 25%;">
            <div class="van-grid-item__content van-grid-item__content--center van-hairline">
              <span class="upcoming-num" style="color: rgb(72, 108, 144);">24</span>
              <span class="upcoming-title">逾期未跟进</span>
            </div>
          </div>
          <div class="van-grid-item" style="flex-basis: 25%;">
            <div class="van-grid-item__content van-grid-item__content--center van-hairline">
              <span class="upcoming-num" style="color: rgb(83, 208, 81);">45</span>
              <span class="upcoming-title">微信邀约</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar2'
export default {
  components: {
    navigationBar
  },
  onLoad(){
      // wx.setNavigationBarTitle({
      //   title:'修改后的导航',
      // })
      // wx.setNavigationBarColor({
      //   frontColor:'#ffffff',//前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 (微信小程序官方规定)
      //   backgroundColor:'27ADFF'//背景颜色值，有效值为十六进制颜色
      // })
  },
  mounted() {
    /**
     * 修改导航栏标题
     * 1. main.json 重新配置覆盖app.json 配置
     * 2. 使用 wx.setNavigationBarTitle()
    */
    wx.setNavigationBarTitle({
      title:'修改后的导航'
    })
  },
  methods: {
    bindViewTap () {
      const url = '../mine/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    }
  }
}
</script>

<style>
.lobby-container {

}
.lobby-top {

}
.top-user {
  height: 240rpx;
  font-size: 32rpx;
  color: #fff;
  line-height: 48rpx;
  padding: 40rpx;
  display: flex;
  justify-content: space-between;
  background: #4277BD;
  background-image: linear-gradient(180deg, #4277BD 0%, #4277BD 100%);
  border-bottom-left-radius: 60% 20%;
  border-bottom-right-radius: 60% 20%;
  box-sizing: border-box;
}
.card-container {
  position: relative;
  z-index: 0;
  margin-top: -104rpx;
}
.lobby-container .lobby-upcoming {
  margin: 16rpx;
  border-radius: 16rpx;
  overflow: hidden;
  background: #FFF;
}
.van-grid {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.van-grid-item {
  position: relative;
  box-sizing: border-box;
  padding: 40rpx 0;
}
.van-grid-item__content {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  background-color: #fff;
}
.van-grid-item__content--center {
  align-items: center;
  justify-content: center;
}
.lobby-container .lobby-upcoming .upcoming-num {
  font-size: 60rpx;
  line-height: 80rpx;
  margin-bottom: 8rpx;
}
.lobby-container .lobby-upcoming .upcoming-title {
  font-size: 24rpx;
  line-height: 32rpx;
  color: #486C90;
}
</style>