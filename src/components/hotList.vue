<template>
  <ul>
    <li class="device"></li>
    <li class="hot-list-item" v-for="(item,index) in hotList" :key="index">
      <p class="hot-value">
        <span class="rank" :class="{'hot-rank': index < 3}">{{item.rank}}</span>
        <span class="hot">{{item.hotvalue}}万热度</span>
      </p>
      <div class="content">
        <p class="guide-line">{{item.guideline}}</p>
        <img :src="item.imgurl" alt mode="widthFix">
      </div>
    </li>
  </ul>
</template>

<script>
import hotList from '@/json/hotlist.json'
export default {
  data() {
    return {
      hotList
    }
  }
}
</script>

<style scoped>
.device {
  height: 6px;
  background: rgb(245, 243, 243);
}
.hot-list-item {
  padding: 12px;
}
.hot-value {
  margin-bottom: 8px;
}
.hot-value span {
  display: inline-block;
  font-size: 12px;
}
.hot-value .rank {
  padding: 0px 8px;
  line-height: 14px;
  border-radius: 2px;
  color: rgb(172, 119, 20);
  background: rgb(226, 224, 223);
}
.hot-value .rank.hot-rank {
  color: #fff;
  background:linear-gradient(to right,orange,rgb(238, 198, 124));
}
.hot-value .hot {
  margin-left: 8px;
  color: #8590a6;
}
.content {
  display: flex;
}
.content .guide-line {
  flex: 1;
  font-size: 14px;
  line-height: 20px;
}
.content img {
  width: 100px;
  /* height: 60px; */
  margin-left: 12px;
}
</style>