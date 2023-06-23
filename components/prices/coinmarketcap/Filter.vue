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
    <div class="flex items-center justify-between mb-10">
        <div class="font-normal text-base text-black">
            4.567 Coinwall Found
        </div>

        <div class="options-area flex items-center gap-3">
            <div class="currency-box flex items-center gap-2">
                <span class=" text-sm font-semibold text-black">Currency</span>
                <form action="" class="text-left w-28">
                    <div class="">
                        <div class="no-label w-full lg:w-28">
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
        </div>
    </div>

    <div class="product-table-wrapper no-overlay">
        <table class="w-full">
            <thead class="table-head">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">#</th>
                    <th>CRYPTO</th>
                    <th>PRICE</th>
                    <th>24h %</th>
                    <th class="hidden md:table-cell">7d %</th>
                    <th class="hidden md:table-cell">PRICE CHART</th>
                    <th class="hidden md:table-cell">MARKET CAP</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">1</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/apple.png" class="mr-2" alt=""> Apple</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal" >
                            <span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg>
                        </div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal" >
                            <span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg>
                        </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">2</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/saudi-aramco.png" class="mr-2" alt=""> Saudi Aramco</span></td>
                    <td class="text-black text-sm font-normal">€ 1.507,31</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3" >+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">3</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/microsoft.png" class="mr-2" alt=""> Microsoft</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">4</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/google.png" class="mr-2" alt=""> Alphabet (Google)</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">5</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/amazon.png" class="mr-2" alt=""> Amazon</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">6</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/tesla.png" class="mr-2" alt=""> Tesla</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">7</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/berkshire.png" class="mr-2" alt=""> Berkshire Hathaway</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">8</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/meta.png" class="mr-2" alt=""> Meta Platform</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">9</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/Johnson-Johnson.png" class="mr-2" alt=""> Johnson & Johnson</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">10</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/UnitedHealth.png" class="mr-2" alt=""> UnitedHealth</span></td>
                    <td class="text-black text-sm font-normal">€ 22.546,00</td>
                    <td class="text-black text-sm font-normal table-cell md:hidden">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3" >-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#E71212] mr-3">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212"></path></svg></div>
                    </td>
                    <td class=" hidden md:table-cell">
                        <div class="flex items-center text-sm font-normal"><span class="text-[#23A638] mr-3">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638"></path></svg></div>
                    </td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        $430.578.766.628
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-6 rounded transition opacity-100 hover:opacity-90 hidden md:table-cell">Buy Now</button>
                        <button type="button" class="bg-[#0051FF] text-white font-semibold  text-sm py-2 px-3 rounded transition opacity-100 hover:opacity-90 md:hidden table-cell">Buy</button>
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
    <div class="pagination">
            <div class="flex items-center justify-center md:justify-end mt-4">
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
            stockConfig1: {
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
            stockChart1: null,
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
            if (this.stockChart1 != null) {
                this.stockChart1.destroy();
            }
            this.stockChart1 = new Chart(
                document.getElementById('stockChart1'),
                this.stockConfig1
            );

        },
    },
}

</script>
<style scoped>.cu-chart canvas {
    max-height: 60px;
    max-width: 170px;
}</style>
<style>.coin-wall .ex-button {
    padding: 14px 22px;
}</style>