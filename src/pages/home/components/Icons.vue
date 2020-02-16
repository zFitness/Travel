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
  data() {
    return {
      swiperOption: {
        // 设置轮播图片下面的小点
        pagination: ".swiper-pagination"
      },
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "演出"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "张家界旅游"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
          desc: "玻璃桥"
        },
        {
          id: "0005",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: "自然风光"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "看看"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          desc: "滑雪"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8d02011d149bdb02.png",
          desc: "索道"
        },
        {
          id: "0009",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/91a810441506568937171df66f754375.png",
          desc: "红石林"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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