<template>
    <div class="ex-markets coin-wall flex flex-col md:flex-row items-center justify-between border-b border-[#DEE4F1] pb-6 mb-3">
        <div class="ex-btn-wrapper hidden md:flex">
            <div class="ex-btn-inner inline-flex items-center bg-[#D1D8E8] rounded-full">
                <button type="button" class="ex-button">Coinwall</button>
                <button type="button" class="ex-button">Coinmarketcap</button>
                <button type="button" class="ex-button active-ex">Stocks</button>
                <button type="button" class="ex-button">Rates</button>
                <button type="button" class="ex-button">Indexes</button>
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
                                class="bg-[#0051FF] relative right-0 text-white font-normal text-sm rounded-full py-2 px-7">Search</button>
                        </form>
                    </div>
                </div>
                        
        <div class="w-full lg:w-auto flex md:hidden order-2">
                    <form action="" class="text-left w-full mx-auto md:mx-0">
                        <div class="page-dropdown">
                            <div class="no-label w-full  mx-auto md:mx-0">
                                <div class="select">
                                    <div class="selectBtn" data-type="firstOption">Coinwall </div>
                                    <div class="selectDropdown">
                                        <div class="option" data-value="all" data-type="firstOption">Coinwall</div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Coinmarketcap
                                        </div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Stocks
                                        </div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Rates
                                        </div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Indexes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
    <div class="flex flex-col md:flex-row items-start mt-8 md:mt-0 md:items-center justify-between mb-4 md:mb-10">
        <div class="font-normal text-base text-black order-2 md:order-1">
            4.567 Coinwall Found
        </div>

        <div class="options-area flex items-center gap-3 mb-3 order-1">
            <div class="currency-box flex items-center gap-2">
                <span class=" text-sm font-semibold text-black">Currency</span>
                <form action="" class="text-left w-full lg:w-28">
                    <div class="">
                        <div class="no-label w-28">
                            <div class="select select-b" id="currency">
                                <div class="selectBtn bg-white" data-type="firstOption"> USD</div>
                                <div class="selectDropdown">
                                    <div class="option" data-type="secondOption" data-value="BTC">
                                        BTC
                                    </div>
                                    <div class="option" data-type="thirdOption" data-value="ETC">
                                        ETC
                                    </div>
                                    <div class="option" data-type="forthOption" data-value="USD">
                                        USD
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="like-btn border-l border-r border-[#D1D8E8] px-4">
                <button type="button" class="group flex items-center gap-2 text-sm font-semibold text-black">Like <svg
                        width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                            stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div class="all-products-btn">
                <a href="" class="text-[#0051FF] hidden md:flex text-base font-semibold underline transition hover:no-underline">View All
                    Providers</a>
                <a href="" class="text-[#0051FF] flex md:hidden text-base font-semibold underline transition hover:no-underline">View All
                </a>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/btc.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">Bitcoin (BTC)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                <span class="text-[#E71212] mr-3">-2.62 %</span>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BTC" class="">
                            <canvas id="myChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 76.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 75.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/busd.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">Binance (BUSD)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 1.507,31</span>
                                <span class="text-[#23A638] mr-3">+3.25 %</span>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BUSD" class="">
                            <canvas id="myChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 56.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 45.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/eth.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">Ethereum (ETH)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 0,98</span>
                                <span class="text-[#FF9E44] mr-3">-0.52 %</span>

                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BUSD" class="">
                            <canvas id="myChart3" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 46.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 35.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/usdt.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">Tether (USDT)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 0,98</span>
                                <span class="text-[#23A638] mr-3">+3.25 %</span>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                        d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BUSD" class="">
                            <canvas id="myChart4" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 56.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 45.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/usdc.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">USD Coin (USDC)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 21.320,00</span>
                                <span class="text-[#E71212] mr-3">-2.62 %</span>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BTC" class="">
                            <canvas id="myChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 76.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 75.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/bnb.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">BNB (BNB)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 1.507,31</span>
                                <span class="text-[#23A638] mr-3">+3.25 %</span>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BUSD" class="">
                            <canvas id="myChart2" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                        <li class=" text-base font-semibold text-black">€ 56.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="flex items-end justify-between">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                        <li class=" text-base font-semibold text-black">€ 45.38 M</li>
                    </ul>
                    <a href=""
                        class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                            class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                                stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
            <div class="cu-inner">
                <div class="flex items-start justify-between">
                    <div class="flex items-start">
                        <img src="@/assets/img/logos/ada.png" class=" h-6 w-6 mr-2" alt="">
                        <ul>
                            <li class="text-black text-sm font-semibold">Cardano (ADA)</li>
                            <li class="flex items-center text-sm font-normal">
                                <span class="text-[#6B6C6F] mr-4">€ 0,98</span>
                                <span class="text-[#FF9E44] mr-3">-0.52 %</span>

                            </li>
                        </ul>
                    </div>
                    <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
                </div>
                <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                    <div class="cu-chart w-5/6 ml-6">
                        <div ref="BUSD" class="">
                            <canvas id="myChart3" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div class="w-1/6 flex justify-end mb-1">
                        <button type="button" class="group">
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                    stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-5">
                    <ul>
                        <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                    <li class=" text-base font-semibold text-black">€ 46.38 M</li>
                </ul>
                <a href=""
                    class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                        class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:stroke-[#ffffff] transition duration-300"
                            d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                            stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="flex items-end justify-between">
                <ul>
                    <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                    <li class=" text-base font-semibold text-black">€ 35.38 M</li>
                </ul>
                <a href=""
                    class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                        class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:stroke-[#ffffff] transition duration-300"
                            d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                            stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="cu-single mb-4 bg-white w-full md: p-[14px] pb-8 rounded-[10px] shadow transition hover:shadow-md">
        <div class="cu-inner">
            <div class="flex items-start justify-between">
                <div class="flex items-start">
                    <img src="@/assets/img/logos/doge.png" class=" h-6 w-6 mr-2" alt="">
                    <ul>
                        <li class="text-black text-sm font-semibold">Dogecoin (DOGE)</li>
                        <li class="flex items-center text-sm font-normal">
                            <span class="text-[#6B6C6F] mr-4">€ 0,98</span>
                            <span class="text-[#23A638] mr-3">+3.25 %</span>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:stroke-[#ffffff] transition duration-300"
                                    d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div class="text-[#B7B7B7] text-[10px] font-normal">24 hours</div>
            </div>
            <div class="cu-chart-box flex items-end justify-between pb-2 border-b border-[#E8E8E8] mb-6">
                <div class="cu-chart w-5/6 ml-6">
                    <div ref="BUSD" class="">
                        <canvas id="myChart4" width="400" height="400"></canvas>
                    </div>
                </div>
                <div class="w-1/6 flex justify-end mb-1">
                    <button type="button" class="group">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:fill-[#FF0019]" fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.80628 3.20588C4.68079 1.33136 7.71999 1.33136 9.5945 3.20588L11.0004 4.61176L12.4063 3.20588C14.2808 1.33136 17.32 1.33136 19.1945 3.20588C21.069 5.08039 21.069 8.11958 19.1945 9.9941L11.0004 18.1882L2.80628 9.9941C0.931761 8.11958 0.931761 5.08039 2.80628 3.20588Z"
                                stroke="#FF0019" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-end justify-between mb-5">
                <ul>
                    <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Buy</li>
                    <li class=" text-base font-semibold text-black">€ 56.38 M</li>
                </ul>
                <a href=""
                    class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                        class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:stroke-[#ffffff] transition duration-300"
                            d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                            stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="flex items-end justify-between">
                <ul>
                    <li class="text-[#6B6C6F] text-xs font-normal mb-2">Best Price Sell</li>
                    <li class=" text-base font-semibold text-black">€ 45.38 M</li>
                </ul>
                <a href=""
                    class="text-[#0051FF] text-sm font-semibold py-1.5 px-5 border rounded-full border-[#0051FF] group bg-transparent hover:text-white hover:bg-[#0051FF] transition flex items-center"><span
                        class="mr-1.5">Bitvavo</span> <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:stroke-[#ffffff] transition duration-300"
                            d="M6.1875 2.0625H2.0625V9.9375H9.9375V5.8125M9.9375 2.0625L5.8125 6.1875M8.0625 1.3125H10.6875V3.9375"
                            stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
    <div class="pagination">
            <div class="flex items-center justify-end mt-4">
  <nav class="flex gap-2">
    <a href="#" class="items-center flex justify-center rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L15.4142 16L18.7071 19.2929C19.0976 19.6834 19.0976 20.3166 18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L13.2929 16.7071C12.9024 16.3166 12.9024 15.6834 13.2929 15.2929L17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929Z" fill="#B4BAC6"/>
</svg>

    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center bg-[#0051FF] text-white rounded">
      1
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      2
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      3
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      4
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      &hellip;
    </a>
    <a href="#" class="group items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect class=" group-hover:fill-[#0051FF]" width="32" height="32" rx="4" fill="white"/>
<path class=" group-hover:fill-[#fff]" fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L16.5858 16L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929L18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071Z" fill="black"/>
</svg>

    </a>
  </nav>
</div>

        </div>
</template>
<script>
import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            config1: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#FEF2F2');
                            gradient.addColorStop(.5, '#FEF2F2');

                            return gradient;
                        },
                        lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#FF5555',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            config2: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#EDFDF2');
                            gradient.addColorStop(.5, '#EDFDF2');

                            return gradient;
                        },
                        lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#3AD76F',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            config3: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#FDF7ED');
                            gradient.addColorStop(.5, '#FDF7ED');

                            return gradient;
                        },
                        lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#FF9E44',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            config4: {
                type: 'line',
                data: {
                    labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7",],
                    datasets: [{
                        label: '',
                        data: [290, 360, 300, 350, 280, 335, 355],
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 1200, 0, 0);

                            gradient.addColorStop(1, '#EDFDF2');
                            gradient.addColorStop(.5, '#EDFDF2');

                            return gradient;
                        },
                        lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#3AD76F',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    },

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            position: 'nearest',
                            padding: 10,
                            cornerRadius: 10,
                            backgroundColor: 'rgba(43,88,133)',
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                                title: () => null
                            },

                            yAlign: 'bottom',
                            displayColors: false,

                        }
                    }
                }
            },
            myChart1: null,
            myChart2: null,
            myChart3: null,
            myChart4: null,
        }
    },
    mounted() {

        this.ChartRender();

        /* custom selectors News Start */
        let index = 1;

        const on = (listener, query, fn) => {
            document.querySelectorAll(query).forEach(item => {
                item.addEventListener(listener, el => {
                    fn(el);
                })
            })
        }

        on('click', '.selectBtn', item => {
            item.target.classList.toggle('toggle');
            const next = item.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index++;
        });

        document.addEventListener('mouseup', function (e) {

            const containers = document.querySelectorAll('.selectBtn');
            if (containers.length > 0) {
                const options = document.querySelectorAll('.selectDropdown');
                containers.forEach(function (container, index) {
                    if (!container.contains(e.target)) {
                        container.classList.remove('toggle');
                        options[index].classList.remove('toggle');
                    }
                });

            }
        });
        on('click', '.option', item => {
            item.target.parentElement.classList.remove('toggle');
            const parent = item.target.closest('.select').children[0];
            parent.setAttribute('data-type', item.target.getAttribute('data-type'));
            parent.innerText = item.target.innerText;
        })
        /* custom selectors News End */
    },
    methods: {
        ChartRender() {
            if (this.myChart1 != null) {
                this.myChart1.destroy();
            }
            this.myChart1 = new Chart(
                document.getElementById('myChart1'),
                this.config1
            );
            if (this.myChart2 != null) {
                this.myChart2.destroy();
            }
            this.myChart2 = new Chart(
                document.getElementById('myChart2'),
                this.config2
            );
            if (this.myChart3 != null) {
                this.myChart3.destroy();
            }
            this.myChart3 = new Chart(
                document.getElementById('myChart3'),
                this.config3
            );
            if (this.myChart4 != null) {
                this.myChart4.destroy();
            }
            this.myChart4 = new Chart(
                document.getElementById('myChart4'),
                this.config4
            );

        },
    }

}

</script>
<style scoped>
.cu-chart canvas {
    max-height: 60px;
    max-width: 170px;
}
</style>
<style>

.coin-wall .ex-button {
    padding: 14px 22px;
}
</style>