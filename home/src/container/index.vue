<template>
    <div class="home">
       <Header/>
       <div class="center">
          <Center>
            <p class="step">春节回家每日一谎步骤</p>
          </Center>
          <ul class="list">
             <li>
               <p>Step 1</p>
               <p>选择贴心谎话</p>
               <p class='xian'></p>
             </li>
             <li>
               <p>Step 2</p>
               <p>选择谎话背景图</p>
               <p class='xian'></p>
             </li>   
             <li>
               <p>Step 3</p>
               <p>生成谎话海报，领取免费春节“治”人攻略</p>
               <p class='xian'></p>
             </li>                       
          </ul>     
        <div class="footer">
            <router-link to="/stepOne"><p class='button'>开始制作</p></router-link>
            <p>活动规则：
2月3日-2月7日，春节全程谎言陪伴，每天不再担心各种质问，同时天天都能有攻略（免费会员课程）领取哦！</p>
        </div>
       </div>
    </div>
</template>

<script>
import Header from '../components/header'
import Center from '../components/center'
import stepOne from '../container/stepOne'
export default {
  name: "Home",
  components:{
    Header,
    Center
  },
};
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.center{
  box-sizing: border-box; 
  width: 100%;
  flex: 1;
  background: url('../../static/img/背景@3x.png');
  background-size:100% 100%;  
}
.step{
  font-family: AliHYAiHei;
  font-size: 24px;
  color: #FED59E;
  text-align: right;
  margin-top:10px;
}
.list{
  width: 100%;
  padding:0 15px;
  box-sizing: border-box; 
}
li{
  margin-top: 10px;
}
li>p{
  font-family: AliHYAiHei;
  font-size: 18px;
  color: #FFFFFF;
  margin-top: 5px;
}
.xian{
  width: 30px;
  height:2px;
  background:#fff;
}
.footer{
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button{
  border-radius: 6px;
  padding:2px 5px;
  font-size: 16px;
  color: #fff;
  border:1px solid #fff;
}
.footer>p{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #FFFFFF;
  padding: 10px;
}
a{
  text-decoration: none;
}
</style>
