<template>
    <div class="start">
        <div>
            <img class="left" src="../../static/img/装饰左@2x.png">
            <img class="logo" src="../../static/img/logo@2x.png" alt="">
        </div>
        <div>
            <slot></slot>
            <div class="line"></div>
        </div>
        <img class="right" src="../../static/img/装饰右@2x.png">
    </div>
</template>

<script>
export default {
  name: "Center"
};
</script>

<style scoped>
.start {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 37px;
  height: 37px;
}
.right {
  width: 37px;
  height: 37px;
}
.logo {
  margin-top: -30px;
  margin-left: 5px;
  width: 50px;
  height: 57px;
}
.line {
  width: 50px;
  height: 2px;
  background: #fed59e;
  margin-left: 130px;
  margin-top: 10px;
}
</style>
