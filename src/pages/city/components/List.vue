<template>
  <!-- huo -->
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area" ref="top">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 字母城市列表 -->
      <div class="area" v-for="(item, key,  index) of cities" :key="index" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit('changeCity', city);
      this.$router.push('/')
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  //侦听器
  watch: {
    letter() {
      console.log(this.letter);
      if (this.letter) {
        console.log(this.letter);

        // 由ref 获取 dom 元素
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
        console.log(element);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  // 防止溢出，但是列表不能拖动
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        text-align: center;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      text-align: left;
      line-height: 0.6rem;
      color: #000;
      padding: 0 0.24rem;
      cursor: pointer;
    }
  }
}
</style>