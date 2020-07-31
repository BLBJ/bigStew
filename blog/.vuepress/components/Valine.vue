<template>
  <div class="vcomment" v-if="load">
    <!-- id 将作为查询条件 -->
    <span :id="url" class="leancloud_visitors" data-flag-title="丁文博的小站">
      <em class="post-meta-item-text">阅读量</em>
      <i class="leancloud-visitors-count">loading</i>
    </span>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  name: "Valine",
  computed: {
    // data() {
    //   return this.$page.frontmatter;
    // },
  },
  data() {
    return {
      load: false,
      url: "",
    };
  },
  mounted() {
    this.url = window.location.pathname;
    this.load = true;
    this.$nextTick(() => {
      this.createValine();
    });
  },
  methods: {
    createValine() {
      this.url = window.location.pathname;
      const Valine = require("valine");
      //   window.AV = require("leancloud-storage");
      const valine = new Valine({
        el: "#vcomments",
        appId: "ToCSDiTbKzCmgY9F1XU1ct6S-gzGzoHsz",
        appKey: "CGGwD2OlW9EYtECgLSCIxKWS",
        notify: false,
        verify: false,
        avatar: "monsterid",
        visitor: true, // 阅读量统计
        path: window.location.pathname,
        placeholder: "欢迎留言与我分享您的想法...",
      });
      this.valineRefresh = false;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          //重新刷新valine
          this.createValine();
        }, 300);
      }
    },
  },
};
</script>
<style  scoped>
#vcomments {
  margin-top: 30px;
}
</style>