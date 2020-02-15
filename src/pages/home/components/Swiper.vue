<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        // 设置轮播图片下面的小点
        pagination: ".swiper-pagination",
        //开启循环
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"
        }
      ]
    };
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
  padding-bottom: 27.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>