<template>
    <div class="stepOne">
       <Header/>
       <div class="center">
          <Center>
            <p class="step">谎言从这里开始</p>
            <p class='one'>step 1：选择一句最适合你的谎话</p>
          </Center>
          <ul class="list" v-for="(item,index) in list" :key='index'>
             <li @click="changeTab(index)">
               <p :class="{'active':clicked==index}">{{item.step}}</p>
             </li>                      
          </ul>     
        <div class="footer">
            <div class='button'>换一换</div>
            <div class='send'>
                <input type="text" placeholder="也可以在这里写下你的今日谎言">
                <button>发送</button>
            </div>
            <router-link to="/stepTwo"><p class='next'>下一步<i class='iconfont icon-youjiantou'></i></p></router-link>
        </div>
       </div>
    </div>
</template>

<script>
import Header from '../components/header'
import Center from '../components/center'
import stepTwo from '../container/stepTwo'
export default {
  name: "stepOne",
  components:{
    Header,
    Center
  },
  data(){
      return {
          list:[{
              id:1,
              step:'1  每天吃饭绝不重样，饿了就点美团外卖'
          },{
              id:1,
              step:'2  下班回家亲自下厨，周一红烧牛肉，周二老坛酸菜'
          },{
              id:1,
              step:'3  知道熬夜伤身，所以我只通宵'
          }],
         clicked:0   //标识，初始化默认选中第一项
      }
  },
  methods:{
  changeTab(index){
            this.clicked = index;
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
  margin-top: 24px;
}
.item{
  font-family: AliHYAiHei;
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 5px;
}
.footer{
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button{
  padding:3px 10px;
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
.send{
    margin-top: 40px;
    display: flex;
    justify-content: center;
}
.send>input{
    width: 75%;
    height: 28px;
    border: 1px solid #FFFFFF;
    border-radius: 2px 0px 0px 2px;
    background: rgba(255, 255, 255, .1);
}
.send>input::-webkit-input-placeholder{
    color: #fff;
    font-size: 10px;
}
.send>button{
    background: #fff;
    border: 0;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    color: #FB3359;
    padding: 3px 5px;
}
a{
  text-decoration: none;
}
.next{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 20px;
    margin-left: 80px;
}
.active{
    font-family: AliHYAiHei;
    font-size: 22px;
    color: #FED59E;
    margin-top: 5px;
}
</style>

