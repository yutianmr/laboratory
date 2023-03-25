<template>
  <div>
    <div class="function_header">
      <p class="function_p1">实验室管理系统App</p>
      <p class="function_p2">
        简化线下流程，规范实验操作，降低沟通成本，科学管理实验研究，存档过程数据。
      </p>
    </div>
    <div class="function_div1">
      <p class="function_div1_p3">
        向用户推送最新实验资讯，根据地理位置精准向用户展示附近的实验设施、实验仪器、实验操作视频。
      </p>
      <div class="function_div1_img">
        <img src="../assets/one.jpg" alt="" />
      </div>
    </div>
    <div class="function_div2">
      <div class="function_div1 function_div1_two">
        <p class="function_div1_p2">
          单个课题组涵盖“动物实验入驻”、”实验预约“、”实验服务“、”动物携离“、”项目人员变更“、”实验终结“等申请操作，
        </p>
        <p class="function_div1_p2">
          动物实验入驻：实验人员可以在该功能下将实验中选择需要详细规格属性的动物，动物期望的日期，并安置到具体的实验饲养架上。
        </p>
        <div class="function_div1_img2">
        <img src="../assets/animalone.png" alt="" />
        <img src="../assets/animaltwo.png" alt="" />
      </div>
        <p class="function_div1_p2">
          实验预约：实验人员进行实验操作可以提前预约，并添加其他参与的人员，选择实验此时间段未被预约的实验台，实验需要的动物，操作技能，耗材，其他额外的需求。
        </p>
        <div class="function_div1_img2">
        <img src="../assets/makeone.png" alt="" />
        <img src="../assets/maketwo.png" alt="" />
      </div>
        <p class="function_div1_p2">
          实验服务：实验人员在进行实验操研究过程中，需要对实验中的动物进行环境分离，种类培养等操作，可以进行服务定制，通知专业人员代为操作。
        </p>
        <div class="function_div1_img2">
        <img src="../assets/serveone.png" alt="" />
        <img src="../assets/servetwo.png" alt="" />
      </div>
        <p class="function_div1_p2">
          动物携离：实验室进行实验时，实验人员通过该功能申请携离需要携离的动物，方便动物饲养员清晰明了的管理饲养室中的动物。
        </p>
        <div class="function_div1_img2">
        <img src="../assets/moveone.png" alt="" />
        <img src="../assets/move.png" alt="" />
      </div>
        <p class="function_div1_p2">
          项目人员变更：在一个阶段的实验研究中，实验人员可能发生变化，退出，新参与，替代。实验负责人进行申请，管理人员审核，合理的控制实验人员团队。
        </p>
         <div class="function_div1_img">
          <img src="../assets/change.jpg" alt="" />
        </div>
        <p class="function_div1_p2">
          实验终结：实验结束时，实验负责人可以通过此功能终结实验，获知实验中产生的实验研究纬度详细费用，各个人员的费用，及未携离的动物。
        </p>
        <div class="function_div1_img2">
        <img src="../assets/endone.png" alt="" />
        <img src="../assets/endtwo.png" alt="" />
      </div>
        <p class="function_div1_p2">
          这几个功能将以前的线下杂乱无章的管理，进行规范化操作，用户提交相关申请，管理人员进行审核，并给予反馈。管理人员及申请人员可以清楚的了解实验的整个过程。
        </p>
        <div class="function_div1_img">
          <img src="../assets/two.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="function_div1">
      <p class="pTwo">
        负责展示用户的账号资料，个人信息及实验过程产生的订单费。
      </p>

      <div class="function_div1_img">
        <img src="../assets/three.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.function_header {
  width: 100%;
  height: 700px;
  background-image: url("../assets/fct-banner.png");
  background-size: 100% 100%;
  margin-top: -20px;
}
.function_p1 {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  /* line-height: 277px; */
  padding-top: 277px;
}
.function_p2 {
  width: 748px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 28px;
  text-align: center;
  margin: auto;
}
.function_div1 {
  width: 760px;
  height: 910px;
  /* margin-left: 290px; */
  margin-top: 70px;
  margin-bottom: 60px;
  margin: auto;
}
.function_div1_p1 {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
}
.function_div1_p2 {
  width: 1025px;
  font-size: 18px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  color: #04123a;
  line-height: 25px;
  margin-left:-13%
}
.pTwo{
    /* width: 700px; */
    text-align: center;
}
.function_div1_img {
  width: 500px;
  height: 812px;
  margin: auto;
}
.function_div1_img img {
  width: 100%;
  height: 100%;
  margin-left: -13px;
}
.function_div2 {
  width: 100%;
  height: 6442px;
  background: #f5f8fa;
  overflow: hidden;
}
.function_div1_two {
  /* padding-top: 50px; */
  margin-top: 50px;
}
.function_div1_img2{
    display: flex;
    width: 500px;
  height: 812px;
  /* justify-content: center; */
}
/* .function_div1_img2 img{
    width: 100%;
    height: 100%;
} */
.function_div1_img2 img:nth-child(1){
    margin-left: -20%;
    margin-right: 10px;
    width: 500px;
    height: 100%;
}
.function_div1_img2 img:nth-child(2){
    width: 500px;
    height: 100%;
}
.function_div1_p3{
    width: 1025px;
  font-size: 18px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  color: #04123a;
  line-height: 25px;
  margin-left: -3%;
}
</style>

