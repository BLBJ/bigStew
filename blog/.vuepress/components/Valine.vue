<template>
  <div class="vcomment">
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
  mounted: function () {
    this.createValine();
  },
  methods: {
    createValine() {
      const Valine = require("valine");
    //   window.AV = require("leancloud-storage");
      const valine = new Valine({
        el: "#vcomments",
        appId: "ToCSDiTbKzCmgY9F1XU1ct6S-gzGzoHsz",
        appKey: "CGGwD2OlW9EYtECgLSCIxKWS",
        notify: false,
        verify: false,
        avatar: "monsterid",
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