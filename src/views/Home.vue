<template>
  <div>
    <div style="background: linear-gradient(132deg, #fbfdff 0%, #f5f9ff 100%)">
      <div class="home_header">
        <div style="width: 1100px;height:900px; margin: auto; padding-top: 190px">
          <div>
            <!-- <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide class="swipers"
                ><img
                  style="width: 100%; position: relative; z-index: 10000"
                  src="../assets/homeimg01.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide class="swipers"
                ><img
                  style="width: 100%; position: relative; z-index: 10000"
                  src="../assets/homeimg02.png"
                  alt=""
              /></swiper-slide>
              <swiper-slide class="swipers"
                ><img
                  style="width: 100%; position: relative; z-index: 10000"
                  src="../assets/homeimg03.png"
                  alt=""
              /></swiper-slide>
            </swiper> -->
            <div @mouseenter="enter()" @mouseleave="leave()" ref="swip" v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide swipers">
                  <img
                    src="../assets/homeimg01.png"
                    style="width: 100%; position: relative; z-index: 10000"
                  />
                </div>
                <div class="swiper-slide swipers">
                  <img
                    src="../assets/homeimg02.png"
                    style="width: 100%; position: relative; z-index: 10000"
                  />
                </div>
                <div class="swiper-slide swipers">
                  <img  style="width: 100%; position: relative; z-index: 10000" src="../assets/homeimg03.png" />
                  
                </div>
              </div>
              <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
            </div>
          </div>
        </div>
      </div>
      <p class="home_p1">精准的功能覆盖，解决学校改革的每个痛点</p>
      <div class="home_div1">
        <div>
          <img src="../assets/homeimg04@2x_wps.png" alt="" />
        </div>
        <div class="home_div2">
          <p>便捷管理，学生实验全掌握</p>
          <p>
            轻松便捷进行实验管理，快速定位具体实验，全程了解实验进度，掌握学生综合素质。
          </p>
        </div>
      </div>
      <div class="home_div3">
        <div class="home_div4">
          <p>灵活操作，享受实验的乐趣</p>
          <p>
            灵活进行实验操作，享受实验带来的乐趣，记录学生操作细节，协助学生实验后总结。
          </p>
        </div>
        <div>
          <img src="../assets/homeimg05@2x_wps.png" alt="" />
        </div>
      </div>
      <div class="home_div1">
        <div>
          <img src="../assets/homeimg06@2x_wps.png" alt="" />
        </div>
        <div class="home_div2">
          <p>资讯预习，拓展实验宽度</p>
          <p>
            阅读实验相关资讯，观看实验操作视频，了解实验相关器材，事先充分准备，实验轻松进行。
          </p>
        </div>
      </div>
      <div class="footer_two">
        <p class="footer_two_p">平台带来的</p>
        <div class="footer_two_div">
          <div>
            <div style="width: 56px; heighit: 56px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/homeicon01@2x_wps.png"
                alt=""
              />
              <p class="footer_p1">简单易用</p>
              <p class="footer_p2">
                人性化界面设计，可视化简洁操作，迅速上手，敏捷实验。
              </p>
            </div>
          </div>
          <div>
            <div style="width: 56px; heighit: 56px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/homeicon02@2x_wps.png"
                alt=""
              />
              <p class="footer_p1">跨平台支持</p>
              <p class="footer_p2">
                完美支持苹果，安卓系统平台设备，无需担心设备不兼容。
              </p>
            </div>
          </div>
          <div>
            <div style="width: 56px; heighit: 56px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/homeicon03@2x_wps.png"
                alt=""
              />
              <p class="footer_p1">持续更新</p>
              <p class="footer_p2">
                周期性迭代，完善功能，提升用户体验，加强稳定性。
              </p>
            </div>
          </div>
          <div>
            <div style="width: 56px; heighit: 56px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/homeicon04@2x_wps.png"
                alt=""
              />
              <p class="footer_p1">快速响应</p>
              <p class="footer_p2">
                OSS对象存储，资源管理更安全，弹性伸缩，轻松应对突发流量。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/wrapper.css";
export default {
  name: "carrousel",
  data() {
    return {
       data:[
        {
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557543371,89408500&fm=26&gp=0.jpg'
        },{
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2699863970,3643884691&fm=26&gp=0.jpg'
        },{
          img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg'
        }
      ],
      // swiperOptions: {
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      //   slidesPerView: 3,
      //   spaceBetween: 30,
      //   centeredSlides: true,

      //   loop: true,

      //   autoplay: {
      //     delay: 3000,
      //     stopOnLastSlide: true,
      //     disableOnInteraction: true,
      //   },
      // },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: 2000,
        // initialSlide: 1,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        
        onSlideChangeEnd: (swiper) => {
          console.log("onSlideChangeEnd", swiper.realIndex);
        },
      },
      
    };
    
  },
  methods:{
    // btns(){
     
    //   let arr=[
    //     {
    //       img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3942751454,1089199356&fm=26&gp=0.jpg'
    //     },{
    //       img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg'
    //     },{
    //       img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2005235653,1742582269&fm=26&gp=0.jpg'
    //     }
    //   ]
    //   this.data=arr
    // },
    enter(){
      // console.log(this.swiperOption.autoplay)
      // this.swiperOption.autoplay=30000
      // this.$refs.swip.autoplay.stop()
    },
      leave(){
        // this.$refs.swip.autoplay.stop()
        // this.swiperOption.autoplay=2000
        // console.log(this.swiperOption.autoplay)
      },
    },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped>
.home_header {
  width: 100%;
  height: 508px;
  background-image: url("../assets/homebg.png");
  background-size: 100% 100%;
}
.home_p1 {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
  line-height: 70px;
  text-align: center;
  margin-top: 111px;
}
.home_div1 {
  /* margin-left: 25%; */
  display: flex;
  justify-content: center;
}
.home_div1 div:nth-child(1) {
  width: 421px;
  height: 239px;
}
.home_div1 div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.home_div2 {
  margin-left: 60px;
}
.home_div2 p:nth-child(1) {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #04123a;
  line-height: 33px;
  margin-top: 68px;
}
.home_div2 p:nth-child(2) {
  width: 379px;
  font-size: 18px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
  line-height: 25px;
}
.home_div3 {
  margin-left: 25%;
  display: flex;
  margin-top: 30px;
}
.home_div3 div:nth-child(2) {
  width: 421px;
  height: 239px;
}
.home_div3 div:nth-child(2) img {
  width: 100%;
  height: 100%;
}
.home_div4 {
  margin-left: 60px;
}
.home_div4 p:nth-child(1) {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #04123a;
  line-height: 33px;
  margin-top: 68px;
}
.home_div4 p:nth-child(2) {
  width: 379px;
  font-size: 18px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #04123a;
  line-height: 25px;
}
.footer_two {
  width: 100%;
  height: 502px;
  background: #fff;
}
.footer_two_p {
  font-size: 38px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  padding-top: 70px;
  text-align: center;
}
.footer_two_div {
  margin-top: 70px;
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.footer_p1 {
  width: 100px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 25px;
}
.footer_p2 {
  width: 180px;
  font-size: 14px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: rgba(4, 18, 58, 0.75);
  line-height: 20px;
}
.swipers {
  height: 400px;
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(1.2);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  opacity: 1;
  transform: scale(2);
  width: 60%;
  z-index: 1000;
}
</style>