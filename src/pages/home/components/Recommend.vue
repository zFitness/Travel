<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" alt class="item-img" />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">点击查看</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [{
        id: "0001",
        imgUrl:
          "http://img1.qunarzz.com/sight/p0/1808/72/72166e8da2280379a3.img.jpg_200x200_206c38f5.jpg",
        title: "美丽世界",
        desc: "给孩子一个充满生气、充满想象力的童年"
      },{
        id: "0002",
        imgUrl:
          "http://img1.qunarzz.com/sight/p0/1808/72/72166e8da2280379a3.img.jpg_200x200_206c38f5.jpg",
        title: "美丽世界",
        desc: "给孩子一个充满生气、充满想象力的童年"
      },{
        id: "0003",
        imgUrl:
          "http://img1.qunarzz.com/sight/p0/1808/72/72166e8da2280379a3.img.jpg_200x200_206c38f5.jpg",
        title: "美丽世界",
        desc: "给孩子一个充满生气、充满想象力的童年"
      },{
        id: "0004",
        imgUrl:
          "http://img1.qunarzz.com/sight/p0/1808/72/72166e8da2280379a3.img.jpg_200x200_206c38f5.jpg",
        title: "美丽世界",
        desc: "给孩子一个充满生气、充满想象力的童年"
      }]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      margin-top: 0.26rem;
      color: #fff;
    }
  }
}
</style>