<script>
import Chart from 'chart.js/auto/auto.mjs';
export default {
    data() {
        return {
            stockConfig2: {
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
            stockChart2: null,
        }
    },
    mounted() {

        this.ChartRender();
    },
    methods: {
        ChartRender() {
            if (this.stockChart2 != null) {
                this.stockChart2.destroy();
            }
            this.stockChart2 = new Chart(
                document.getElementById('stockChart2'),
                this.stockConfig2
            );

        },
    }

}

</script>
<style scoped>
.cu-chart canvas {
    max-height: 30px;
    max-width: 150px;
}
@media only screen and (max-width: 769px) {
.product-table-wrapper .single-row-item td:nth-child(2) span {
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
}
</style>
<template>
        <div class="flex items-center justify-between mb-10 mt-24 md:mt-36">
            <div class="w-full md:w-7/12">
                <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-5 ">Most <span class="strick-line-inline"> popular</span> exchanges in the Netherlands
                    </h2>
                <p class="text-[#6B6C6F] text-xl font-normal leading-8 pr-10">Monitor capitalization, price, daily volume, and price changes of any coin in real time!</p>
            </div>
            <div class="hidden md:flex image-area w-3/12">
                <img src="@/assets/img/cu-stocks-2.svg" class="w-full h-auto" alt="">
            </div>
        </div>

        <div class="product-table-wrapper">
        <table class="w-full">
            <thead class="table-head">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">#</th>
                    <th>Exchange</th>
                    <th class="hidden md:table-cell">Volume</th>
                    <th class="hidden md:table-cell">Points</th>
                    <th>Rating</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">1</td>
                    <td class="text-black text-sm font-medium "><span class="flex items-center"> <img src="@/assets/img/exchange/01.jpg" class="mr-2" alt=""> Bitvavo</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 76.38 M</td>
                   
                    <td class="text-black text-sm font-normal hidden md:table-cell">
                        50
                    </td>
                   
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.8</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">2</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/02.jpg" class="mr-2" alt=""> PancakeSwap (V2)</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 10.85 B</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">50</td>                   
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.7</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">3</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/03.jpg" class="mr-2" alt=""> Hotbit</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 447.81 M</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">50</td>                  
                    
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.5</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">4</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/04.jpg" class="mr-2" alt=""> Gate.io</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 447.81 M</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">40</td>
                    
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.5</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">5</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/05.jpg" class="mr-2" alt=""> MEXC</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 22.55 M</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">40</td>
                    
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.7</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">6</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/06.jpg" class="mr-2" alt=""> Uniswap (V2)</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 15.44 M</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">30</td>
                   
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.7</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">7</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/exchange/07.jpg" class="mr-2" alt=""> LATOKEN</span></td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">€ 13.22 M</td>
                    <td class="text-black text-sm font-normal hidden md:table-cell">40</td>
                    
                    <td class="text-black text-sm font-normal">
                        <span class="flex items-center"> <img src="@/assets/img/star.svg" class="mr-2" alt=""> 4.8</span>
                    </td>
                    <td class="product-info-modal text-center">
                        <button type="button" class="bg-cblue text-white font-semibold  text-sm py-2 px-5 md:px-9 rounded transition opacity-100 hover:opacity-90 flex items-center gap-2.5">View <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6875 2.5625H2.5625V10.4375H10.4375V6.3125M10.4375 2.5625L6.3125 6.6875M8.5625 1.8125H11.1875V4.4375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
        <div class="button-v text-center mt-5">
    <button type="button" class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View More</button>
</div>
</template>