
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
    }

}

</script>
<style scoped>.cu-chart canvas {
    max-height: 60px;
    max-width: 170px;
}</style>
<style>.coin-wall .ex-button {
    padding: 14px 22px;
}</style>
<style scoped>
.ex-icon-s {
    position: relative;
}

.ex-icon-s:after {
    content: "";
    width: 15px;
    position: absolute;
    height: 1px;
    background: #CBD7F3;
    top: 39px;
    right: 0;
}

.ex-icon-s:before {
    content: "";
    width: 15px;
    height: 1px;
    position: absolute;
    top: 39px;
    left: 0;
    background: #CBD7F1;
}
</style>
<template>
    <section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl page-heading">  <!-- container start -->
        <div class="call-to-action relative top-sec mb-10 w-4/5 mx-auto">
            <div class="w-full text-center">
                <h2 class=" text-[32px] md:text-5xl font-bold leading-9 md:leading-[57px] mb-6 flex items-center justify-center">
                    <span class="strick-line-inline">Currency Calculator</span></h2>

                    <p class="text-[#6B6C6F] font-normal text-base">Currency current exchange rates of all strange currencies in one place.</p>
            </div>

        </div>
        <div class="calculator-wrapper flex  justify-center mb-12">
            <div class="inner-ca bg-[#F9FBFF] border border-[#CBD7F1] rounded-[20px] px-6 pt-6 pb-11  inline-flex">
                <div class="mb-6 exchange-mb">
                                
                                <div class="flex">
                                    <div class="">
                                        <label for="weight"
                                    class="block mb-1 text-xs font-normal text-black">From</label>
                                        <div class="flex">
                                            <input type="text" id="weight"
                                                class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                                placeholder="€ 100">
                                            <span
                                                class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                                <div class="">
                                            <div class="no-label lg:w-[85px]">
                                                <div class="select">
                                                    <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/exchange/eur.svg);" >EUR </div>
                                                    <div class="selectDropdown">
                                                        <div class="option" data-value="all" data-type="firstOption">
                                                            EUR</div>
                                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                                            USD
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex items-end mb-0.5 px-3.5 ex-icon-s">
                                        <a href=""><img src="@/assets/img/exchange/ex-icon.svg" alt=""></a>
                                    </div>
                                    <div class="">
                                        <label for="weight"
                                    class="block mb-1 text-xs font-normal text-black">To</label>
                                    
                                    <div class="flex">
                                        <input type="text" id="weight"
                                            class="rounded-none rounded-l-md bg-white border border-r-0 border-[#D5DBE8] text-black font-normal text-xs focus:ring-[#3b82f6] focus:outline-none focus:border-[#3b82f6] block flex-1 min-w-0 w-full p-2.5"
                                            placeholder="$ 100">
                                        <span
                                            class="inline-flex items-center bg-white text-black font-normal text-xs focus:ring-[#3b82f6] border-[#D5DBE8] border rounded-r-md"> 
                                            <div class="">
                                        <div class="no-label lg:w-[85px]">
                                            <div class="select">
                                                <div class="selectBtn" data-type="firstOption" style="background-image: url(/_nuxt/assets/img/exchange/usd.svg);" >EUR </div>
                                                <div class="selectDropdown">
                                                    <div class="option" data-value="all" data-type="firstOption">
                                                        EUR</div>
                                                    <div class="option" data-type="secondOption" data-value="internet-tv">
                                                        USD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
        <div class="top-savings-list mb-14">
            <h3 class=" text-black text-[32px] font-semibold mb-3 text-center">Top 5 Savings</h3>
            <div class="grid md:grid-cols-5 grid-cols-2 gap-3">
                <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/BigBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">BigBank</li>
                            <li class="flex items-center">
                                <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                                <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/Anadolubank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Anadolubank</li>
                            <li class="flex items-center">
                                <span class="text-[#FF0019] font-semibold text-sm mr-1">-5.20%</span>
                                <span class="text-[#FF0019] font-normal text-xs">(($5.5992))</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/CentraalBeheer.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Centraal Beheer</li>
                            <li class="flex items-center">
                                <span class="text-[#23A638] font-semibold text-sm mr-1">+147.99%</span>
                                <span class="text-[#23A638] font-normal text-xs">($2.42341)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LloydsBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">Lloyds Bank</li>
                            <li class="flex items-center">
                                <span class="text-[#FF0019] font-semibold text-sm mr-1">-2.20%</span>
                                <span class="text-[#FF0019] font-normal text-xs">($1.59902)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-[#CBD7F1] rounded-[10px] overflow-hidden">
                    <div class="inline-flex items-center px-5 py-3">
                        <div class="text-center mx-auto h-8 w-8 rounded-full overflow-hidden mr-3">
                            <img src="@/assets/img/exchange/LeasePlanBank.jpg" class="w-full h-auto  " alt="">
                        </div>
                        <ul>
                            <li class="text-black text-base font-normal">LeasePlan Bank</li>
                            <li class="flex items-center">
                                <span class="text-[#23A638] font-semibold text-sm mr-1">+32.90%</span>
                                <span class="text-[#23A638] font-normal text-xs">($2.59902)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
       
        <h2 class="text-black text-[32px] font-semibold mb-4">Exchange Rate Foreign Currency</h2>
        <div class="detail-content flex items-start justify-between gap-6">
            
                <div class=" w-[818px]">
                    <div class="product-table-wrapper">
        <table class="w-full">
            <thead class="table-head">
                <tr class="text-sm text-left text-black font-semibold p-4">
                    <th class="p-4">#</th>
                    <th>COMPANY</th>                    
                    <th>PRICE CHART</th>
                    <th>1 € = UNITS </th>
                    <th>%</th>
                    <th>1 UNIT = €</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">1</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/apple.png" class="mr-2" alt=""> Apple</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">2</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/saudi-aramco.png" class="mr-2" alt=""> Saudi Aramco</span></td>
                    
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.1215</td>
                  
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#E71212] mr-3" data-v-7fd49c2f="">-2.62 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 5.99988L0 -0.00012207L8 -0.000121205L4 5.99988Z" fill="#E71212" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.5560
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">3</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/microsoft.png" class="mr-2" alt=""> Microsoft</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">4</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/google.png" class="mr-2" alt=""> Alphabet (Google)</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">5</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/amazon.png" class="mr-2" alt=""> Amazon</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">6</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/tesla.png" class="mr-2" alt=""> Tesla</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">7</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/berkshire.png" class="mr-2" alt=""> Berkshire Hathaway</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">8</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/meta.png" class="mr-2" alt=""> Meta Platform</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">9</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/Johnson-Johnson.png" class="mr-2" alt=""> Johnson & Johnson</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
                <tr class="single-row-item text-left p-4 w-full">
                    <td class="text-black text-sm font-medium p-4">10</td>
                    <td class="text-black text-sm font-medium"><span class="flex item items-center"> <img src="@/assets/img/logos/UnitedHealth.png" class="mr-2" alt=""> UnitedHealth</span></td>
                    <td class="save-info-tag hidden md:table-cell">
                        <div class="cu-chart">
                        <div ref="btc" class="">
                            <canvas id="stockChart1" width="400" height="400"></canvas>
                        </div>
                    </div>
                    </td>
                    <td class="text-black text-sm font-normal">1.2217</td>
                    <td class="">
                        <div class="flex items-center text-sm font-normal" data-v-7fd49c2f=""><span class="text-[#23A638] mr-3" data-v-7fd49c2f="">+3.25 %</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7fd49c2f=""><path d="M4 1.27146e-07L8 6L4.76837e-07 6L4 1.27146e-07Z" fill="#23A638" data-v-7fd49c2f=""></path></svg></div>
                    </td>
                    <td class="text-black text-sm font-normal">
                        0.9790
                    </td>
                </tr>
        </tbody>
    </table>
        </div>
        <div class="button-v text-center mt-5">
    <button type="button" class="bg-[#1F3157] text-white w-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">View More</button>
</div>
                </div>
                <div class=" w-[298px]">
                    <div class="sidebar-wrapper">
                        <div class="bg-white rounded-2xl p-4 pb-7 mb-6">
                        <h3 class=" text-[20px] font-normal text-black mb-2">Exchanges that Trade USD</h3>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/FXTM.jpg" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">FXTM
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-states.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Pepperstone.jpg" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Pepperstone
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/japan.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start  border-b border-[#D5DBE8]">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/EasyMarkets.jpg" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Easy Markets
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/united-kingdom.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ex-info-inner w-full py-4 flex items-start">
                            <div class="logo w-14">
                                <img src="@/assets/img/exchange/Vantage.jpg" class="w-full h-auto" alt="">
                            </div>
                            <div class="ex-detail ml-3  w-auto">
                                <div class="detail-top flex items-center justify-between">
                                    <div class="w-full">
                                        <div class="font-normal text-2xl text-black flex items-center">Vantage
                                        </div>
                                        <div class="flex items-center"><img src="@/assets/img/flag/china.svg" alt="">
                                            <span
                                                class="rating-ex mx-2 px-2 border-r border-l border-[#F1F5FE] font-normal text-sm text-black flex items-center gap-1">
                                                <img src="@/assets/img/icons/star.svg" alt=""> 5.0</span> <a href=""
                                                class="group text-[10px] text-[#0051FF] font-normal flex items-center">Visit
                                                Exchange <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href=""
                                                class="group text-base text-[#0051FF] font-medium flex items-center justify-center mt-6">All Brokers <img src="@/assets/img/arrow-right-blue.svg"
                                                    class="ml-1 translate-x-0 transition group-hover:translate-x-1"
                                                    alt=""></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>
