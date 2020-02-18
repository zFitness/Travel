<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt />
      <!-- <router-link to="/" tag="div" class="banner-back">
        <span class="iconfont arrow-icon" style="margin-right:.1rem;">&#xe624;</span>
      </router-link>-->
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont arrow-icon" style="margin-right:.1rem;font-size:.1rem;">&#xe678;</span> {{this.bannerImg.length}}
        </div>
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props: {
    gallaryImgs: Array,
    bannerImg: String,
    sightName: String
  },
  components: {
    CommonGallary
  },

  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  height: 0;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-back {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0.22rem;
    left: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    color: #fff;

    span {
      position: relative;
      /* margin-right: 0.1rem; */
      margin: 0 auto;
      top: 0.15rem;
      left: 0.15rem;
    }
  }

  .banner-info {
    position: absolute;
    /* top: 2.7rem; */
    left: 0.4rem;
    bottom: 0.36rem;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.4rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    z-index: 1;

    .banner-number {
      width: 1.2rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.2rem;
      height: 0.4rem;
      font-size: 0.24rem;
      line-height: 0.4rem;
      text-align: center;
    }
  }
}
</style>