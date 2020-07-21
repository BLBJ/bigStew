<template>
  <div id="app">
    <canvas class="canvas" id="treecanvas"></canvas>
    <div class="title_left box">
      <a target="_blank" href="http://localhost:8080/">所思</a>
    </div>
    <div class="title_right box">
      <a target="_blank" href>所做</a>
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
      tree: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let {innerWidth,innerHeight} = window;
      this.tree = drawInit('#treecanvas',{
        width: innerWidth,
        height: innerHeight,
        start: true
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
    border: 3px solid #ffffff;;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 50%;
    a {
      text-decoration: none;
      font-size: 60px;
      letter-spacing: 10px;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .canvas{
    filter: brightness(0.4);
  }
  .title_left {
    transform: translate(-101%, -30%);
  }
  .title_right {
    transform: translate(0, 30%);
  }
}
</style>
