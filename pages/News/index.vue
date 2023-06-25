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

};
</script>
<style>
.active-state{
    font-weight: 600;
    color: #0051FF;
}
</style>

<template>
<section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="call-to-action relative top-sec flex items-center justify-center">
            <div class="w-full text-left md:text-center">
                <h2 class=" text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] flex items-center justify-start md:justify-center">
                    News</h2>
            </div>
        </div>
    </div>
</section>
<section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="blog-news-slider flex gap-6 flex-col lg:flex-row items-stretch justify-between">
            <div class="order-2 md:order-1 w-full lg:w-[849px]">
             
                <div class="hidden lg:flex mb-4">
                    <div class="w-full lg:w-auto">
                        <form action="" class="text-left w-full lg:w-40 mx-auto md:mx-0">
                            <div class="w-full lg:">
                                <div class="no-label w-full lg:w-40 mx-auto md:mx-0">
                                    <div class="select bg-white rounded-lg" id="">
                                        <div class="selectBtn" data-type="firstOption">All </div>
                                        <div class="selectDropdown">
                                            <div class="option" data-value="all" data-type="firstOption">All</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Investing</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Mining</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Trading</div>
                                            <div class="option" data-type="secondOption" data-value="internet-tv">
                                                Exchanges
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- <ul class="flex items-center">
                        <li><a href="" class="active-state text-base font-normal text-black transition hover:text-cblue pr-2.5">All</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-cblue  px-6 border-x border-[#E7EBF4]">Investing</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-cblue px-6 border-x border-[#E7EBF4]">Mining</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-cblue px-6 border-x border-[#E7EBF4]">Trading</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-cblue px-6 border-x border-[#E7EBF4]">Exchanges</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-cblue pl-6">Cryptocurrency</a></li>
                    </ul> -->
                </div>
                <NewsTopSlider />
            </div>
                <div class="w-full lg:w-[267px] order1 md:order-2">
                    
                    <NewsSideBar />
                </div>
        </div>

            <NewsMoreNews />
        </div>
    </section>
</template>
