<script>
  // import Swiper core and required modules
  import { Pagination, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,        
        pagination: {
          clickable: true,
        },
        modules: [Pagination, A11y, Autoplay],
      };
    },
  };

</script> 
<style>


.blog-news-slider .swiper-slide:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #161C4B00 0%,#0D1138 100%);
    z-index: 1;
}
.blog-news-slider .swiper-slide {
    border-radius: 15px;
    overflow: hidden;
}
.blog-news-slider span.swiper-pagination-bullet {
    background: rgb(255 255 255 / 60%);
    height: 6px;
    width: 6px;
    display: block;
    margin: 0 15px 5px 0!important;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
    border-radius: 6px;
    background: #ffffff;
}
.blog-news-slider .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 20px;
    left: auto;
    right: 10px;
    width: auto;
}
@media only screen and (max-width: 769px) {
.swiper {
    margin-top: 0;
}
}
</style>
<template>
    <div class="">
        <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="0"
                    autoplay
                    :pagination="pagination"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">
                    
                    <div class="h-[307px] md:h-[523px] w-full lg:w-[849px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[307px] md:h-[523px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                        <img class="object-cover absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-auto h-auto mb-0" src="@/assets/img/news-01.jpg" alt="icon">
                                    </span>
                                    <!-- <img src="@/assets/img/slider/001.jpg" class="absolute h-[362px] lg:h-auto w-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[307px] md:h-[523px]">
                                        <div class="">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                <a href="#">
                                                    <span class="w-fit bg-[#EBF1FF] text-[#0051FF] text-base font-semibold mr-1 px-2.5 py-1.5 rounded whitespace-nowrap">NEWS</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Sports betting with crypto, is it allowed in the Netherlands?</h2>
                                                <p class="text-[#D9D9D9] text-base font-normal">There is little more fun than betting on an exciting match and if you invite a few friends or family members, it quickly becomes a fun battle. You would prefer to use your crypto to bet on your match and you have seen that that is already an option with some foreign...</p>
                                            
                                        <div class="flex items-center justify-between mt-10">
                                            <a href="" class="group flex items-center gap-2 text-white font-semibold text-base">Read more <svg class=" translate-x-0 transition group-hover:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z" fill="white"/>
</svg>
</a>
<div class="text-white font-normal text-sm"><span>Jul 25, 2022 • Read: 5 min</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">                    
                    <div class="h-[307px] md:h-[523px] w-full lg:w-[849px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[307px] md:h-[523px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                     <img class="object-cover absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-auto h-auto mb-0" src="@/assets/img/news-01.jpg" alt="icon">
                                </span>
                                    <!-- <img src="@/assets/img/slider/001.jpg" class="absolute h-[362px] lg:h-auto w-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[307px] md:h-[523px]">
                                        <div class="">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#"><span class="w-fit bg-[#EBF1FF] text-[#0051FF] text-base font-semibold mr-1 px-2.5 py-1.5 rounded whitespace-nowrap">NEWS</span></a>
                                                </div>
                                        </div>
                                            <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Sports betting with crypto, is it allowed in the Netherlands?</h2>
                                                <p class="text-[#D9D9D9] text-base font-normal">There is little more fun than betting on an exciting match and if you invite a few friends or family members, it quickly becomes a fun battle. You would prefer to use your crypto to bet on your match and you have seen that that is already an option with some foreign...</p>
                                            
                                            <div class="flex items-center justify-between mt-10">
                                                <a href="" class="group flex items-center gap-2 text-white font-semibold text-base">Read more <svg class=" translate-x-0 transition group-hover:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z" fill="white"/>
</svg>
</a>
<div class="text-white font-normal text-sm"><span>Jul 25, 2022 • Read: 5 min</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
                <swiper-slide>
                <!-- slider-area start -->
                <div class="slider-area">
                    
                    <div class="h-[307px] md:h-[523px] w-full lg:w-[849px] relative overflow-hidden rounded-[15px] ">                       
                                    <span class="overlay"></span>
                                    <span class="fixed-size overflow-hidden h-[307px] md:h-[523px] w-[96vw] md:w-[60vw] lg:w-[668px] rounded-[15px]">
                                     <img class="object-cover absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-auto h-auto mb-0" src="@/assets/img/news-01.jpg" alt="icon">
                                </span>
                                    <!-- <img src="@/assets/img/slider/001.jpg" class="absolute h-[362px] lg:h-auto w-full flex -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
                                    <div class="inner-content w-full z-20 grid grid-cols-1 gap-1 sm:gap-4 items-baseline h-[307px] md:h-[523px]">
                                        <div class="">
                                            <div class="news-tags flex flex-nowrap items-center justify-start"> 
                                                    <a href="#"><span class="w-fit bg-[#EBF1FF] text-[#0051FF] text-base font-semibold mr-1 px-2.5 py-1.5 rounded whitespace-nowrap">NEWS</span></a>
                                                </div>
                                        </div>
                                            <div class="bottom-content text-left flex flex-col mt-14">
                                                <h2 class="text-2xl md:text-[32px] font-bold text-white w-[290px] sm:w-[488px] leading-9 mb-3">Sports betting with crypto, is it allowed in the Netherlands?</h2>
                                                <p class="text-[#D9D9D9] text-base font-normal">There is little more fun than betting on an exciting match and if you invite a few friends or family members, it quickly becomes a fun battle. You would prefer to use your crypto to bet on your match and you have seen that that is already an option with some foreign...</p>
                                            
                                            <div class="flex items-center justify-between mt-10">
                                                <a href="" class="group flex items-center gap-2 text-white font-semibold text-base">Read more <svg class=" translate-x-0 transition group-hover:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z" fill="white"/>
</svg>
</a>
<div class="text-white font-normal text-sm"><span>Jul 25, 2022 • Read: 5 min</span></div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                </div>
                <!-- slider-area end -->   
                
                </swiper-slide>
        </swiper>
    </div>
</template>