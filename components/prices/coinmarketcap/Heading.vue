<template>
    <div class="call-to-action relative top-sec max-w-[1068px] mx-auto mb-[30px]">
        <div class="w-full flex text-center mt-6">
            <h2 class="text-[32px] md:text-5xl font-bold mx-auto leading-9 md:leading-[57px] mb-5 "><span class="flex"><span
                        class="strick-line-inline">Prices</span> <img src="@/assets/img/big-coin.svg" class="ml-2"
                        alt=""></span></h2>
        </div>
        <p class="text-[#6B6C6F] text-base font-normal leading-8 max-w-3xl text-center mx-auto">Monitor capitalization,
            price, daily volume, and price changes of any coin in real time!
            Compare various coins!</p>


    </div>

    <div class="flex flex-col md:flex-row items-center justify-center gap-[30px]">
        <div class="w-full md:w-[300px] border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="text-xs font-normal text-[#2B364E] bg-[#CBD7F1] text-center py-2">The highest price increase</div>

            <div class="flex justify-center mt-[10px] px-[26px] pb-[22px]">
                <div class="flex justify-center items-center">
                    <div class="text-center mx-auto h-[50px] w-[50px] rounded-full overflow-hidden mr-3">
                        <img src="@/assets/img/logos/eth.png" class="w-full h-auto  " alt="">
                    </div>
                    <ul class="w-auto">
                        <li class="text-black text-base font-normal">Ethereum (ETH)</li>
                        <li class="flex items-center">
                            <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                            <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full md:w-[300px] border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="text-xs font-normal text-[#2B364E] bg-[#CBD7F1] text-center py-2">The biggest price drop</div>

            <div class="flex justify-center mt-[10px] px-[26px] pb-[22px]">
                <div class="flex justify-center items-center">
                <div class="text-center mx-auto h-[50px] w-[50px] rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/btc.png" class="w-full h-auto  " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Bitcoin (BTC)</li>
                    <li class="flex items-center">
                        <span class="text-[#FF0019] font-semibold text-sm mr-1">-5.20%</span>
                        <span class="text-[#FF0019] font-normal text-xs">($5.5992)</span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div class="w-full md:w-[300px] border border-[#CBD7F1] rounded-[10px] overflow-hidden">
            <div class="text-xs font-normal text-[#2B364E] bg-[#CBD7F1] text-center py-2">The biggest trading volume growth
            </div>

            <div class="flex justify-center mt-[10px] px-[26px] pb-[22px]">
                <div class="flex justify-center items-center">
                <div class="text-center mx-auto h-[50px] w-[50px] rounded-full overflow-hidden mr-3">
                    <img src="@/assets/img/logos/busd.png" class="w-full h-auto " alt="">
                </div>
                <ul>
                    <li class="text-black text-base font-normal">Binance (BUSD)</li>
                    <li class="flex items-center">
                        <span class="text-[#23A638] font-semibold text-sm mr-1">+147.99%</span>
                        <span class="text-[#23A638] font-normal text-xs">($2.42341)</span>
                    </li>
                </ul>
                </div>
            </div>
    </div>
    </div>
    <div class="text-center flex items-center justify-center mt-4">Select time period: <a href="" class="font-normal font-sm  py-0.5 px-4 bg-[#F3F6FD] border border-[#0051FF] rounded-[5px] ml-3">1d</a><a href="" class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition mx-1">1w</a><a href="" class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition">1m</a></div>

</template>