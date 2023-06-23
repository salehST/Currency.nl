<style>
.active-state{
    font-weight: 600;
    color: #0051FF;
}
</style>
<template>
<section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="call-to-action relative top-sec flex items-center justify-center mb-10">
            <div class="w-full text-center">
                <h2 class=" text-[32px] md:text-5xl font-bold leading-9 md:leading-[57px] mb-5 flex items-center justify-center">
                    <span class="strick-line-inline">News</span></h2>
            </div>
        </div>
    </div>
</section>
<section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="blog-news-slider flex flex-col md:flex-row items-stretch justify-between">
            <div class="h-[307px] md:h-[523px] w-full md:w-[72vw] lg:w-[849px]">
                <div class="nav bg-white py-3 px-6 rounded-full mb-4">
                    <ul class="flex items-center">
                        <li><a href="" class="active-state text-base font-normal text-black transition hover:text-[#0051FF] pr-2.5">All</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-[#0051FF]  px-6 border-x border-[#E7EBF4]">Investing</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-[#0051FF] px-6 border-x border-[#E7EBF4]">Mining</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-[#0051FF] px-6 border-x border-[#E7EBF4]">Trading</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-[#0051FF] px-6 border-x border-[#E7EBF4]">Exchanges</a></li>
                        <li><a href="" class="text-base font-normal text-black transition hover:text-[#0051FF] pl-6">Cryptocurrency</a></li>
                    </ul>
                </div>
                <NewsTopSlider />
            </div>
                <div class="md:w-[267px]">
                    
                    <NewsSideBar />
                </div>
        </div>

            <NewsMoreNews />
        </div>
    </section>
</template>
