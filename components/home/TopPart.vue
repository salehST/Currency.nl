<template>

            <div class="flex items-start home-top-content mb-8 md:mb-24 mt-16 md:mt-0">
                <div class=" left-part w-full pr-0 lg:pr-6 lg:w-1/2">
                    <div class="hidden md:flex items-center gap-1 mb-6">
                        <img src="@/assets/img/verified.svg" class=" h-5 w-5" alt=""> <h1 class=" text-base">Trusted and verified by Currency.nl</h1>
                    </div>
                    <h2 class=" text-[32px] text-primary md:text-5xl mb-6 font-bold leading-9 md:leading-[57px]">Want to Buy crypto?
                        <span class="strick-line">Compare all cryptos</span> 
                        & exchanges here
                    </h2>
                    <p class=" text-sm md:text-xl font-normal text-[#6B6C6F] leading-6 md:leading-8 pr-12 mb-12">Find the best exchanges to buy crypto based on prices, features, reviews and more.</p>

                    <div class="">
                        <div class="single-coin-info border border-[#CBD7F1] rounded-2xl md:rounded-full p-6">
                            <div class="coin-info flex items-center justify-between">
                                <img src="@/assets/img/logos/btc.png" class=" h-10 w-10" alt=""> 
                                <span class=" text-xl font-normal flex items-center">Bitcoin (BTC) <img src="@/assets/img/rating-arrow-black-down.svg" class="ml-2 h-3 w-[14px] " alt="">
                                </span>
                                <span class="coin-price text-xl font-semibold">€22755</span>
                                <div class="hidden md:inline-block buy-button group">
                                    <a class="bg-cblue text-white flex items-center py-2 px-7 rounded-full" href="">Buy Now<img src="@/assets/img/arrow-right-white-bg.svg" class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                                </div>
                            </div>
                            <div class="block md:hidden buy-button group w-full border-t pt-4 mt-4 border-[#DEE4F1]">
                                    <a class="bg-cblue text-white flex items-center justify-center py-2 px-7 rounded-full" href="">Buy Now<img src="@/assets/img/arrow-right-white-bg.svg" class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-part hidden lg:block w-full relative lg:w-1/2 px-5 ">
                    <div class="relative px-7">
                        <div class="currency-info-list">
                            <div class="currency-info-inner">
                                <div class="single-currency-info border border-[#E0E0E0] bg-white rounded-lg p-6 mb-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="@/assets/img/logos/btc.png" class=" h-10 w-10 mr-2" alt=""> 
                                            <ul>
                                                <li class="text-black text-xl font-semibold">Bitcoin (BTC)</li>
                                                <li class="flex items-center text-base font-normal">
                                                    <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                                    <span class="text-[#E71212] mr-3">-2.62 %</span> 
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class="bg-[#1F3157] w-auto opacity-100 hover:opacity-90 transition text-white flex text-sm font-semibold text-center justify-center items-center rounded-md py-2 px-7">Buy / Sell</button>
                                    </div>
                                </div>
                                <div class="single-currency-info border border-[#E0E0E0] bg-white rounded-lg p-6 mb-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="@/assets/img/logos/eth.png" class=" h-10 w-10 mr-2" alt=""> 
                                            <ul>
                                                <li class="text-black text-xl font-semibold">Ethereum (ETH)</li>
                                                <li class="flex items-center text-base font-normal">
                                                    <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                                    <span class="text-[#23A638] mr-3">+3.46 %</span> 
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 -0.000121943L8 5.99988L4.76837e-07 5.99988L4 -0.000121943Z" fill="#23A638"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class="bg-[#1F3157] w-auto opacity-100 hover:opacity-90 transition text-white flex text-sm font-semibold text-center justify-center items-center rounded-md py-2 px-7">Buy / Sell</button>
                                    </div>
                                </div>
                                <div class="single-currency-info border border-[#E0E0E0] bg-white rounded-lg p-6 mb-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="@/assets/img/logos/usdt.png" class=" h-10 w-10 mr-2" alt=""> 
                                            <ul>
                                                <li class="text-black text-xl font-semibold">Tether (USDT)</li>
                                                <li class="flex items-center text-base font-normal">
                                                    <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                                    <span class="text-[#E71212] mr-3">-2.62 %</span> 
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class="bg-[#1F3157] w-auto opacity-100 hover:opacity-90 transition text-white flex text-sm font-semibold text-center justify-center items-center rounded-md py-2 px-7">Buy / Sell</button>
                                    </div>
                                </div>
                                <div class="single-currency-info border border-[#E0E0E0] bg-white rounded-lg p-6 mb-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="@/assets/img/logos/bnb.png" class=" h-10 w-10 mr-2" alt=""> 
                                            <ul>
                                                <li class="text-black text-xl font-semibold">BNB (BNB)</li>
                                                <li class="flex items-center text-base font-normal">
                                                    <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                                    <span class="text-[#E71212] mr-3">-2.62 %</span> 
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"/>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                        <button class="bg-[#1F3157] w-auto opacity-100 hover:opacity-90 transition text-white flex text-sm font-semibold text-center justify-center items-center rounded-md py-2 px-7">Buy / Sell</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    <!-- <div class="load-more-btn w-full">
                       <div class="button-area">
                            <a href="" class="flex items-center justify-center text-white translate-x-0 transition hover:translate-x-1">View All <img src="@/assets/img/arrow-right-white-bg.svg" class="ml-2 h-5 w-5" alt=""></a> 
                       </div> 
                    </div> -->
                    </div>
                </div>
            </div>
</template>