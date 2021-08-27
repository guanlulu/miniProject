<template>
  <div class="login">
    <navigation-bar></navigation-bar>
    <button v-if="showBtn" open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击授权</button>
    <div @click="goIndex">去首页</div>
  </div>
</template>

<script>
// https://github.com/wzw1992071/mpvue-program/blob/master/src/pages/login/index.vue
import navigationBar from '@/components/navigationBar2'
export default {
  components: {
    navigationBar
  },
  data () {
    return {
      showBtn: true
    }
  },
  methods: {
    onGotUserInfo(e){
      console.log(e)
      if(e.mp.detail){
        console.log(e.mp.detail.userInfo)
        // this.$store.dispatch("login",e.mp.detail.userInfo)
        // this.goIndex()
      }
      
    },
    goIndex(){
      wx.reLaunch({
        url:'/pages/index/main'
      })
    }
  },
  created () {
    // wx.clearStorage({
    //   success: () => {
    //     console.log('清除授权')
    //   }
    // })
    wx.login({
      success (res) {
        console.log('------------- wx.login --------------')
        console.log(res)

        // wx.getUserInfo({
        //   withCredentials: true,
        //   success (res) {
        //     console.log('------------- wx.getUserInfo --------------')
        //     console.log(res)
        //   },
        //   fail (err) {
        //     console.log('自动wx.getUserInfo失败:',err);
        //     // 显示主动授权的button
        //     self.buttonVisible = true;
        //   }
        // })
      }
    })

    // wx.getSetting({
    //   success: (res) => {
    //     // res.authSetting 用户授权结果
    //     console.log('------------- 用户授权结果 -------------')
    //     console.log(res.authSetting)

    //     if(res.authSetting["scope.userInfo"]){
    //       wx.getUserInfo({
    //         success: (res)=> {
    //           // this.$store.dispatch("login",res.userInfo)
    //           this.goIndex()
    //         }
    //       })
    //     }else{
    //       this.showBtn=true
    //     }
    //   }
    // })
  }
}
</script>

<style>

</style>