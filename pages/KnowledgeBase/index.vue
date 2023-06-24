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
        //   renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        //   },
        },
        modules: [Pagination, A11y, Autoplay],
      };
    },
  };

</script> 
<style>
.knowledge-slider .swiper-pagination {
    top: 0;
    text-align: right;
    bottom: auto;
}

.knowledge-slider .swiper-wrapper {
    padding: 30px 0 0;
}

.knowledge-slider span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #0051FF;
}

.knowledge-slider .swiper-pagination-bullet {
    height: 6px;
    width: 6px;
}

.knowledge-slider .swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    content: "";
    width: 14px;
    height: 14px;
    background: transparent;
    position: absolute;
    left: -4px;
    top: -4px;
    border-radius: 50px;
    border: 1px solid #027ffa;
}

.knowledge-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
    position: relative;
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl page-heading">  <!-- container start -->
        <div class="flex items-center justify-between mb-10">
            <div class="w-full md:w-8/12">
                <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-5 flex items-center">
                    Knowledge Base</h2>
                <p class="text-[#6B6C6F] text-xl font-normal leading-8 pr-12">Learn more about the world of cryptocurrency with our knowledge base. In our knowledge base you will find the answers to all your basic and advanced crypto questions. We are working hard to update this knowledge base regularly with new questions that help not only the novice cryptocurrency investor but also the experienced traders..</p>
            </div>
            <div class="hidden md:flex call-to-action relative top-sec image-area p-12 w-4/12">
                <img src="@/assets/img/knowledge-page-top.svg" class="w-full h-auto" alt="">
            </div>
        </div>
        <div class="knowledge-slider">
            <h3 class="font-semibold text-[32px] text-black">Top Coins of this month</h3>
            <div class="flex items-center justify-between gap-[30px]">
                <swiper     
                :breakpoints="{
      '300': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 16,
      },
    }" 
    :modules="modules"
    :slides-per-view="5"
    :space-between="16"    
    autoplay
    :pagination="pagination"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
  <swiper-slide>
        <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="inline-flex items-center px-6 py-3">
                <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                    </li>
                </ul>
            </div>
        </div>
    </swiper-slide>
    </swiper>
        
    </div>
        </div>
    </div>  <!-- container end -->
</section>
<section class="w-full bg-[#F1F5FE] pb-20 p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="mb-10">
            <h2 class="font-semibold text-[32px] text-black">Introduction</h2>
            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> The moment you start investing in cryptocurrencies, a lot comes at you. The crypto market is therefore a complete market in itself in which specific terms are often used. In addition, you should always keep in mind that a mistake you make can have serious consequences. For example, did you enter an incorrect wallet address? Then that will almost always result in losing your coins. To make sure every cryptocurrency investor is as prepared as possible, we've put together an extensive knowledge base packed with valuable information.. The content of our knowledge base can ensure that you receive a lot of valuable information about your (potential) investment in cryptocurrencies. That said, it's always important to do your own research. In addition, always keep in mind that investing in cryptocurrencies involves certain risks. Does the project you invested in go wrong or is there a hack where a lot of coins are stolen? Then that can significantly and especially negatively affect the value of the cryptocurrency in which you have invested. Good preparation is therefore always a must before you start investing in cryptocurrencies. In any case, our knowledge base can make a nice contribution to this. </p>
        </div>
        <div class="more-info-topics">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-y-[30px} gap-x-10">
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Blockchain</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>ERC2​​0 tokens
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Bitcoin</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Online wallets
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Cryptocurrency Value
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Privacy disclaimer
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Sell Bitcoin
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Current rate
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Types of Bitcoins
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Limit order
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Buy crypto
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Stop Limit
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Exchange traded fund
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Crypto transaction fees
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Software wallets
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Cryptocurrency Trading
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Crypto signals
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>ICO Scam
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Bitcoin Code Scams
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>What is a Wirex card?
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Which Crypto to Buy
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>EtherScan</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Bitcoin News
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Taxation of cryptocurrencies
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Crypto meaning
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Stop Loss
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Which crypto to invest in
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>NFT</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Best trading bot crypto
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Hardware wallets
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
</template>