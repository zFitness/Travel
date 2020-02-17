<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        // 设置轮播图片下面的小点
        pagination: ".swiper-pagination",
        //关闭自动滚动
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        // 获取当前页码
        const page = Math.floor(index / 8);
        // 如果当前页为空
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  margin-left: 3px;
}

.swiper-pagination {
  position: relative;
}

.mpw-nav-dots {
  bottom: 6px;
  padding: 0 6px;
  width: 100%;
  text-align: center;

  .active {
    background: rgba(0, 175, 190, 0.8);
  }

  b {
    display: inline-block;
    margin: 0 3px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: rgba(144, 144, 144, 0.8);
  }
}

.icons {
  margin-top .1rem
  .icon {
    position: relative;
    overflow: hidden;
    width: 25%;
    height: 0;
    float: left;
    padding-bottom: 25%;

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: #da rkTextColor;
      text-align: center;
      // 使用定义的stylus方法
      ellipsis();
    }

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        // 水平居中
        margin: 0 auto;
        height: 100%;
      }
    }
  }
}
</style>