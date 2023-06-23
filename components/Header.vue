<script>

export default {
    mounted() {
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
        toggleClass() {
    let button = document.querySelector('#nav-icon');
    let nav = document.querySelector('nav');
    button.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
},
        goBack() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.add("opacity-0");
            backBtn.classList.add("hidden");
        },
        showSubMenu() {
            const backBtn = document.querySelector('.back-ul');

            backBtn.classList.remove("opacity-0");
            backBtn.classList.remove("hidden");
        }
    }

}

</script>
<style>
.mega-menu-full-dropdown-button li.menu-item:hover button svg path {
    fill: unset;
}

.mega-menu-full-dropdown-button li.menu-item:hover button svg {
    margin-right: 5px;
    display: block;
}
.header-lang .select .selectBtn.filter-icon {
    border: none;
}
</style>
<template>
    <!-- header start -->
    <header class="">

        <div class="w-full z-40 absolute md:relative text-gray-700 bg-white">
            <div class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-0 ">
                <div class="py-4 flex flex-row items-center justify-between">
                    <NuxtLink to="/" class="flex md:hidden items-center w-40"><img src="@/assets/img/logo.svg"
                            class="mr-3 h-[40px] sm:h-[50px]" alt="Logo" /></NuxtLink>
                    <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <div id="nav-icon" @click="toggleClass">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <nav class="flex-col flex-grow items-center pb-4 md:pb-0 hidden md:flex md:justify-between md:flex-row">
                    <NuxtLink to="/" class="hidden md:flex items-center w-40"><img src="@/assets/img/logo.svg"
                            class="mr-3 h-[40px] sm:h-[50px]" alt="Logo" /></NuxtLink>
                    <div class="search-area py-2 mx-2 text-sm font-semibold text-[#0052fe] flex flex-col md:flex-row items-start w-full md:w-auto md:items-center justify-start md:justify-center bg-white hover:text-blue-500 ">
                        
                        <NuxtLink to="/" class="text-base md:text-sm font-semibold py-5 px-5 text-black transition hover:text-[#0051FF] w-full md:w-auto">Home</NuxtLink>
                        <div class="flex items-center w-full md:w-auto">
                            <div class="mega-menu inline-flex items-center bg-white w-full md:w-auto">                               
                                    <NuxtLink to="/exchanges" class="text-base md:text-sm font-semibold border-y border-[#DEE4F1] w-full md:w-auto md:border-none py-5 px-5 text-black transition hover:text-[#0051FF]">Exchanges
                                    </NuxtLink>
                                <div
                                    class="menu-wrapper hidden mega-menu-wrapper top-[75px] absolute right-0 w-full origin-top-right z-40 grid-cols-1 text-sm bg-white shadow-md md:grid">
                                    <div class=" max-w-screen-xl mx-auto z-40 w-full text-sm pb-14 pt-6">
                                        <div class="flex justify-between">
                                            <div class="w-1/4 pl-14">
                                                <h3 class="text-2xl font-semibold text-black mb-2">Find the best places to buy digital currencies.</h3>
                                                <p class="text-[#6B6C6F] text-xs font-normal">Monitor capitalization, price, daily volume, and price changes of any coin in real time!</p>
                                            </div>
                                            <div class="w-3/4 flex items-center justify-between ml-7 pl-12 border-l border-[#DEE4F1]">
                                                <div class="mb-6 md:mb-0 grid grid-cols-2 gap-2 sm:justify-between md:items-center md:flex sm:flex-wrap basis-full">
                                                    <div class="mb-6 md:mb-0">
                                                        <h2 class="mb-6 text-base font-semibold text-black ">Exchange Z</h2>
                                                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Bitcoin</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Ethereum</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Cardano</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Tether</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Solana</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="mb-6 md:mb-0">
                                                        <h2 class="mb-6 text-base font-semibold text-black ">Exchange O</h2>
                                                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Bitcoin</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Ethereum</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Cardano</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Tether</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Solana</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="mb-6 md:mb-0">
                                                        <h2 class="mb-6 text-base font-semibold text-black ">Exchange T</h2>
                                                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Bitcoin</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Ethereum</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Cardano</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Tether</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Solana</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="mb-6 md:mb-0">
                                                        <h2 class="mb-6 text-base font-semibold text-black ">Exchange F</h2>
                                                        <ul class="text-xs font-normal leading-5 text-[#6B6C6F]">
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Bitcoin</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Ethereum</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Cardano</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Tether</a>
                                                            </li>
                                                            <li class="mb-4">
                                                                <a href="#" class="">Buy Solana</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    
                                                <a href="" class=" text-[#0051FF] text-sm font-normal flex items-center">Visit Exchange <img src="@/assets/img/icons/arrow-right-blue.svg" class="ml-2 h-[14px] w-[14px]" alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href=""
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-[#0051FF]">Prices</a>
                        <NuxtLink to="/knowledgebase"
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-[#0051FF]">Knowledge
                            Base</NuxtLink>
                        <NuxtLink to="/news"
                            class="text-base md:text-sm font-semibold border-b border-[#DEE4F1] md:border-none py-5 px-5 text-black w-full md:w-auto transition hover:text-[#0051FF]">News</NuxtLink>
                        <NuxtLink to="/calculator"
                            class="text-base w-full md:w-auto md:text-sm font-semibold py-5 px-5 text-black transition hover:text-[#0051FF]">Calculator</NuxtLink>
                        <div class="w-full lg:w-auto header-lang hidden md:flex">
                            <form action="" class="text-left w-full lg:w-20">
                                <div class="">
                                    <div class="no-label w-full lg:w-20">
                                        <div class="select" id="lang">
                                            <div class="selectBtn filter-icon" data-type="firstOption">En </div>
                                            <div class="selectDropdown">
                                                <div class="option" data-value="all" data-type="firstOption">
                                                    En</div>
                                                <div class="option" data-type="secondOption" data-value="internet-tv">
                                                    Du
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                        </div>
                </div>
                <div class="w-full lg:w-auto flex md:hidden mt-14">
                    <form action="" class="text-left w-full mx-auto md:mx-0">
                        <div class="">
                            <div class="no-label w-full  mx-auto md:mx-0">
                                <div class="select" id="price">
                                    <div class="selectBtn filter-icon" data-type="firstOption">English </div>
                                    <div class="selectDropdown">
                                        <div class="option" data-value="all" data-type="firstOption">English</div>
                                        <div class="option" data-type="secondOption" data-value="internet-tv">
                                            Dutch
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </div>

</header>
<!-- header end --></template>