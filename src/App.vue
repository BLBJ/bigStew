<template>
  <div id="app">
    <canvas class="canvas" id="treecanvas"></canvas>
    <div class="title_left box">
      <a  href="/blog/">所思</a>
      <span class="prompt">博客、文章</span>
    </div>
    <div class="title_right box">
      <a href="javascript:return false;">所做</a>
      <span class="prompt">作品预览</span>
    </div>
    <!-- <div class="head">
        <span>怀揣梦想</span>
    </div>-->
    <div class="foot" v-show="showFoot">
      <span :style="{color}">记录点滴，收获成长</span>
    </div>
  </div>
</template>

<script>
import drawInit from "./util/Tree";
export default {
  name: "App",
  components: {},
  data() {
    return {
      tree: "",
      showFoot: false,
      color: "#ffffff"
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let self = this;
      let { innerWidth, innerHeight } = window;
      this.tree = drawInit("#treecanvas", {
        width: innerWidth,
        height: innerHeight,
        start: true,
        cb: () => {
          self.showFoot = true;
          self.color = this.tree.color;
        }
      });
    },
    startDraw() {
      this.tree.start = true;
    },
    stopDraw() {
      this.tree.start = false;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
  .box {
    width: 200px;
    height: 175px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 50%;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.5s;
    a {
      text-decoration: none;
      font-size: 40px;
      letter-spacing: 10px;
      font-weight: 500;
      color: #ffffff;
    }
    .prompt {
      font-size: 14px;
      color: #ffffff;
      transform: translateY(-5px);
      transition: 0.3s;
      opacity: 0;
      margin-top: 15px;
      letter-spacing: 4px;
    }
    &:hover {
      border-color: #ffffff;
      .prompt {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .canvas {
    filter: brightness(0.4);
  }
  .title_left {
    transform: translate(-101%, -30%);
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
  .title_right {
    transform: translate(0, 30%);
    border-left: 3px solid transparent;
    border-top: 3px solid transparent;
  }
  .head {
    position: absolute;
    left: 50%;
    bottom: 3px;
    font-size: 13px;
    transform: translateX(-110%);
    color: #ffffff;
  }
  .foot {
    position: absolute;
    left: 53%;
    bottom: 3px;
    font-size: 13px;
    color: #ffffff;
    transform: translateX(20px);
    filter: brightness(0.9);
    transition: 1s;
  }
}
</style>
