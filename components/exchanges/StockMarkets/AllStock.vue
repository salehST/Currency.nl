<template>
        <div class="filter-area max-w-[1068px] mx-auto">
        <div class="filter-inner">
            <div class="ex-markets flex items-center justify-between border-b border-[#DEE4F1] pb-6 mb-3">
                <div class="ex-btn-wrapper">
                    <div class="ex-btn-inner inline-flex items-center bg-[#D1D8E8] rounded-full">
                        <button type="button" class="ex-button">Crypto Markets</button>
                        <button type="button" class="ex-button active-ex">Stock Markets</button>
                        <button type="button" class="ex-button">Exchange Guide</button>
                    </div>
                </div>
                    <div class="search-wrapper w-auto flex">
                        <div class="search-inner w-auto relative bg-[#F1F5FE] border border-[#D1D8E8] rounded-full p-[7px]">
                            <form action=" flex items-center">
                                <span class="pr-3 pl-1" >
                                    <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="black"/>
                                    </svg>
                                </span>
                                <input type="text" class="text-[#A3ABBD] font-normal focus:outline-none active:outline-none hover:outline-none text-sm bg-transparent" placeholder="Search the Exchange">
                                <button type="submit" class="bg-[#0051FF] text-white font-normal text-sm rounded-full py-2 px-7">Search</button>
                            </form>
                        </div>
                    </div>
            </div>

            <div class="show-result flex items-start justify-between">
                <div class="filter-options w-56">
                    <div class="filter-wrapper">
                        <div class="filter-option-list bg-white rounded-[10px] mb-6">
                            <h4 class="text-sm font-semibold text-black p-4 border-b border-[#DEE4F1] flex items-center">
                                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40039 2.39998C2.40039 1.95815 2.75856 1.59998 3.20039 1.59998H12.8004C13.2422 1.59998 13.6004 1.95815 13.6004 2.39998V4.79998C13.6004 5.01215 13.5161 5.21563 13.3661 5.36566L9.60039 9.13135V12C9.60039 12.2121 9.51611 12.4156 9.36608 12.5657L7.76608 14.1657C7.53728 14.3945 7.19318 14.4629 6.89424 14.3391C6.5953 14.2153 6.40039 13.9235 6.40039 13.6V9.13135L2.63471 5.36566C2.48468 5.21563 2.40039 5.01215 2.40039 4.79998V2.39998Z" fill="black"/>
                                </svg>
                                Filters</h4>
                                <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                    <span>Cryptocurrencies</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                    <span>Agreements</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                    <span>Payment Methods</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                    <span>Land</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                    <span>Properties</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                                <div class="flex items-center justify-between p-4 cursor-pointer">
                                    <span>Reviews</span> 
                                    <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                    </svg>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="filter-result max-w-[812px] w-full relative mb-24">
                    <div class="text-xs font-normal text-black mb-3 w-full">1.050 Exchanges Found</div>
                    
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/FXTM.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-[52%]">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">FXTM Give your more <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank1.svg" class="mr-1" alt=""> Rank</span>
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-states.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="checkbox-animate">
                                        <label class="flex text-xs font-normal">
                                            <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                            <span class="input-check"></span>
                                            Compare
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/Pepperstone.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">Pepperstone <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank2.svg" class="mr-1" alt=""> Rank</span>
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/japan.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/EasyMarkets.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">Easy Markets <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span>
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-kingdom.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/AVA-Trade.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">AVA Trade 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/flag04.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/Vantage.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">Vantage 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/china.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/IG.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">IG 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-states.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/XM.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">XM 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/japan.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/Libertex.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">Libertex 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/china.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="logo">
                                <img src="@/assets/img/exchange/IronFX.jpg" alt="">
                            </div>
                            <div class="ex-detail ml-3 mt-1  w-full">
                                <div class="detail-top flex items-end justify-between">
                                    <div class="w-3/5">
                                        <div class="font-normal text-2xl text-black mb-2 flex items-center">Iron FX 
                                            <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img src="@/assets/img/icons/rank3.svg" class="mr-1" alt=""> Rank</span> -->
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-kingdom.svg" alt=""> <span class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1"> <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href="" class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit Exchange <img src="@/assets/img/arrow-right-blue.svg" class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a></div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">0</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Commission</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">Min $100</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Deposit</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">1:400</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Max. Leverage</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[48%] mb-6 flex items-start">
                                        <div class="w-1/2">
                                            <div class="text-left mb-5">
                                                <div class="font-normal text-black text-xs mb-2">Support</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/chat.svg" alt="">
                                                    <img src="@/assets/img/support/phone.svg" alt="">
                                                    <img src="@/assets/img/support/mail.svg" alt="">
                                                    <img src="@/assets/img/support/7.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-left">
                                                <div class="font-normal text-black text-xs mb-2">Platforms & Devices</div>
                                                <div class="flex items-center gap-2">
                                                    <img src="@/assets/img/support/desktop.svg" alt="">
                                                    <img src="@/assets/img/support/mobile.svg" alt="">
                                                    <img src="@/assets/img/support/web.svg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-left w-2/5">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <div class="grid grid-cols-3 gap-1.5">
                                                <img src="@/assets/img/cards/visa.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/mastercard.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/paypal.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/amazon.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/payoneer.svg" class="mb-1.5" alt="">
                                                <img src="@/assets/img/cards/apple_pay.svg" class="mb-1.5" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text border-t border-[#DEE4F1] pt-4">
                                    <div class="flex mb-4">
                                        <div class="w-[54%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Pros</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Tight spreads and low commissions on all major pairs</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Offering multiple accounts types</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> FXTM Invest allows investors to connect with strategy</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/green-sqr-tick.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Trustworthy and regulated by FCA (UK) & CYSEC (EU)</span>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                        
                                        <div class="w-[46%]">
                                            <h4 class=" text-base font-base text-black mb-1.5">Cons</h4>
                                            <ul class=" list-inside">
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Doesn’t accept clients from the US</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> No bonuses</span>
                                                </li>
                                                <li> 
                                                    <span class="text-[#6B6C6F] font-normal text-xs flex items-center"><img src="@/assets/img/red-cross.svg" height="26" width="16" class="py-1.5 mr-1" alt=""> Limited selection of CFD stocks to trade</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                                <div class="checkbox-animate">
                                                    <label class="flex text-xs font-normal">
                                                        <input type="checkbox" onchange="ProviderFilter()" class="" value="caiway">
                                                        <span class="input-check"></span>
                                                        Compare
                                                    </label>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-re text-center">
                        <button type="button" class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>