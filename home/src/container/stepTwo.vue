<template>
    <div class="stepOne">
       <Header/>
       <div class="center">
             <div class="pic">
                 <img src="../../static/img/装饰左@2x.png">
                 <p>step2：给你的谎言找一个合适的背景图</p>
                 <img src="../../static/img/装饰右@2x.png">
             </div> 
         <div class="img">
           <img src="../../static/img/img1.png" alt="">
           <div class="tit">下班回家亲自下厨，周一红烧牛肉，周二老坛酸菜</div>
         </div>
        <div class="footer">
            <div class='change'>点击下图随意切换背景图</div>
            <div class="imgs">
              <img src="../../static/img/img1.png" alt="">
              <img src="../../static/img/img1.png" alt="">
              <img src="../../static/img/img1.png" alt="">  
            </div>
           <div class='last'>
               <router-link to="/stepOne"><p class='pre'><span class="iconfont icon--zuoshuangjiantou"></span>上一步</p></router-link>
               <p @click="builder">生成海报<span class="iconfont icon--youjiantou"></span></p> 
           </div> 
        </div> 
      </div>
      <div class="code" v-show="flag">
          <div>
              <p class="code-one">扫码关注彬彬帮</p>
              <p>生成海报&免费领取会员课</p>
              <img src="../../static/img/code.png" @click="ToCanvas">
              <p>长按扫码生成海报</p>
          </div>
      </div>
    </div>
</template>

<script>
import Header from '../components/header'
import stepOne from '../container/stepOne'
import Canvas from '../container/Mycanvas' 

export default {
  name: "stepTwo",
  components:{
    Header
  },
  data(){
   return{
       flag:false
   }
  },
  methods:{
      builder(){
         if(this.flag){
           this.flag=false
         } else {
             this.flag=true
         } 
      },
      ToCanvas(){
        this.flag=false;
        this.$router.push('/canvas')  
      }
  }
};
</script>

<style scoped>
.stepOne{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.one{
    font-size: 16px;
    color: #FED59E;
}
.center{
  box-sizing: border-box; 
  width: 100%;
  flex: 1;
  background: url('../../static/img/背景@3x.png');
  background-size:100% 100%;  
  padding: 8px;
}
.pic{
    width: 100%;
    display: flex;
}
.pic>img{
  width: 37px;
  height: 37px;
}
.pic>p{
    margin-top: 14px;
    font-family: AliHYAiHei;
    font-size: 14px;
    color: #FED59E; 
    margin-right: -25px;
    margin-left: -15px;
    font-weight: bold;
}
a{
  text-decoration: none;
}
.img{
    width: 100%;
    margin-top: 10px;
    text-align: center;
}
.img>img{
    width:90%;
}
.img>.tit{
    font-family: AliHYAiHei;
    font-size: 24px;
    color: #ED216B;
    background: #fff;
    width: 90%;
    font-weight: bold;
    margin: -5px 15px;
    margin-top: -10px;
}
.footer{
    width: 100%;
    background: #fff;
    margin-top: 10px;
}
.footer>.change{
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #ED216B;
    text-align: center;
}
.imgs{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.imgs>img{
    flex: 1;
    margin-left: 10px;
    width: 60px;
    height: 65px;
    margin-top: 10px;
}
.last{
    margin-top: 20px;
}
.last{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.pre{
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #ED216B;  
}
.last>p{
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #ED216B;
}
.code{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
}
.code>div{
    background: #fff;
    width: 230px;
    height: 250px;
    text-align: center;
    padding: 10px 0;
}
.code-one{
    font-weight: bold;
}
</style>

