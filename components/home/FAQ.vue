<template>
        <div class="flex items-center justify-between mb-10 mt-10 md:mt-36">
            <div class="w-full md:w-7/12">
                <h2 class="w-9/12 md:w-full text-[32px] text-primary md:text-5xl font-bold leading-9 md:leading-[57px] mb-5 "><span class="strick-line-inline">Frequently</span>  Asked Questions
                    </h2>
                <p class="text-[#6B6C6F] text-sm md:text-xl font-normal leading-6 md:leading-8 pr-10">Monitor capitalization, price, daily volume, and price changes of any coin in real time!</p>
            </div>
            <div class="image-area hidden md:block w-3/12">
                <img src="@/assets/img/faq.svg" class="w-full h-auto" alt="">
            </div>
        </div>
        <div>
    <div v-for="(section, index) in accordionSections" :key="index" class="mb-3 pb-5 bg-white rounded-xl overflow-hidden">
      <button
        @click="toggleSection(index)"
        :class="{
          'bg-white': activeSection === index,
          'bg-white': activeSection !== index,
        }"
        class="w-full text-black px-4 pt-6 pr-8 text-left text-sm md:text-base font-medium focus:outline-none flex justify-between items-center transition-all duration-300 "
      >
        <span class="flex items-center">
              <span class="pr-9">
                <svg class="" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5.5" r="5.5" fill="#0051FF"/>
                </svg>
              </span>
              <span class="faq-sec-title">{{ section.title }}</span></span>       
              <svg :class="{
            'rotate-90': activeSection !== index,
            'rotate-0': activeSection === index
          }" class="h-5 w-5 transition-transform duration-300" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2944 11.619C9.49534 12.7087 7.86794 12.7087 7.06883 11.619L1.01564 3.36461C0.0468677 2.04356 0.99025 0.181885 2.62845 0.181885L14.7348 0.181886C16.373 0.181886 17.3164 2.04356 16.3476 3.36461L10.2944 11.619Z" fill="black"/>
              </svg>
              <!-- <svg v-else width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.06292 10.6128C-0.0267749 9.8137 -0.0267748 8.1863 1.06292 7.38719L9.31727 1.334C10.6383 0.365227 12.5 1.30861 12.5 2.94681L12.5 15.0532C12.5 16.6914 10.6383 17.6348 9.31727 16.666L1.06292 10.6128Z" fill="black"/>
              </svg> -->
      </button>
      <div :class="{ 'max-h-0 pt-0 ': activeSection !== index, 'max-h-[1000px] pt-6 ': activeSection === index }"
        :style="{ transition: activeSection === index ? 'all 250ms ease-in-out' : 'all 250ms ease-in-out' }"
 class="pl-16 pr-16 bg-white transition-all duration-300 overflow-hidden">
        {{ section.content }}
      </div>
    </div>
  </div>
</template>
<style scoped>
svg.rotate-90 {
  transform: rotate(90deg);
}

svg.rotate-0 {
  transform: rotate(0deg);
}
@media only screen and (max-width: 769px) {
.faq-sec-title {
    white-space: nowrap;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
}
}

</style>
<script>
export default {
  data() {
    return {
      activeSection: 0,
      accordionSections: [
        {
          title: 'What are cryptocurrencies?',
          content: `Cryptocurrencies are digital coins that use blockchain technology. These digital currencies know how to distance themselves from the traditional FIAT money that we use in the world. This has everything to do with the decentralized character that a cryptocurrency has. If you have a bank account full of euros you have the idea that it is yours, but actually your account is at a bank. When you log in to your mobile application or your online banking environment, you will in principle see nothing more or less than a piece of your bank's accounting. That is not the case with cryptocurrencies. Do you have a wallet in which there are 10 bitcoins? Then these are really yours and nobody else can claim that. Just this ensures that cryptocurrencies, especially in economically uncertain times, can be structural added value within the financial market.`
        },
        {
          title: 'What is the best way to buy cryptocurrencies?',
          content: 'Content for Section 2'
        },
        {
          title: 'How to buy cryptocurrencies online?',
          content: 'Content for Section 3'
        },
        {
          title: 'What to take into account when buying cryptocurrencies online?',
          content: 'Content for Section 4'
        },
        {
          title: 'What is Crypto?',
          content: 'Content for Section 5'
        },
        {
          title: 'How long will crypto last?',
          content: 'Content for Section 6'
        },
        {
          title: 'How did crypto arise?',
          content: 'Content for Section 7'
        },
        {
          title: 'What can Crypto Paluta be used for?',
          content: 'Content for Section 8'
        },
      ]
    };
  },
  methods: {
    toggleSection(index) {
      if (this.activeSection === index) {
        this.activeSection = null;
      } else {
        this.activeSection = index;
      }
    }
  }
};
</script>