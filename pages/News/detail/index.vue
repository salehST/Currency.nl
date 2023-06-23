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
        
            <div class="relative ">
                <div class="hidden md:block back-btn absolute -left-12 top-2">
                    <NuxtLink to="/news">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5316 26.7314C14.9067 27.3563 13.8937 27.3563 13.2688 26.7314L3.66883 17.1314C3.04399 16.5066 3.04399 15.4935 3.66883 14.8687L13.2688 5.26868C13.8937 4.64384 14.9067 4.64384 15.5316 5.26868C16.1564 5.89352 16.1564 6.90658 15.5316 7.53142L8.66294 14.4H27.2002C28.0839 14.4 28.8002 15.1164 28.8002 16C28.8002 16.8837 28.0839 17.6 27.2002 17.6L8.66294 17.6L15.5316 24.4687C16.1564 25.0935 16.1564 26.1066 15.5316 26.7314Z" fill="black"/>
                    </svg>
                    </NuxtLink>
                </div>
                <h1 class=" font-semibold text-5xl text-black mb-4 w-full md:w-11/12 leading-[57px]">Sports betting with crypto, is it allowed in the Netherlands?</h1>
            </div>
        <div class="blog-news-slider flex flex-col md:flex-row items-stretch justify-between">
           
            <div class=" w-full md:w-[72vw] lg:w-[849px]">
                
                <NewsDetailNewsInfo />
            </div>
                <div class="md:w-[267px]">
                    
                    <NewsDetailSideBar />
                </div>
        </div>

        </div>
        
    </section>
    
    <NewsDetailRelatedNews />
</template>
