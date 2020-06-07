<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in picList" :key="item.url">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">0</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import path from "path";
export default {
  data() {
    return {
      picList: [
        { id: 1, url: path.join(__dirname, "/src/public/17.jpg") },
        { id: 2, url: path.join(__dirname, "/src/public/18.jpg") },
        { id: 3, url: path.join(__dirname, "/src/public/13.jpg") },
        { id: 4, url: path.join(__dirname, "/src/public/15.jpg") },
        { id: 5, url: path.join(__dirname, "/src/public/20.jpg") }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: aqua;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  border: 0;
  background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>
