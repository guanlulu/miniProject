<template>
  <div class="search">
    <navigation-bar></navigation-bar>
    <div class="container">
      <van-search :value="searchValue" :focus="focus" placeholder="请输入搜索关键词" />
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar2'
export default {
  components: {
    navigationBar
  },
  data() {
    return {
      focus: false
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.focus = true
    // },1000)

    this.$nextTick(() => {
      const input = document.getElementsByClassName('van-field__control')[0]
      input.focus()
    })
  }
}
</script>

<style scoped>
.container {
}
</style>