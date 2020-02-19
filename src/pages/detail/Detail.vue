<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <keep-alive>
      <detail-header></detail-header>
    </keep-alive>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      categoryList: [],
      bannerImg: "",
      gallaryImgs: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.categoryList = data.categoryList;
        this.sightName = data.sightName;
        this.gallaryImgs = data.gallaryImgs;
        this.bannerImg = data.bannerImg;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 40rem;
}
</style>