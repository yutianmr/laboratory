<template>
  <div id="app">

    <el-header>
      <div class="header_div_one">
        <div class="header_div_two">
          <img src="./assets/logo-bule@2x_wps.png" alt="">
        </div>
        <div  class="header" v-for="(item,index) in all"  @click="btn(index)" :class="{blue:i===index}" :key="index">{{item.name}}</div>
      </div>
    </el-header>
    <el-main style="margin-top: -110px;padding:0">
      <keep-alive><router-view /></keep-alive>
    </el-main>

    <el-footer style="padding: 0">
      <div class="footer">
        <div class="footer_div">
          <a href='https://beian.miit.gov.cn/'  target="_blank" class="footer_div_two">
            Copyright 2020 实验室管理系统 浙ICP备2020034065号-1
             <!-- 网站备案号 -->
          </a>
          <div class="footer_div_three">
            <div class="and">
              <i style="margin-right:9px" class="iconfont icon-anzhuo"></i>
              Androld APP下载
              <div class="code1">
                <img src="/android_download.png" alt="" />
              </div>
            </div>
            <div class="ios">
              <i style="margin-right:9px" class="iconfont icon-ios"></i>iOS APP下载

              <div class="code2">
                <img src="/ios_download.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all:[
        {
          name:'首页',  
        },{
          name:'功能',
        },{
          name:'应用介绍',
        },{
          name:'关于我们',
        }
        ],
        i:0
    };
  },
  methods: {
    btn(index) {
      this.i=index
      sessionStorage.setItem('index',index)
      switch(index){
        case 0:
          this.$router.push({ path: "/home" });
          break;
        case 1:
          this.$router.push({ path: "/funtion" });
          break;
        case 2:
          this.$router.push({ path: "/introduce" });
          break;
        case 3:
          this.$router.push({ path: "/about" });
          break;
      }
      // this.$router.push({ path: "/home" });
    },

  },
  created(){
    let index=JSON.parse(sessionStorage.getItem('index',index))
    if(index===null){
      this.i=0
    }else{
      this.i=index
    }
    // console.log(index)
    // this.i=index
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  /* display: flex; */
  /* flex-direction: column; */
}
.header{
  margin-left:50px;font-size:14px;opacity: 0.3;color:#fff;cursor:pointer;
}
.blue{
  color:#FFF;
  opacity: 1;
  border-bottom: 2px solid #fff;
}
.header_div_one{
  display: flex;
  height: 30px;
  margin-top: 22px;
}
.header_div_two{
  width: 130px;
  height: 30px;
  margin-left: 199px;
  margin-right: 46px;
}
.header_div_two img{
  width: 100%;
  height: 100%;
}
/* .main {
  flex: 1;
  overflow: auto;
  padding: 0.5rem;
} */
.footer {
  height: 88px;
  background: #292929;
}
.footer_div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer_div_two {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 7.2;
}
.footer_div_three {
  display: flex;
}
.and {
  width: 154px;
  height: 40px;
  border-radius: 20px;
  opacity: 0.3;
  border: 2px solid #f7f7f7;
  text-align: center;
  line-height: 2.1;
  color: #ffffff;
  margin-right: 26px;
  font-size: 12px;
}
.and:hover {
  opacity: 1;
  color: #292929;
  background: #ffffff;
}
.ios {
  width: 154px;
  height: 40px;
  border-radius: 20px;
  opacity: 0.3;
  border: 2px solid #f7f7f7;
  color: #ffffff;
  text-align: center;
  line-height: 2.1;
  font-size: 12px;
}
.ios:hover {
  opacity: 1;
  color: #292929;
  background: #ffffff;
}
.and:hover .code1 {
  display: block;
}
.code1 {
  width: 100px;
  height: 100px;
  background: #fff;
  position: relative;
  left: 26px;
  top: -155px;
  display: none;
}
.code1 img {
  width: 100%;
  height: 100%;
}
.ios:hover .code2 {
  display: block;
}
.code2 {
  width: 100px;
  height: 100px;
  background: #fff;
  position: relative;
  left: 26px;
  top: -155px;
  display: none;
}
.code2 img {
  width: 100%;
  height: 100%;
}
</style>
