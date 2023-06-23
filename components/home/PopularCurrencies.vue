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
@media only screen and (max-width: 769px) {
    .cu-chart canvas {
    max-width: 100%;
}
}
</style>
<template>
    <div class="flex flex-col md:flex-row items-start justify-start md:items-end md:justify-between mb-10">
        <div class="">
            <h2 class=" text-[32px] md:text-5xl font-bold leading-9 md:leading-[57px] mb-3 md:mb-0"><span class="flex items-center">Popular <img
                        src="@/assets/img/big-coin.svg" class="ml-2" alt=""></span><span
                    class="strick-line-inline">Cryptocurrencies</span> <br class="block md:hidden"> in 2023</h2>
        </div>

        <div class="options-area flex items-center gap-3 mb-3">
            <div class="currency-box flex items-center gap-2">
                <span class=" text-sm font-semibold text-black">Currency</span>
                <form action="" class="text-left w-full lg:w-28">
                    <div class="">
                        <div class="no-label w-[74px] lg:w-28">
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
                <a href="" class="text-[#0051FF] text-base font-semibold underline transition hover:no-underline">View All
                    Providers</a>
            </div>
        </div>
    </div>

    <!-- currency charts start -->

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
<div class="button-v text-center mt-5">
    <button type="button" class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View More</button>
</div>

<!-- currency charts end -->
</template>