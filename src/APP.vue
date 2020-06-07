<template>
  <div class="app-container">
    <mt-header fixed title="Vue项目"></mt-header>
    <transition name="middle">
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}
.middle-enter {
  opacity: 0;
  transform: translateX(100%);
}
.middle-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.middle-enter-active,
.middle-leave-active {
  transition: all 0.5s ease;
}
</style>
