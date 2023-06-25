<template>
    <div class="filter-area max-w-[1068px] mx-auto">
        <div class="filter-inner">
            <div class="ex-markets flex flex-col lg:flex-row items-center justify-between border-b border-[#DEE4F1] pb-6 mb-3">
                <div class="ex-btn-wrapper order-2 lg:order-1">
                    <div class="ex-btn-inner inline-flex items-center bg-[#D1D8E8] rounded-full">
                        <button type="button" class="ex-button">Crypto Markets</button>
                        <button type="button" class="ex-button active-ex">Stock Markets</button>
                        <button type="button" class="ex-button">Exchange Guide</button>
                    </div>
                </div>
                <div class="search-wrapper w-full lg:w-auto flex order-1 lg:order-2 mb-6 lg:mb-0">
                    <div
                        class="search-inner w-full lg:w-auto relative bg-[#F1F5FE] border border-[#D1D8E8] rounded-full p-[7px]">
                        <form action="" class=" flex items-center w-full lg:w-auto">
                            <span class="pr-3 pl-1">
                                <svg class=" inline-flex w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                                        fill="black" />
                                </svg>
                            </span>
                            <input type="text"
                                class="text-[#A3ABBD] font-normal focus:outline-none active:outline-none w-full lg:w-auto hover:outline-none text-sm bg-transparent"
                                placeholder="Search the Exchange">
                            <button type="submit"
                                class="bg-cblue relative right-0 text-white font-normal text-sm rounded-full py-2 px-7">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="show-result flex flex-col lg:flex-row items-start justify-between">
                <div class="filter-options w-full lg:w-56">
                    <div class="filter-wrapper">
                        <div class="filter-option-list bg-white rounded-[10px] mb-6">
                            <h4 class="text-sm font-semibold text-black p-4 border-b border-[#DEE4F1] flex items-center">
                                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.40039 2.39998C2.40039 1.95815 2.75856 1.59998 3.20039 1.59998H12.8004C13.2422 1.59998 13.6004 1.95815 13.6004 2.39998V4.79998C13.6004 5.01215 13.5161 5.21563 13.3661 5.36566L9.60039 9.13135V12C9.60039 12.2121 9.51611 12.4156 9.36608 12.5657L7.76608 14.1657C7.53728 14.3945 7.19318 14.4629 6.89424 14.3391C6.5953 14.2153 6.40039 13.9235 6.40039 13.6V9.13135L2.63471 5.36566C2.48468 5.21563 2.40039 5.01215 2.40039 4.79998V2.39998Z"
                                        fill="black" />
                                </svg>
                                Filters
                            </h4>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                <span>Cryptocurrencies</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                <span>Agreements</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                <span>Payment Methods</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                <span>Land</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer">
                                <span>Properties</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 cursor-pointer">
                                <span>Reviews</span>
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                        fill="#424242" />
                                </svg>
                            </div>
                        </div>
                        <div class="bg-[#1F3157] rounded-[10px]">
                            <h4 class="text-sm font-semibold text-white p-4 flex items-center">
                                Exchanges Compare</h4>
                            <div class="flex items-center justify-between p-4 border-b border-[#2A3C62] ">
                                <span class="flex items-center"><img src="@/assets/img/Bitvavo-logo.png" alt=""><span
                                        class="text-sm text-white font-normal ml-3">Bitvavo</span></span>

                                <button type="button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.71725 3.71713C3.87346 3.56092 4.12673 3.56092 4.28294 3.71713L6.0001 5.43429L7.71726 3.71713C7.87346 3.56092 8.12673 3.56092 8.28294 3.71713C8.43915 3.87334 8.43915 4.12661 8.28294 4.28282L6.56578 5.99998L8.28294 7.71713C8.43915 7.87334 8.43915 8.12661 8.28294 8.28282C8.12673 8.43903 7.87346 8.43903 7.71726 8.28282L6.0001 6.56566L4.28294 8.28282C4.12673 8.43903 3.87346 8.43903 3.71725 8.28282C3.56105 8.12661 3.56105 7.87334 3.71725 7.71713L5.43441 5.99998L3.71725 4.28282C3.56105 4.12661 3.56105 3.87334 3.71725 3.71713Z"
                                            fill="black" />
                                    </svg></button>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#2A3C62] ">
                                <span class="flex items-center"><img src="@/assets/img/OKEX-logo.png" alt=""><span
                                        class="text-sm text-white font-normal ml-3">OKEX</span></span>
                                <button type="button">
                                    <svg class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.71725 3.71713C3.87346 3.56092 4.12673 3.56092 4.28294 3.71713L6.0001 5.43429L7.71726 3.71713C7.87346 3.56092 8.12673 3.56092 8.28294 3.71713C8.43915 3.87334 8.43915 4.12661 8.28294 4.28282L6.56578 5.99998L8.28294 7.71713C8.43915 7.87334 8.43915 8.12661 8.28294 8.28282C8.12673 8.43903 7.87346 8.43903 7.71726 8.28282L6.0001 6.56566L4.28294 8.28282C4.12673 8.43903 3.87346 8.43903 3.71725 8.28282C3.56105 8.12661 3.56105 7.87334 3.71725 7.71713L5.43441 5.99998L3.71725 4.28282C3.56105 4.12661 3.56105 3.87334 3.71725 3.71713Z"
                                            fill="black" />
                                    </svg></button>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#2A3C62] ">
                                <span class="flex items-center"><img src="@/assets/img/Huobi-Global-logo.png" alt=""><span
                                        class="text-sm text-white font-normal ml-3">Huobi Global</span></span>
                                <button type="button">
                                    <svg class="cursor-pointer" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="6" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M3.71725 3.71713C3.87346 3.56092 4.12673 3.56092 4.28294 3.71713L6.0001 5.43429L7.71726 3.71713C7.87346 3.56092 8.12673 3.56092 8.28294 3.71713C8.43915 3.87334 8.43915 4.12661 8.28294 4.28282L6.56578 5.99998L8.28294 7.71713C8.43915 7.87334 8.43915 8.12661 8.28294 8.28282C8.12673 8.43903 7.87346 8.43903 7.71726 8.28282L6.0001 6.56566L4.28294 8.28282C4.12673 8.43903 3.87346 8.43903 3.71725 8.28282C3.56105 8.12661 3.56105 7.87334 3.71725 7.71713L5.43441 5.99998L3.71725 4.28282C3.56105 4.12661 3.56105 3.87334 3.71725 3.71713Z"
                                            fill="black" />
                                    </svg></button>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#2A3C62]">
                                <span class="flex items-center">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="45" height="45" rx="4.5" fill="#344B7A"
                                            stroke="#627BB1" />
                                    </svg>
                                </span>
                            </div>
                            <div class="flex items-center justify-center  w-full p-4 pb-3">
                                <div class="buy-button group w-full"><a
                                        class="bg-cblue text-white flex items-center text-xs font-semibold py-2 px-7 justify-center w-full rounded-full"
                                        href="">Compare<img src="@/assets/img/arrow-right-white-bg.svg"
                                            class="h-3 w-3 ml-3 translate-x-0 transition group-hover:translate-x-1"
                                            alt=""></a></div>
                            </div>
                            <div class="text-center pb-6">
                                <a href="" class="text-[#7397E2] text-xs font-normal text-center">Clear Selected</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-result lg:max-w-[812px] w-full relative mb-24">
                    <div class="text-xs font-normal text-black mb-3 w-full mt-6 lg:mt-0">4.567 Exchanges Found</div>

                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Bitvavo.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Bitvavo.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Bitvavo
                                                    <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank1.svg" class="mr-1" alt="">
                                                        Rank</span>
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag01.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/OKEX.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/OKEX.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">OKEX
                                                    <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank2.svg" class="mr-1" alt="">
                                                        Rank</span>
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag02.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Huobi_Global.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Huobi_Global.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Huobi Global
                                                    <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span>
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag03.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Coinbase_Pro.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Coinbase_Pro.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Coinbase Pro
                                                    <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span> -->
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag05.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Bitfinex.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Bitfinex.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Bitfinex
                                                    <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span> -->
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag06.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Poloniex.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Poloniex.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Poloniex
                                                    <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span> -->
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag02.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Bittrex.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Bittrex.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Bittrex
                                                    <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span> -->
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag02.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                    <div class="single-ex-info block bg-white rounded-[20px] w-full mb-5">
                        <div class="ex-info-inner w-full  pl-8 py-4 flex items-start">
                            <div class="hidden md:flex logo">
                                <img src="@/assets/img/exchange/Kucoin.png" alt="">
                            </div>
                            <div class="ex-detail ml-0 md:ml-3 mt-1  w-full">
                                <div class="detail-top flex flex-col md:flex-row items-end justify-between">
                                    <div class="ex-detail-inn-top w-full md:w-3/5">
                                        <div class="flex items-center gap-3">
                                            <div class="flex md:hidden logo">
                                                <img src="@/assets/img/exchange/Kucoin.png" alt="">
                                            </div>
                                            <div class="">
                                                <div class="font-normal text-2xl text-black mb-2 flex items-center">Kucoin
                                                    <!-- <span class="text-sm font-normal text-black flex items-center ml-3"><img
                                                            src="@/assets/img/icons/rank3.svg" class="mr-1" alt="">
                                                        Rank</span> -->
                                                </div>
                                                <div class="flex items-center"><img src="@/assets/img/flag/flag04.svg"
                                                        alt=""> <span
                                                        class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                        <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                        class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                        Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                            class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                            alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-6">
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">842</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Trading Pairs</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">BTC/BUSD</div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">Top Pair</div>
                                            </div>
                                            <div class="bg-[#F3F6FD] text-center rounded-md py-2 px-3">
                                                <div class="font-semibold text-base text-black leading-4">10Billion USD
                                                </div>
                                                <div class="text-[#6B6C6F] text-[10px] font-normal">24hr Volume</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-2/5 mb-6">
                                        <div class="mb-5 text-left">
                                            <div class="font-normal text-black text-xs mb-2">Properties</div>
                                            <img src="@/assets/img/icons/group-icons-prop.svg" alt="">
                                        </div>
                                        <div class="text-left">
                                            <div class="font-normal text-black text-xs mb-2">Payment</div>
                                            <img src="@/assets/img/icons/group-payment-logo.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="ex-text">
                                    <h5 class="font-semibold text-base text-black mb-[6px]">About this Exchange</h5>
                                    <p class="font-normal text-xs text-[#6B6C6F] mb-3">They combine broker and exchange and
                                        are currently the fastest growing exchange in the Netherlands. Due to the ease of
                                        this platform, they quickly managed to conquer their place in the market. Bitvavo is
                                        known for the simplicity and ease of the platform, which makes it very suitable for
                                        both beginners and experienced traders. Because they have built the entire platform
                                        into a cryptocurrency exchange.</p>
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
                <div class="button-re text-center">
                    <button type="button"
                        class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View
                        More</button>
                </div>
            </div>
        </div>
    </div>
</div></template>