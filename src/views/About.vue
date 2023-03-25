<template>
  <div>
    <div class="about_header">
      <p class="function_p1">关于我们</p>
      <p class="function_p2">一个意在改变实验室的管理系统</p>
    </div>
    <div class="div_all">
      <p class="div_all_p1">关于我们</p>
      <p class="div_all_p2">
        专门为个性化学习而设计，全面的实验操作资讯，实验种类丰富，学生可以充分了解到其他的实验，学习其中知识，培养学生的实验乐趣，充实学生的学识，增长学生的见识，让老师不必要担心学生的实验知识。
      </p>
      <div class="div_all_div">
        <img src="../assets/aboutimg01@2x.png" alt="" />
      </div>
      <div class="footer_text">
        <p class="footer_text_title">联系我们</p>
        <div>
          <p>公司:</p>
          <p>杭州凯诺宇科技有限公司</p>
        </div>
        <div style="margin-left:16px">
          <p>联系人:</p>
          <p>罗楠楠</p>
        </div>
        <div>
          <p>电话:</p>
          <p>13235818388</p>
        </div>
        <div>
          <p>地址:</p>
          <p>浙江省,杭州市,余杭区,临平街道,万宝城6幢1单元1111室</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.about_header {
  width: 100%;
  height: 700px;
  background-image: url("../assets/about-banner.png");
  background-size: 100% 100%;
  margin-top: -20px;
}
.function_p1 {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding-top: 277px;
}
.function_p2 {
  width: 748px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin: auto;
}
.div_all {
  width: 1000px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
}
.div_all_p1 {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
}
.div_all_p2 {
  width: 742px;
  height: 75px;
  font-size: 18px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
  line-height: 25px;
}
.div_all_div {
  width: 1000px;
  height: 451px;
}
.div_all_div img {
  width: 100%;
  height: 100%;
  /* width: 700px;
    height: 451px; */
}
.footer_text {
  margin-bottom: -60px;
  font-size: 15px;
}

.footer_text_title {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
  margin-bottom: 30px;
}
.footer_text div p:nth-child(1) {
  width: 50px;
  text-align: right;
  margin-right: 10px;
}
.footer_text div {
  display: flex;
}
</style>

