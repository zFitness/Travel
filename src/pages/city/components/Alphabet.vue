<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :class="{active: item === currentAlphtabet}"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letter = [];
      for (let i in this.cities) {
        letter.push(i);
      }
      return letter;
    }
  },
  data() {
    return {
      // 触摸标识位
      touchStatus: false,
      //当前的位置
      currentAlphtabet: "",
      //字母A的距离顶部的高度
      startY: 0,
      timer: null
    };
  },
  // 页面更新时执行的钩子函数
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      const letter = e.target.innerText;
      this.$emit("change", letter);
      this.currentAlphtabet = letter;
    },
    // 处理滑动事件
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //函数节流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // 获取A元素到顶部的高度
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(index);

          if (index >= 0 && index < this.letters.length) {
            const letter = this.letters[index];
            this.$emit("change", letter);
            this.currentAlphtabet = letter;
          }
        }, 8);
      }
    },
    handleTouchEnd() {}
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.44rem;
    color: $bgColor;
  }
}

.active {
  background: #ccc;
  /* border: 1px solid #ccc; */
  border-radius: 20px;
}
</style>