<template>
  <div id="home" ref="home">
    <canvas class="canvas" id="treecanvas"></canvas>
    <div class="box">
      <h1>欢迎来到小站</h1>
      <p>我是丁文博，来自山西，</p>
      <p></p>
      <p>一名热爱摇滚和运动的前端开发者，</p>
      <p></p>
      <p>在这里记录一些工作和生活中的所思，</p>
      <p></p>
      <p>希望能和你一起进步,</p>
      <p></p>
      <p>怀揣梦想，不负韶华.</p>
    </div>
    <div class="box_mobile">
      <p>怀揣梦想</p>
      <p>不负韶华</p>
      <p>欢迎到来</p>
    </div>
    <div class="foot" v-show="showFoot">
      <span :style="{color}">何当凌云霄，直上数千尺</span>
    </div>
  </div>
</template>

<script>
import drawInit from "../../util/Tree";
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
      let { width, height } = this.$refs.home.getBoundingClientRect();
      this.tree = drawInit("#treecanvas", {
        width: width,
        height,
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

#home {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;

  .box {
    position: absolute;
    top: 30%;
    left: 60%;
    box-sizing: border-box;
    color: #ffffff;
    letter-spacing: 8px;
    animation: box 1s;
    text-align: left;
    h1 {
      margin-bottom: 20px;
    }
    p {
      line-height: 30px;
    }
  }
  .box_mobile {
    display: none;
    position: absolute;
    top: 30%;
    left: 50%;
    font-size: 20px;
    // transform: translateX(-50%);
    box-sizing: border-box;
    color: #ffffff;
    letter-spacing: 8px;
    animation: box_mobile 1s;
    p {
      line-height: 40px;
    }
  }
  @media (max-width: 719px) {
    .box {
      display: none;
    }
    .box_mobile {
      display: block;
    }
  }
    @keyframes box {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes box_mobile {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .canvas {
      filter: brightness(0.3);
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
      left: 35%;
      bottom: 3px;
      font-size: 16px;
      color: #ffffff;
      transform: translateX(20px);
      // filter: brightness(0.9);
      transition: 1s;
    }
}
</style>
