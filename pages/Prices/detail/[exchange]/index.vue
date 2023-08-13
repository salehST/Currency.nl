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

                            gradient.addColorStop(1, '#0051FF08');
                            gradient.addColorStop(.5, '#0051FF08');

                            return gradient;
                        },
                        // lineTension: 0.4,
                        pointRadius: 1,
                        pointHoverRadius: 1,
                        fill: true,
                        redraw: true,
                        borderColor: [
                            '#0051FF',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: true
                        },
                        x: {
                            display: true
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
            priceChart1: null,
            buttonTrue: false,
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
            if (this.priceChart1 != null) {
                this.priceChart1.destroy();
            }
            this.priceChart1 = new Chart(
                document.getElementById('priceChart1'),
                this.config1
            );
        },
        removeClass() {
        // Logic to remove the class from the div
        // Replace 'your-div-class' with the actual class name of your div
        const divElement = document.querySelector('.post-content');
        divElement.classList.remove('mh-fixed');
        this.buttonTrue = true;
        },
    }

}

</script>


<style scoped>
.priceChart1 canvas {
    max-height: 60px;
    max-width: 170px;
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
        <div class="container mx-auto max-w-screen-xl page-heading"> <!-- container start -->

            <div class="call-to-action relative top-sec mb-[30px]">
                <div class="w-full flex justify-between mt-6">
                    <div class="w-full flex items-start justify-between">

                        <div class="flex items-start">
                            <img src="@/assets/img/icons/rank1-big.svg" class="hidden md:flex w-14 mr-5" alt="">
                            <div class="flex flex-col items-start">
                                <div class="flex items-start">
                                    <img src="@/assets/img/icons/rank1-big.svg" class="flex md:hidden h-[78px] w-14 mr-5"
                                        alt="">
                                    <ul class="mb-8">
                                        <li class="text-black text-2xl md:text-5xl font-normal mb-2">Bitcoin (BTC)</li>
                                        <li class="flex items-center text-sm font-normal">
                                            <span class="text-[#6B6C6F] text-base md:text-2xl mr-4">€ 1.507,31</span>
                                            <span class="text-[#23A638] text-base md:text-2xl mr-4">+3.25 %</span>
                                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 -4.37114e-07L10 7.5L0 7.5L5 -4.37114e-07Z" fill="#23A638" />
                                            </svg>

                                            <div class="text-[#BBBBBB] text-xs md:text-base font-normal ml-3">24h</div>
                                        </li>
                                    </ul>
                                    <div
                                        class="flex md:hidden ml-6 md:ml-16 w-16 h-16 md:w-[147px] md:h-[147px] rounded-full overflow-hidden">
                                        <img src="@/assets/img/exchange/Binance.png" class="object-cover w-full h-full mb-0"
                                            alt="">
                                    </div>
                                </div>

                                <div class="flex items-center">
                                    <div class="pr-3 md:pr-5">
                                        <div class="font-normal text-[#6B6C6F] font-xs md:font-sm mb-2">Market Cap</div>
                                        <div class="font-normal text-black font-base">$417.498.881.157</div>
                                    </div>
                                    <div class="px-3 md:px-5 border-x border-[#CDD5E7]">
                                        <div class="font-normal text-[#6B6C6F]  font-xs md:font-sm mb-2">24 Hour Volume
                                        </div>
                                        <div class="font-normal text-black font-base">$11.794.364.561</div>
                                    </div>
                                    <div class="pl-3 md:pl-5">
                                        <div class="font-normal text-[#6B6C6F]  font-xs md:font-sm mb-2">Available Supply
                                        </div>
                                        <div class="font-normal text-black font-base">19.102.625</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden md:flex ml-0 md:ml-16 w-16 h-16 md:w-[147px] md:h-[147px] rounded-full overflow-hidden">
                            <img src="@/assets/img/exchange/Binance.png" class="object-cover w-full h-full mb-0" alt="">
                        </div>
                    </div>
                </div>


            </div>


        </div> <!-- container end -->
    </section>
    <section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
        <div class="container mx-auto max-w-screen-xl"> <!-- container start -->
            <h2 class="text-black text-[32px] font-semibold mb-1">Binance USD, BUSD</h2>
            <div class="detail-content flex flex-col gap-6 lg:flex-row items-start justify-between">
                <div class="w-full lg:w-[800px]">
                    <div class="price-content">
                        <div class="chart-content mb-5">
                            <div class=" bg-white rounded-2xl p-6">
                                <div class="mb-6 flex items-end justify-between">
                                    <div class="">
                                        <div class="text-[#6B6C6F] text-left text-base font-normal mb-1">Binance Rates</div>
                                        <div class="text-black text-2xl font-semibold flex items-center">€ 1.507.31 <span
                                                class="text-[#23A638] font-normal text-sm ml-2 mr-1">+3.25 %</span> <svg
                                                width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="text-center hidden md:flex items-center justify-center mt-4">Select time period: <a
                                            href=""
                                            class="font-normal font-sm  py-0.5 px-4 bg-[#F3F6FD] border border-[#0051FF] rounded-[5px] ml-3">1d</a><a
                                            href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition mx-1">7D</a>
                                        <a href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition mx-1">30D</a>
                                        <a href=""
                                            class="font-normal font-sm py-0.5 px-4 bg-[#F3F6FD] border border-[#F3F6FD] rounded-[5px] hover:border-[#0051FF] transition">YTD</a>
                                    </div>
                                </div>
                                <div class="chart">
                                    <canvas id="priceChart1" width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="converter block md:hidden bg-white px-5 py-3 rounded-2xl mb-6">

                            <h4 class=" text-2xl text-black font-normal mb-4">BUSD to EUR</h4>

                            <div>
                                <label for="weight" class="block mb-1  text-xs font-normal text-black">From</label>
                                <div class="flex">
                                    <input type="text" id="weight"
                                        class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                        placeholder="">
                                    <span
                                        class="inline-flex items-center px-3 bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md">
                                        <img src="@/assets/img/exchange/Binance.png" height="24" width="24"
                                            class="mr-[6px] rounded-full overflow-hidden" alt="">
                                        BUSD
                                    </span>
                                </div>
                            </div>

                            <div class="flex items-center justify-end mt-3 mr-6">
                                <button type="button" class="toggle-button">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 12C5 12.5523 5.44771 13 6 13C6.55228 13 7 12.5523 7 12L7 6.41421L8.29289 7.70711C8.68342 8.09763 9.31658 8.09763 9.70711 7.70711C10.0976 7.31658 10.0976 6.68342 9.70711 6.29289L6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289L2.29289 6.29289C1.90237 6.68342 1.90237 7.31658 2.29289 7.70711C2.68342 8.09763 3.31658 8.09763 3.70711 7.70711L5 6.41421L5 12Z"
                                            fill="#0051FF" />
                                        <path
                                            d="M15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8L13 13.5858L11.7071 12.2929C11.3166 11.9024 10.6834 11.9024 10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071L13.2929 16.7071C13.4804 16.8946 13.7348 17 14 17C14.2652 17 14.5196 16.8946 14.7071 16.7071L17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929C17.3166 11.9024 16.6834 11.9024 16.2929 12.2929L15 13.5858L15 8Z"
                                            fill="#0051FF" />
                                    </svg>
                                </button>
                            </div>

                            <div class="mb-6 exchange-mb">
                                <label for="weight" class="block mb-1  text-xs font-normal text-black">To</label>
                                <div class="flex">
                                    <input type="text" id="weight"
                                        class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                        placeholder="">
                                    <span
                                        class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md">
                                        <div class="">
                                            <div class="no-label w-[85px]">
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption"
                                                        style="background-image: url(/_nuxt/assets/img/exchange/€.svg);">EUR
                                                    </div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-value="all" data-type="firstOption">
                                                            EUR</div>
                                                        <div class="option" data-type="secondOption"
                                                            data-value="internet-tv">
                                                            USD
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div class="buy-button group"><a
                                    class="bg-cblue text-white flex justify-center items-center py-2 px-7 rounded-full"
                                    href="">Buy Now<img src="@/assets/img/arrow-right-white-bg.svg"
                                        class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                            </div>
                        </div>
                        <div class="post-content mh-fixed">
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">About Binance USD</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Binance USD is a joint project of the
                                Binance trading platform and fintech company Paxos. It was launched as a part of the Binance
                                Venus blockchain project. It is reliable and transparent because Paxos has licences and
                                permissions of regulators and is audited every month.
                            </p>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                Users of Binance exchanges and services, all investors and traders are offered the BUSD
                                stablecoin as an alternative to the fiat dollar. It is suitable for saving assets during
                                crypto market turmoil. It is reliable and transparent because Paxos has licences and
                                permissions.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px]  text-black">Binance USD project history</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">The project with the stablecoin was
                                created in September 2019 by famous companies — Binance Holdings Ltd and Paxos Trust
                                Company, LLC. The first one was represented by its CEO Changpeng Zhao and his army of
                                developers, while the second one came with a small team led by CEO Charles Cascarilla. Their
                                goal was the modernisation of the financial system by launching a fail-safe global network
                                with stablecoins that would assist other cryptocurrencies in liquidity improvement.
                            </p>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                Binance and Paxos immediately received permission from the New York State Department of
                                Financial Services. Also, Paxos Trust Company had already obtained the BitLicense because it
                                had been issuing its own stablecoin—Paxos Standard (PAX)—for a long time. After a short
                                official announcement, in mid-September, Wei Zhou (CFO at Binance) and Rich Teo (CEO at
                                Paxos Asia) revealed the details of the partnership during the summit ‘Invest: Asia 2019’ in
                                Singapore.
                            </p>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                First, BUSD had been available for a direct exchange for PAX and USD through a personal
                                account on the Paxos website. Then, in late September, the Binance exchange listed its own
                                stablecoin paired with BTC, BNB, and XRP.</p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px]  text-black">Binance USD cryptocurrency aspects</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">Binance USD concurrently operates in two
                                blockchain networks. Since September 2019, first stablecoins have been issued in the
                                Ethereum blockchain according to the ERC-20 standard. After a month, Binance has started
                                issuing them in its Binance Chain according to the BEP-2 standard. This decision allowed
                                implementing them into decentralized applications of two different blockchains.
                            </p>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                Token contracts are used to issue Binance USD, so the stablecoin is technically not a coin
                                but a token with a stable price. BUSD tokens issued on different blockchains are
                                incompatible. So it is possible to send them only to the addresses of the corresponding
                                networks and only through wallets with support for the corresponding blockchain.
                            </p>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                To buy BUSD for the first time on the Binance exchange or the Paxos website, it is necessary
                                to pass the KYC procedure. Verification is needed due to regulators’ requirements in terms
                                of stablecoins and fiat currencies. It is all simple when it comes to the exchange — just
                                make deposits in any currency on an account and buy BUSD in any of three ways:
                            </p>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px]  text-black">Choose the exchange where you want to buy BUSD
                            </h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                Payment options are often the important factor for buying BUSD when choosing an exchange. In
                                the comparison tool we take this into account and we have put the best exchanges to buy BUSD
                                at the top. Because most exchanges ask for an e-mail, telephone number and proof of identity
                                when creating an account, it is useful to have these at hand.
                            </p>
                        </div>
                        
                    </div>
                        <div class="text-center mb-10 block md:hidden">
                        <button @click="removeClass" :class="{ 'hidden': buttonTrue }" class="read-more-btn bg-[#1F3157] text-white w-auto mx-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">
                                    Read More
                                </button>
                    </div>
                        <div class="exchanges-list mb-8">
                            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-5">
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/Bitvavo.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">Bitvavo</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/OKEX.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">OKEX</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/Huobi_Global.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">Huobi Global</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/Coinbase_Pro.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">Coinbase Pro</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/Kraken.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">Kraken</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-start bg-white rounded-[15px] pl-3.5 pr-9 py-5 w-full">
                                    <div class="w-[46px] h-[46px] rounded-full overflow-hidden mr-2">
                                        <img src="@/assets/img/exchange/Bitfinex.png" alt="">
                                    </div>
                                    <div class="w-full">
                                        <h4 class="font-normal text-2xl text-black mb-2 flex items-center">Bitfinex</h4>
                                        <div class="flex items-center mb-5"> <span
                                                class="font-normal text-xs text-black mr-1.5">Country:</span> <img
                                                src="@/assets/img/flag/flag03.svg" alt=""> <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <span
                                                class="font-normal text-xs text-black mr-1.5">Country: <span
                                                    class="text-base">50</span></span></div>
                                        <div class="text-black mb-5"> <span
                                                class="text-xs font-normal mr-3">Price:</span><span
                                                class=" text-xl font-semibold">€ 22.479,18</span>
                                        </div>
                                        <div class="buttons-bt flex items-center gap-2">
                                            <a href=""
                                                class="text-[#43547B] bg-[#D1D8E8] transition hover:bg-[#b7c2da] text-center font-semibold text-sm rounded-lg py-2.5 w-1/2">Review</a>
                                            <button type="button"
                                                class="bg-cblue text-white font-semibold  text-sm text-center rounded-lg py-2.5 w-1/2 transition opacity-100 hover:opacity-90 flex items-center justify-center gap-2.5">Buy
                                                Now <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375"
                                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-10">

                            <h2 class="font-semibold text-[32px] text-black">Buy Binance USD Tokens</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                You are now ready to buy BUSD. The easiest way to do this is to use the 'instant buy'
                                feature to buy BUSD at a fixed price (if the exchange offers this feature). Alternatively,
                                you can open a trade on the spot market that will allow you to set your own price - this is
                                the most common way to buy cryptocurrency. Using the direct buy feature is simple, but
                                generally more expensive than using the spot market. Before making your purchase, you may
                                want to know more about BUSD's market conditions. To decide if now is the right time to buy,
                                you can visit the $BUSD rate page. On this page you will find Binance USD Token price and
                                how it has performed lately.
                            </p>
                        </div>
                        <div class="cta-compare bg-[#235FDE] rounded-2xl w-full px-10 py-11 flex items-center mb-8">
                            <div class="w-2/3">
                                <h3 class="text-white font-semibold text-[32px] mb-1.5">Exchanges with Binance USD</h3>
                                <p class="text-white font-normal text-base mb-8">We have 128 exchanges in the comparison
                                    tool that sell Binance USD. View and compare for more information.</p>
                                <a class="bg-[#FFA800] group text-white inline-flex items-center py-3 px-7 rounded-full"
                                    href="">Compare Exchanges<img src="@/assets/img/arrow-right-white-bg.svg"
                                        class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                            </div>
                            <div class="w-1/3">
                                <img src="@/assets/img/cta-compare-img.svg" alt="">
                            </div>
                        </div>

                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-primary text-black">Where to keep BUSD</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7">
                                You can store BUSD on the exchange where you bought it, or you can store the BUSD tokens on
                                your own wallet. Some people like to have full control over their tokens and therefore opt
                                for an online or hardware wallet. hardware wallets are generally considered the most secure
                                choice. Read more about hardware wallets here. Where to Buy Binance USD Token Find an
                                exchange to buy, sell and trade BUSD by comparing payment options, supported vaults and
                                fees. With the View button you go directly to the exchange. How to sell Binance USD tokens
                                You can sell your BUSD with the same exchange you bought it from: Register with the
                                exchange. If you have your Binance USD tokens stored in an online wallet, compare the
                                exchanges on which you want to sell your BUSD. Place a sell order. Choose the amount of BUSD
                                you want to sell and complete the transaction.
                            </p>
                        </div>





                    </div>
                </div>
                <div class="w-full lg:w-[298px]">
                    <div class="sidebar-wrapper">
                        <div class="converter hidden lg:block bg-white px-5 py-3 rounded-2xl mb-6">

                            <h4 class=" text-2xl text-black font-normal mb-4">BUSD to EUR</h4>

                            <div>
                                <label for="weight" class="block mb-1  text-xs font-normal text-black">From</label>
                                <div class="flex">
                                    <input type="text" id="weight"
                                        class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                        placeholder="">
                                    <span
                                        class="inline-flex items-center px-3 bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md">
                                        <img src="@/assets/img/exchange/Binance.png" height="24" width="24"
                                            class="mr-[6px] rounded-full overflow-hidden" alt="">
                                        BUSD
                                    </span>
                                </div>
                            </div>

                            <div class="flex items-center justify-end mt-3 mr-6">
                                <button type="button" class="toggle-button">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 12C5 12.5523 5.44771 13 6 13C6.55228 13 7 12.5523 7 12L7 6.41421L8.29289 7.70711C8.68342 8.09763 9.31658 8.09763 9.70711 7.70711C10.0976 7.31658 10.0976 6.68342 9.70711 6.29289L6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289L2.29289 6.29289C1.90237 6.68342 1.90237 7.31658 2.29289 7.70711C2.68342 8.09763 3.31658 8.09763 3.70711 7.70711L5 6.41421L5 12Z"
                                            fill="#0051FF" />
                                        <path
                                            d="M15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8L13 13.5858L11.7071 12.2929C11.3166 11.9024 10.6834 11.9024 10.2929 12.2929C9.90237 12.6834 9.90237 13.3166 10.2929 13.7071L13.2929 16.7071C13.4804 16.8946 13.7348 17 14 17C14.2652 17 14.5196 16.8946 14.7071 16.7071L17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929C17.3166 11.9024 16.6834 11.9024 16.2929 12.2929L15 13.5858L15 8Z"
                                            fill="#0051FF" />
                                    </svg>
                                </button>
                            </div>

                            <div class="mb-6 exchange-mb">
                                <label for="weight" class="block mb-1  text-xs font-normal text-black">To</label>
                                <div class="flex">
                                    <input type="text" id="weight"
                                        class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                        placeholder="">
                                    <span
                                        class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md">
                                        <div class="">
                                            <div class="no-label w-[85px]">
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption"
                                                        style="background-image: url(/_nuxt/assets/img/exchange/€.svg);">EUR
                                                    </div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-value="all" data-type="firstOption">
                                                            EUR</div>
                                                        <div class="option" data-type="secondOption"
                                                            data-value="internet-tv">
                                                            USD
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div class="buy-button group"><a
                                    class="bg-cblue text-white flex justify-center items-center py-2 px-7 rounded-full"
                                    href="">Buy Now<img src="@/assets/img/arrow-right-white-bg.svg"
                                        class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h3 class=" text-2xl font-normal text-black mb-2">Explore Alternative</h3>
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
                                                    class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                    Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                        class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                        alt=""></a>
                                            </div>
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
                                                    class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                    Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                        class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                        alt=""></a>
                                            </div>
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
                                                    class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                    Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                        class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                        alt=""></a>
                                            </div>
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
                                                    class="group text-[10px] text-cblue font-normal flex items-center">Visit
                                                    Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                        class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                        alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href=""
                                class="group text-base text-cblue font-medium flex items-center justify-center mt-6">All
                                Exchanges <img src="@/assets/img/arrow-right-blue.svg"
                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                        </div>

                        <div class="bg-white rounded-2xl p-5 pb-7 mb-6">
                            <h4 class="font-semibold text-sm text-black mb-2">Recent News</h4>
                            <a href="" class="flex py-2 mb-3">
                                <div class="flex items-center justify-between">
                                    <div class=" h-[54px] w-[54px] rounded-[10px] overflow-hidden">
                                        <img src="@/assets/img/1.png" class=" object-cover h-full w-full" alt="">
                                    </div>
                                    <div class="w-[200px] ml-2">
                                        <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90%
                                            Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers,
                                            'Billions In Revenue'</h4>

                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5
                                            min</span>

                                    </div>
                                </div>
                            </a>
                            <a href="" class="flex py-2 mb-3">
                                <div class="flex items-center justify-between">
                                    <div class=" h-[54px] w-[54px] rounded-[10px] overflow-hidden">
                                        <img src="@/assets/img/2.png" class=" object-cover h-full w-full" alt="">
                                    </div>
                                    <div class="w-[200px] ml-2">
                                        <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90%
                                            Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers,
                                            'Billions In Revenue'</h4>

                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5
                                            min</span>

                                    </div>
                                </div>
                            </a>
                            <a href="" class="flex py-2">
                                <div class="flex items-center justify-between">
                                    <div class=" h-[54px] w-[54px]  rounded-[10px] overflow-hidden">
                                        <img src="@/assets/img/3.png" class=" object-cover h-full w-full" alt="">
                                    </div>
                                    <div class="w-[200px] ml-2">
                                        <h4 class="text-black text-xs font-normal ellipsis-content">Binance Says It Lost 90%
                                            Of Customers, 'Billions In Revenue' Binance Says It Lost 90% Of Customers,
                                            'Billions In Revenue'</h4>

                                        <span class="text-[#959595] text-[10px] font-normal">Jul 25, 2022 • Read: 5
                                            min</span>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="call-to-action full-width relative mt-9 md:mt-10">
                <div class="cta-shadow">
                    <div class="cta-inner px-14 py-10">
                        <div class=" text-left w-auto mx-auto flex items-center justify-between">
                            <div class="">
                                <h4 class=" text-2xl font-bold text-white mb-3">What do you think of Binance today?</h4>
                                <p class=" text-base text-white font-normal leading-7">Vote to see the results</p>
                            </div>
                            <div class="buy-button flex items-center justify-end gap-2">
                                <a class="bg-[#7EA0EB] group text-white inline-flex  w-auto mx-auto items-center py-2 px-7 rounded-lg"
                                    href="">Good<img src="@/assets/img/thumbs-up.svg"
                                        class="h-5 w-5 ml-3 scale-100 transition group-hover:scale-125" alt=""></a>
                                <a class="bg-[#7EA0EB] group text-white inline-flex  w-auto mx-auto items-center py-2 px-7 rounded-lg"
                                    href="">Bad<img src="@/assets/img/thumbs-down.svg"
                                        class=" rotate-180 h-5 w-5 ml-3 scale-100 sc transition group-hover:scale-125"
                                        alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
</template>