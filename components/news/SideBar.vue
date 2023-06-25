<template>
                    <div class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2 mb-6 lg:mb-3.5">
                    <div
                        class="search-inner w-full lg:w-auto relative bg-[#F1F5FE] border border-[#D1D8E8] rounded-full p-[7px]">
                        <form action="" class=" flex items-center w-full lg:w-auto">
                            <span class="pr-2 pl-1">
                                <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <input type="text"
                                class="text-[#A3ABBD] font-normal focus:outline-none active:outline-none w-full hover:outline-none text-sm bg-transparent lg:w-36"
                                placeholder="Search by Name">
                            <button type="submit"
                                class="bg-cblue relative right-0 text-white font-normal text-sm rounded-full py-1.5 px-3">Search</button>
                        </form>
                    </div>
                </div>
                <div class=" mb-4 flex lg:hidden">
                    <div class="w-full lg:w-auto">
                        <form action="" class="text-left w-full lg:w-40 mx-auto md:mx-0">
                            <div class="w-full lg:">
                                <div class="no-label w-full lg:w-40 mx-auto md:mx-0">
                                    <div class="select bg-white rounded-lg" id="">
                                        <div class="selectBtn" data-type="firstOption">All </div>
                                        <div class="selectDropdown">
                                            <div class="option" data-value="all" data-type="firstOption">All</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Investing</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Mining</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Trading</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Exchanges
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    <div class="bg-white rounded-2xl p-3 pb-7 mb-6">
                        <h4 class="font-semibold text-sm text-black mb-2">Recent News</h4>
                        <a href="" class="flex py-2 mb-3">
                            <div class="flex items-center justify-between">
                                <div class=" h-[54px] w-[54px] rounded-[10px] overflow-hidden">
                                    <img src="@/assets/img/1.png" class=" object-cover h-full w-full" alt="">
                                </div>
                                <div class="w-[170px] ml-2">
                                    <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90% Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers, 'Billions In Revenue'</h4>
                                    
                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5 min</span>
                                    
                                </div>
                            </div>
                        </a>
                        <a href="" class="flex py-2 mb-3">
                            <div class="flex items-center justify-between">
                                <div class=" h-[54px] w-[54px] rounded-[10px] overflow-hidden">
                                    <img src="@/assets/img/2.png" class=" object-cover h-full w-full" alt="">
                                </div>
                                <div class="w-[170px] ml-2">
                                    <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90% Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers, 'Billions In Revenue'</h4>
                                    
                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5 min</span>
                                    
                                </div>
                            </div>
                        </a>
                        <a href="" class="flex py-2">
                            <div class="flex items-center justify-between">
                                <div class=" h-[54px] w-[54px]  rounded-[10px] overflow-hidden">
                                    <img src="@/assets/img/3.png" class=" object-cover h-full w-full" alt="">
                                </div>
                                <div class="w-[170px] ml-2">
                                    <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90% Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers, 'Billions In Revenue'</h4>
                                    
                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5 min</span>
                                    
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="bg-white rounded-2xl p-3 pb-7">
                        <h4 class="font-semibold text-sm text-black mb-2">Recent News</h4>
                        <div class="inline-flex gap-1.5 flex-wrap">
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Investing</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Mining</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Crypto</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Trading</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Exchanges</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Coins</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">BTC</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">ETH</span>
                            <span class="text-black bg-[#E4E6EF] font-normal text-xs px-3 py-0.5 rounded-full mb-4">Cryptocurrency</span>
                        </div>
                    </div>
</template>