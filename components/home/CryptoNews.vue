
<template>
    <div class="flex items-center justify-between mb-10 mt-24">
        <div class="w-full md:w-7/12">
            <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-5 "><span class="flex"><span class="strick-line-inline">Crypto News</span>  </span></h2>
            <p class="text-[#6B6C6F] text-xl font-normal leading-8 pr-10 text-left">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time!</p>
        </div>
            <div class="hidden md:flex image-area w-3/12">
                <img src="@/assets/img/crypto-news.svg" class="w-full h-auto" alt="">
            </div>
    </div>
    <div class="news-wrapper">
        <div class="news-inner">
            <swiper
            :breakpoints="{
      '300': {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }" 
                :modules="modules"
                :slides-per-view="3"
                :space-between="50"
                :pagination="{ clickable: true }"
                autoplay                
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/01.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">Epic Games is not following the ban on Minecraft NFT</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md  w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/02.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">ConsenSys auctions a new token for security audits</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md  w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/03.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">Binance fined 3.3 million euros from De Nederlandsche Bank</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md  w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/01.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">Epic Games is not following the ban on Minecraft NFT</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md  w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/02.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">ConsenSys auctions a new token for security audits</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-news bg-white p-4 rounded-2xl shadow transition hover:shadow-md w-full md:w-[362px]">
                        <div class="inner-news">
                            <div class="img-box flex justify-center items-center relative  bg-[#F5F8FF] mb-4">
                                <div class="product-img h-[188px] w-full overflow-hidden">
                                    <img class="object-cover w-full rounded-t-lg h-full mx-auto"
                                        src="@/assets/img/news/03.png" alt="image">
                                </div>
                                <div class="news-tag bg-[#EBF1FF] px-[10px] py-[6px] rounded">
                                    <span class="text-cblue font-semibold text-sm">NEWS</span>
                                </div>
                            </div>
                            <h4 class="text-black text-xl font-semibold leading-7 mb-2">Binance fined 3.3 million euros from De Nederlandsche Bank</h4>
                            <div class="text-black text-xs font-normal mb-5">Jul 25, 2022 • Read: 5 min</div>
                            <div class="mb-5 h-16 overflow-hidden news-des">
                                <p class="text-[#6B6C6F] font-normal text-sm">Cryptocurrency news in an easy way. Monitor capitalization, price, daily volume, and price changes of any coin in real time Crypto make</p>
                            </div>
                            <div class="read-more-btn text-center mx-auto">
                                <a href="" class="group text-cblue bg-white flex items-center justify-center border-2 border-[#0051FF] py-2 transition hover:bg-cblue hover:text-white rounded-xl ">Read More <svg class="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" class="group-hover:fill-white" clip-rule="evenodd" d="M10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L18.2071 9.29289C18.5976 9.68342 18.5976 10.3166 18.2071 10.7071L12.2071 16.7071C11.8166 17.0976 11.1834 17.0976 10.7929 16.7071C10.4024 16.3166 10.4024 15.6834 10.7929 15.2929L15.0858 11L3.5 11C2.94772 11 2.5 10.5523 2.5 10C2.5 9.44772 2.94772 9 3.5 9H15.0858L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289Z" fill="#0051FF"/>
</svg>
</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div class="button-v text-center mt-5">
    <button type="button" class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View More</button>
</div>
</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

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
        modules: [Pagination, A11y, Autoplay],
      };
    },
  };
</script>
<style>
.news-inner .swiper-pagination {
    top: 0;
    text-align: right;
    bottom: auto;
}

.news-inner .swiper-wrapper {
    padding: 30px 0 0;
}
.news-inner .swiper-pagination-bullet {
    height: 9px;
    width: 9px;
}

.news-inner .swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    content: "";
    width: 17px;
    height: 17px;
    background: transparent;
    position: absolute;
    left: -4px;
    top: -4px;
    border-radius: 50px;
    border: 1px solid #027ffa;
}

.news-inner .swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
}
.news-inner .swiper-pagination {
    display: block;
}
@media only screen and (max-width: 769px) {
.co-logo .co-i {
    justify-content: center!important;
    display: flex;
}
.news-inner .swiper-pagination {
    display: none;
}
}
</style>