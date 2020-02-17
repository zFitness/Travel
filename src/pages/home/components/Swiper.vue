<template>
  <div class="wrapper">
    <!-- 当list.length 为0， 即list为空数组时， swiper不会被创建，解决了显示最后一张图片的问题。 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        // 设置轮播图片下面的小点
        pagination: ".swiper-pagination",
        //开启循环
        loop: true,
        //开启自动滚动
        autoplay: true,
        speed: 2000
      }
    };
  },
  computed: {
    showSwiper () {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
// 样式进行传透
.wrapper >>>.swiper-pagination-bullet-active {
  background: #ffffff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  // 解决抖动
  // 保持图片宽高比
  padding-bottom: 30.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>