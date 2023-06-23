<template>
    
    <div class="support-by mb-20">
                <h4 class="text-[#6B6C6F] font-normal text-base mb-9">Support by</h4>
                <div class="co-logo text-center grid grid-cols-2 align-middle gap-12 justify-center  md:grid-cols-4 justify-items-stretch items-center mb-12 md:justify-between">
                    <div class="co-i"><img src="@/assets/img/binance.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/bitvavo.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/bitonic.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/kraken.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/okcoin.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/coinbase.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/gate_io.png" alt=""></div>
                    <div class="co-i"><img src="@/assets/img/ftx.png" alt=""></div>
                    
                    
                    
                                    
                    
                    
                    
                    
                </div>
                <!-- <div class="co-logo flex flex-wrap flex-col gap-2 md:flex-row items-center mb-12 justify-between">
                    <img src="@/assets/img/binance.png" alt="">
                    <img src="@/assets/img/bitvavo.png" alt="">
                    <img src="@/assets/img/bitonic.png" alt="">
                    <img src="@/assets/img/kraken.png" alt="">
                </div>
                <div class="co-logo flex flex-wrap flex-col gap-2 md:flex-row items-center  justify-between">                    
                    <img src="@/assets/img/okcoin.png" alt="">
                    <img src="@/assets/img/coinbase.png" alt="">
                    <img src="@/assets/img/gate_io.png" alt="">
                    <img src="@/assets/img/ftx.png" alt="">
                </div> -->
            </div>
</template>
<style>
.co-logo .co-i:nth-child(2), .co-logo .co-i:nth-child(6) {
    justify-content: center;
    display: flex;
}

.co-logo .co-i:nth-child(4),.co-logo .co-i:nth-child(8) {
    display: flex;
    justify-content: end;
}

.co-logo .co-i:nth-child(3),.co-logo .co-i:nth-child(7) {
    display: flex;
    justify-content: end;
}
@media only screen and (max-width: 769px) {
.co-logo .co-i {
    justify-content: center!important;
    display: flex;
}
}
</style>