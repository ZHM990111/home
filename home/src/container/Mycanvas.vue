<template>
  <div class="canvas">
    <canvas ref="canvas" height='400px'></canvas>
  </div>
</template>

<script>
import Img from "../../static/img/img1.png";
import codeImg from '../../static/img/code.png'

export default {
  name: "Canvas",
  computed: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  async mounted() {
    let img = await this.loadImg(Img);
    let CodeImg = await this.loadImg(codeImg);

    this.canvas.width = img.width+150;
    this.canvas.height = img.height+500;
    this.context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      70,
      0,
      img.width,
      img.height
    );
    //白色矩形
    this.context.fillStyle = "white";
    this.context.fillRect(40, 1250, 1400,500);
    //二维码
     this.context.drawImage(
      CodeImg,
      0,
      0,
      250,
      250,
      1100,
      1350,
      300,
      300
    );
    //文字
    this.context.font = "bold 85px Arial";
    this.context.fillStyle = '#ED216B';
    this.context.fillText("下班回家亲自下厨，周一红", 40, 1350);
    this.context.fillText("烧牛肉，周二老坛酸菜", 40, 1500);
    this.context.font = "45px Arial";
    this.context.fillStyle = '#ED216B';
    this.context.fillText("扫码生成你自己的春节谎言", 900,1640);
  },
  methods: {
    //大图
    async loadImg(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject();
        };
      });
    }
  }
};
</script>

<style>
.canvas {
  width: 100%;
  height: 100%;
  background: #d8d8d8;
  box-sizing: border-box;
}
canvas {
  width: 100%;
  margin-top: 50px;
}
</style>



