<script setup>
const route = useRoute();

const slag = computed(() => {
    return route.params.slag.replaceAll("-", " ");
});

</script>
<script>
export default {

  data() {
    return {
        buttonTrue: false,
      activeTab: 0,
      tabs: ["Cryptocurrency", "Payment Methods", "Payout Methods", "Compensation"]
    };
  },
  methods: {
    removeClass() {
      // Logic to remove the class from the div
      // Replace 'your-div-class' with the actual class name of your div
      const divElement = document.querySelector('.post-content');
      divElement.classList.remove('mh-fixed');
      this.buttonTrue = true;
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.product-table-wrapper.exchange-rate:after {
    display: none;
}

.product-table-wrapper.exchange-rate {
    height: 500px;
    overflow-y: overlay;
}

</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
        <div class="container mx-auto max-w-screen-xl  page-heading"> <!-- container start -->

            <ExchangesDetailsTopSection :slag="slag" />
        </div> <!-- container end -->
    </section>
    <section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl"> <!-- container start -->
            <div class="detail-content flex flex-col md:flex-row items-start justify-between">
                <div class="w-full md:w-[800px]">
                    <div class="post-content mh-fixed">
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Introduction</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Bitvavo currently has nearly 90 different
                                cryptocurrencies on the platform. This is a lot smaller compared to others, but this is a
                                conscious choice by Bitvavo. When a project is added to the platform, it must have proven itself
                                and have a demonstrable purpose. When a project wants to be added to the range, it must undergo
                                a strict listing. You will see that when you compare it with other brokers, Bitvavo is a bit
                                stricter. The best projects with the highest potential are given a place in the range.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Advantages of Bitvavo</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Bitvavo has quite a lot of advantages
                                compared to many other cryptocurrency platforms, we will explain a few of them for you.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">User friendly</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">It is a very user-friendly platform and is
                                known for its ease and simplicity. This makes trading very attractive for novice traders. It is
                                also interesting for the experienced trader, because it has an advanced interface which makes it
                                very ideal for both types of traders!</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Easy and simple deposit money</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">You can deposit money at Bitvavo with iDEAL,
                                bank transfer, credit card, Bancontact or SEPA payment. So very handy. When you pay with iDEAL
                                or bank transfer, no fee is charged. With iDEAL there is also a minimum investment of only €1,
                                so you can start trading really small.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Bitvavo is cheap</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Compared to other brokers, Bitvavo is very
                                cheap. They charge a low commission of up to 0.25% and you can trade the first $1,000 at no
                                cost.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Fast customer service</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Bitvavo's customer service is very fast and
                                will provide detailed answers to your question within a few hours. In addition, Bitvavo has an
                                extensive support page where the most frequently asked questions are clearly arranged. Choose
                                the topic you want to search for, or use the search bar at the top of the page.</p>
                        </div>
                        
                    </div>
                    <div class="text-center mb-10 block md:hidden">
                        <button @click="removeClass" :class="{ 'hidden': buttonTrue }" class="read-more-btn bg-[#1F3157] text-white w-auto mx-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">
                                    Read More
                                </button>
                    </div>
                    
                    <div class="block md:hidden sidebar-info">
                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h3 class=" text-2xl font-normal text-black">Overall rating</h3>
                            <div class="rating mb-6">
                                <div class="">
                                    <span class="font-semibold text-[40px]">4.9</span><span
                                        class="text-[#6B6C6F] text-2xl">/5</span><span
                                        class="text-[#6B6C6F] text-base font-normal">(30 Reviews)</span>
                                </div>
                                <div class="rating-star flex items-center gap-[10px]">
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84016 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#DDE0E7" />
                                    </svg>

                                </div>
                            </div>
                            <div class="rating-info mb-12">
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Ease of use</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Value for money</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Verification</span> <span class="">4</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 80%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Support</span> <span class="">3.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 70%"></div>
                                    </div>
                                </div>
                            </div>
                            <a href=""
                                class="text-[#0051FF] text-base font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex mx-auto items-center justify-center"
                                data-v-7fd49c2f="">
                                <span class="mr-1.5" data-v-7fd49c2f="">Go to Website</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f="">
                                    <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        data-v-7fd49c2f=""></path>
                                </svg>
                            </a>
                        </div>
                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h3 class=" text-2xl font-normal text-black mb-5">Properties</h3>
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.0001 10.8V8.40002C6.0001 5.08632 8.68639 2.40002 12.0001 2.40002C15.3138 2.40002 18.0001 5.08632 18.0001 8.40002V10.8C19.3256 10.8 20.4001 11.8745 20.4001 13.2V19.2C20.4001 20.5255 19.3256 21.6 18.0001 21.6H6.0001C4.67461 21.6 3.6001 20.5255 3.6001 19.2V13.2C3.6001 11.8745 4.67461 10.8 6.0001 10.8ZM15.6001 8.40002V10.8H8.4001V8.40002C8.4001 6.4118 10.0119 4.80002 12.0001 4.80002C13.9883 4.80002 15.6001 6.4118 15.6001 8.40002Z"
                                        fill="#0051FF" />
                                </svg>
                                Two-factor Authentication
                            </div>
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.4 2.40002C7.07452 2.40002 6 3.47454 6 4.80002V19.2C6 20.5255 7.07452 21.6 8.4 21.6H15.6C16.9255 21.6 18 20.5255 18 19.2V4.80002C18 3.47454 16.9255 2.40002 15.6 2.40002H8.4ZM12 19.2C12.6627 19.2 13.2 18.6628 13.2 18C13.2 17.3373 12.6627 16.8 12 16.8C11.3373 16.8 10.8 17.3373 10.8 18C10.8 18.6628 11.3373 19.2 12 19.2Z"
                                        fill="#0051FF" />
                                </svg>

                                Mobile App
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.8507 12.3516C12.6167 12.1176 12.3095 12 12.0023 12C11.6951 12 11.3879 12.1176 11.1539 12.3516L8.7539 14.7516C8.4959 15.0096 8.3747 15.3636 8.4071 15.7152C8.4191 15.8328 8.4467 15.9468 8.4935 16.0596C8.6783 16.5072 9.1175 16.8 9.6023 16.8H10.7999V20.4C10.7999 21.0636 11.3363 21.6 11.9999 21.6C12.6635 21.6 13.1999 21.0636 13.1999 20.4V16.8H14.4023C14.8871 16.8 15.3263 16.5072 15.5111 16.0596C15.5579 15.9468 15.5855 15.8328 15.5951 15.7152C15.6275 15.3636 15.5063 15.0096 15.2507 14.7516L12.8507 12.3516ZM17.9999 8.40002C17.9399 8.40002 17.8835 8.41442 17.8247 8.41802C17.9267 8.02682 17.9999 7.62362 17.9999 7.20002C17.9999 4.54922 15.8507 2.40002 13.1999 2.40002C10.8911 2.40002 8.9663 4.03082 8.5067 6.20282C8.0879 6.08402 7.6571 6.00002 7.1999 6.00002C4.5491 6.00002 2.3999 8.14922 2.3999 10.8V12C2.3999 14.3004 4.0199 16.218 6.1787 16.686C6.1043 16.4484 6.0443 16.2048 6.0179 15.954C5.9171 14.8668 6.2951 13.8156 7.0559 13.0548L9.4559 10.6548C10.1363 9.97442 11.0411 9.60002 12.0023 9.60002C12.9635 9.60002 13.8683 9.97442 14.5475 10.6548L16.9475 13.0548C17.7095 13.824 18.0839 14.8716 17.9843 15.9372C17.9615 16.2156 17.8883 16.5108 17.7851 16.8H17.9999C19.9883 16.8 21.5999 15.1884 21.5999 13.2V12C21.5999 10.0128 19.9883 8.40002 17.9999 8.40002Z"
                                    fill="#0051FF" />
                            </svg>


                            Cold Storage
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.7998 4.80002C4.7998 3.47454 5.87432 2.40002 7.1998 2.40002H12.7027C13.3393 2.40002 13.9497 2.65288 14.3998 3.10297L18.4969 7.20002C18.9469 7.65011 19.1998 8.26056 19.1998 8.89708V19.2C19.1998 20.5255 18.1253 21.6 16.7998 21.6H7.1998C5.87432 21.6 4.7998 20.5255 4.7998 19.2V4.80002ZM7.1998 12C7.1998 11.3373 7.73706 10.8 8.3998 10.8H15.5998C16.2625 10.8 16.7998 11.3373 16.7998 12C16.7998 12.6628 16.2625 13.2 15.5998 13.2H8.3998C7.73706 13.2 7.1998 12.6628 7.1998 12ZM8.3998 15.6C7.73706 15.6 7.1998 16.1373 7.1998 16.8C7.1998 17.4628 7.73706 18 8.3998 18H15.5998C16.2625 18 16.7998 17.4628 16.7998 16.8C16.7998 16.1373 16.2625 15.6 15.5998 15.6H8.3998Z"
                                    fill="#0051FF" />
                            </svg>
                            Affiliate Program
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.59923 5.99871C6.20915 5.94974 9.49824 4.57242 11.9999 2.33337C14.5016 4.57242 17.7907 5.94974 21.4006 5.99871C21.5317 6.77964 21.5999 7.58188 21.5999 8.40006C21.5999 14.6699 17.5928 20.0038 11.9999 21.9806C6.40698 20.0038 2.3999 14.6699 2.3999 8.40006C2.3999 7.58188 2.46814 6.77964 2.59923 5.99871ZM16.4484 10.4486C16.9171 9.97992 16.9171 9.22013 16.4484 8.7515C15.9798 8.28287 15.22 8.28287 14.7514 8.7515L10.7999 12.703L9.24843 11.1515C8.7798 10.6829 8.02 10.6829 7.55137 11.1515C7.08275 11.6201 7.08275 12.3799 7.55137 12.8486L9.95137 15.2486C10.42 15.7172 11.1798 15.7172 11.6484 15.2486L16.4484 10.4486Z"
                                    fill="#0051FF" />
                            </svg>
                            Instant Verification
                        </div>
                        <div class="flex items-center gap-[10px]"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H16.5C17.2956 3 18.0587 3.31607 18.6213 3.87868C19.1839 4.44129 19.5 5.20435 19.5 6V6.402C19.956 6.6653 20.3348 7.044 20.5981 7.50004C20.8614 7.95609 21 8.4734 21 9V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6.75C5.75544 21 4.80161 20.6049 4.09835 19.9016C3.39509 19.1984 3 18.2446 3 17.25V5.25ZM4.5 5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H18C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5H5.25C5.05109 4.5 4.86032 4.57902 4.71967 4.71967C4.57902 4.86032 4.5 5.05109 4.5 5.25ZM15.75 12C15.5511 12 15.3603 12.079 15.2197 12.2197C15.079 12.3603 15 12.5511 15 12.75C15 12.9489 15.079 13.1397 15.2197 13.2803C15.3603 13.421 15.5511 13.5 15.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12H15.75Z"
                                    fill="#0051FF" />
                            </svg>
                            Integrated Wallet
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                        <h3 class=" text-2xl font-normal text-black mb-5">Explore Alternative</h3>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Bitvavo.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Bitvavo
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag01.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/OKEX.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">OKEX
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag02.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Huobi_Global.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Huobi Global
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag03.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Coinbase_Pro.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Coinbase Pro
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag05.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href=""
                                                class="group text-base text-[#0051FF] font-medium flex items-center justify-center mt-6">All Exchanges <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a>
                    </div>
                  
                </div>
                    <div class="flex flex-col">
    <div class="flex flex-col md:flex-row">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{
          'bg-[#0051FF] text-white font-semibold': activeTab === index,
          'bg-[#D1D8E8] font-normal': activeTab !== index
        }"
        class="px-4 py-3 text-xs  rounded-tl-lg rounded-tr-lg mr-2 focus:outline-none"
      >
        {{ tab }}
      </button>
    </div>
    <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 200 }">
      <div :key="activeTab" class="">
        <div v-if="activeTab === 0">
            <div class="product-table-wrapper exchange-rate">
        <table class="w-full">
            <thead class="table-head">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">#</th>
                    <th>CRYPTO</th>
                    <th class=" md:table-cell hidden">Buy</th>
                    <th class=" md:table-cell hidden">Sell</th>
                    <th class=" md:table-cell hidden">24h %</th>
                    <th class=" table-cell md:hidden">Buy / 24h%</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">1</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/apple.png" class="mr-2" alt=""> Apple</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class=" table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 22.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">2</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/saudi-aramco.png" class="mr-2" alt=""> Saudi Aramco</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 1007,31</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 1.507,31</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 22.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">3</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/microsoft.png" class="mr-2" alt=""> Microsoft</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">4</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/google.png" class="mr-2" alt=""> Alphabet (Google)</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 22.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">5</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/amazon.png" class="mr-2" alt=""> Amazon</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 22.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">6</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/tesla.png" class="mr-2" alt=""> Tesla</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">7</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/berkshire.png" class="mr-2" alt=""> Berkshire Hathaway</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">8</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/meta.png" class="mr-2" alt=""> Meta Platform</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">9</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/Johnson-Johnson.png" class="mr-2" alt=""> Johnson & Johnson</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">10</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/UnitedHealth.png" class="mr-2" alt=""> UnitedHealth</span></td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal md:table-cell hidden">€ 20.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex flex-col">
                            <div class="text-black text-sm font-normal">€ 20.546,00</div>
                            <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                        </div>
                    </td>
                    <td class=" md:table-cell hidden">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
        </div>
        <div v-if="activeTab === 1">Content for Tab 2</div>
        <div v-if="activeTab === 2">Content for Tab 3</div>
        <div v-if="activeTab === 3">Content for Tab 4</div>
      </div>
    </transition>
                    </div>

                    <ReviewCustomerReview />
                    
                </div>
                <div class="hidden md:flex md:w-[298px]">
                    <div class="sidebar-info">
                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h3 class=" text-2xl font-normal text-black">Overall rating</h3>
                            <div class="rating mb-6">
                                <div class="">
                                    <span class="font-semibold text-[40px]">4.9</span><span
                                        class="text-[#6B6C6F] text-2xl">/5</span><span
                                        class="text-[#6B6C6F] text-base font-normal">(30 Reviews)</span>
                                </div>
                                <div class="rating-star flex items-center gap-[10px]">
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84015 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#FFD600" />
                                    </svg>
                                    <svg width="30" height="28" viewBox="0 0 30 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84016 10.1269 7.58909L14.1302 0.533005Z"
                                            fill="#DDE0E7" />
                                    </svg>

                                </div>
                            </div>
                            <div class="rating-info mb-12">
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Ease of use</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Value for money</span> <span class="">4.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Verification</span> <span class="">4</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 80%"></div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="text-base font-normal text-black flex items-center justify-between mb-1">
                                        <span class="">Support</span> <span class="">3.5</span>
                                    </div>
                                    <div class="h-[10px] w-full bg-[#F1F5FE] rounded-[10px]">
                                        <div class="h-[10px] bg-[#0051FF] rounded-[10px]" style="width: 70%"></div>
                                    </div>
                                </div>
                            </div>
                            <a href=""
                                class="text-[#0051FF] text-base font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex mx-auto items-center justify-center"
                                data-v-7fd49c2f="">
                                <span class="mr-1.5" data-v-7fd49c2f="">Go to Website</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f="">
                                    <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                        d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                        stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        data-v-7fd49c2f=""></path>
                                </svg>
                            </a>
                        </div>
                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h3 class=" text-2xl font-normal text-black mb-5">Properties</h3>
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.0001 10.8V8.40002C6.0001 5.08632 8.68639 2.40002 12.0001 2.40002C15.3138 2.40002 18.0001 5.08632 18.0001 8.40002V10.8C19.3256 10.8 20.4001 11.8745 20.4001 13.2V19.2C20.4001 20.5255 19.3256 21.6 18.0001 21.6H6.0001C4.67461 21.6 3.6001 20.5255 3.6001 19.2V13.2C3.6001 11.8745 4.67461 10.8 6.0001 10.8ZM15.6001 8.40002V10.8H8.4001V8.40002C8.4001 6.4118 10.0119 4.80002 12.0001 4.80002C13.9883 4.80002 15.6001 6.4118 15.6001 8.40002Z"
                                        fill="#0051FF" />
                                </svg>
                                Two-factor Authentication
                            </div>
                            <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.4 2.40002C7.07452 2.40002 6 3.47454 6 4.80002V19.2C6 20.5255 7.07452 21.6 8.4 21.6H15.6C16.9255 21.6 18 20.5255 18 19.2V4.80002C18 3.47454 16.9255 2.40002 15.6 2.40002H8.4ZM12 19.2C12.6627 19.2 13.2 18.6628 13.2 18C13.2 17.3373 12.6627 16.8 12 16.8C11.3373 16.8 10.8 17.3373 10.8 18C10.8 18.6628 11.3373 19.2 12 19.2Z"
                                        fill="#0051FF" />
                                </svg>

                                Mobile App
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.8507 12.3516C12.6167 12.1176 12.3095 12 12.0023 12C11.6951 12 11.3879 12.1176 11.1539 12.3516L8.7539 14.7516C8.4959 15.0096 8.3747 15.3636 8.4071 15.7152C8.4191 15.8328 8.4467 15.9468 8.4935 16.0596C8.6783 16.5072 9.1175 16.8 9.6023 16.8H10.7999V20.4C10.7999 21.0636 11.3363 21.6 11.9999 21.6C12.6635 21.6 13.1999 21.0636 13.1999 20.4V16.8H14.4023C14.8871 16.8 15.3263 16.5072 15.5111 16.0596C15.5579 15.9468 15.5855 15.8328 15.5951 15.7152C15.6275 15.3636 15.5063 15.0096 15.2507 14.7516L12.8507 12.3516ZM17.9999 8.40002C17.9399 8.40002 17.8835 8.41442 17.8247 8.41802C17.9267 8.02682 17.9999 7.62362 17.9999 7.20002C17.9999 4.54922 15.8507 2.40002 13.1999 2.40002C10.8911 2.40002 8.9663 4.03082 8.5067 6.20282C8.0879 6.08402 7.6571 6.00002 7.1999 6.00002C4.5491 6.00002 2.3999 8.14922 2.3999 10.8V12C2.3999 14.3004 4.0199 16.218 6.1787 16.686C6.1043 16.4484 6.0443 16.2048 6.0179 15.954C5.9171 14.8668 6.2951 13.8156 7.0559 13.0548L9.4559 10.6548C10.1363 9.97442 11.0411 9.60002 12.0023 9.60002C12.9635 9.60002 13.8683 9.97442 14.5475 10.6548L16.9475 13.0548C17.7095 13.824 18.0839 14.8716 17.9843 15.9372C17.9615 16.2156 17.8883 16.5108 17.7851 16.8H17.9999C19.9883 16.8 21.5999 15.1884 21.5999 13.2V12C21.5999 10.0128 19.9883 8.40002 17.9999 8.40002Z"
                                    fill="#0051FF" />
                            </svg>


                            Cold Storage
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.7998 4.80002C4.7998 3.47454 5.87432 2.40002 7.1998 2.40002H12.7027C13.3393 2.40002 13.9497 2.65288 14.3998 3.10297L18.4969 7.20002C18.9469 7.65011 19.1998 8.26056 19.1998 8.89708V19.2C19.1998 20.5255 18.1253 21.6 16.7998 21.6H7.1998C5.87432 21.6 4.7998 20.5255 4.7998 19.2V4.80002ZM7.1998 12C7.1998 11.3373 7.73706 10.8 8.3998 10.8H15.5998C16.2625 10.8 16.7998 11.3373 16.7998 12C16.7998 12.6628 16.2625 13.2 15.5998 13.2H8.3998C7.73706 13.2 7.1998 12.6628 7.1998 12ZM8.3998 15.6C7.73706 15.6 7.1998 16.1373 7.1998 16.8C7.1998 17.4628 7.73706 18 8.3998 18H15.5998C16.2625 18 16.7998 17.4628 16.7998 16.8C16.7998 16.1373 16.2625 15.6 15.5998 15.6H8.3998Z"
                                    fill="#0051FF" />
                            </svg>
                            Affiliate Program
                        </div>
                        <div class="flex items-center gap-[10px] mb-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.59923 5.99871C6.20915 5.94974 9.49824 4.57242 11.9999 2.33337C14.5016 4.57242 17.7907 5.94974 21.4006 5.99871C21.5317 6.77964 21.5999 7.58188 21.5999 8.40006C21.5999 14.6699 17.5928 20.0038 11.9999 21.9806C6.40698 20.0038 2.3999 14.6699 2.3999 8.40006C2.3999 7.58188 2.46814 6.77964 2.59923 5.99871ZM16.4484 10.4486C16.9171 9.97992 16.9171 9.22013 16.4484 8.7515C15.9798 8.28287 15.22 8.28287 14.7514 8.7515L10.7999 12.703L9.24843 11.1515C8.7798 10.6829 8.02 10.6829 7.55137 11.1515C7.08275 11.6201 7.08275 12.3799 7.55137 12.8486L9.95137 15.2486C10.42 15.7172 11.1798 15.7172 11.6484 15.2486L16.4484 10.4486Z"
                                    fill="#0051FF" />
                            </svg>
                            Instant Verification
                        </div>
                        <div class="flex items-center gap-[10px]"><svg width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H16.5C17.2956 3 18.0587 3.31607 18.6213 3.87868C19.1839 4.44129 19.5 5.20435 19.5 6V6.402C19.956 6.6653 20.3348 7.044 20.5981 7.50004C20.8614 7.95609 21 8.4734 21 9V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6.75C5.75544 21 4.80161 20.6049 4.09835 19.9016C3.39509 19.1984 3 18.2446 3 17.25V5.25ZM4.5 5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H18C18 5.60218 17.842 5.22064 17.5607 4.93934C17.2794 4.65804 16.8978 4.5 16.5 4.5H5.25C5.05109 4.5 4.86032 4.57902 4.71967 4.71967C4.57902 4.86032 4.5 5.05109 4.5 5.25ZM15.75 12C15.5511 12 15.3603 12.079 15.2197 12.2197C15.079 12.3603 15 12.5511 15 12.75C15 12.9489 15.079 13.1397 15.2197 13.2803C15.3603 13.421 15.5511 13.5 15.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12H15.75Z"
                                    fill="#0051FF" />
                            </svg>
                            Integrated Wallet
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                        <h3 class=" text-2xl font-normal text-black mb-5">Explore Alternative</h3>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Bitvavo.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Bitvavo
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag01.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/OKEX.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">OKEX
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag02.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Huobi_Global.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Huobi Global
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag03.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Coinbase_Pro.png" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Coinbase Pro
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag05.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href=""
                                                class="group text-base text-[#0051FF] font-medium flex items-center justify-center mt-6">All Exchanges <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</section></template>