<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      // 关键词
      keyword: "",
      // 搜索结果列表
      list: [],
      // 节流器
      timer: null
    };
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit('changeCity', city);
      this.$router.push('/')
    }
  },
  computed: {
    // 是否搜索到数据
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      console.log(this.keyword);
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          console.log(i);
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 10);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs["search"]);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    line-height: 0.62rem;
    color: #666;
    // 
    box-sizing: border-box;
    padding: 0 0.2rem;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;
}

.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>