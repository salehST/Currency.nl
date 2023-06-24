<script setup>
const route = useRoute();

const content = computed(() => {
    return route.params.content.replaceAll("-", " ");
});

</script>
<script>
export default {

  data() {
    return {
        buttonTrue: false,
    };
  },
  methods: {
    removeClass() {
      // Logic to remove the class from the div
      // Replace 'your-div-class' with the actual class name of your div
      const divElement = document.querySelector('.post-content');
      divElement.classList.remove('mh-fixed');
      this.buttonTrue = true;
    }
  }
};
</script>
<template>
    <section class="bg-white w-full p-10 md:p-12">
    <div class="container mx-auto max-w-screen-xl page-heading">  <!-- container start -->
        <div class="call-to-action relative top-sec max-w-[1068px] mx-auto">
    <div class="w-full flex text-center mt-6">
        <h2 class="text-[32px] text-primary md:text-5xl font-bold mx-auto leading-9 md:leading-[57px] mb-5 "><span class="flex"><span class="strick-line-inline">{{ content }}</span>  </span></h2>            
    </div>
</div>     
    </div>  <!-- container end -->
</section>
<section class="w-full bg-[#F1F5FE] p-10 md:p-12 md:pt-16">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="detail-page flex flex-col md:flex-row items-start justify-between">
            <div class="fe-image flex md:hidden w-full h-[316px] rounded-lg overflow-hidden mb-6">
                <img src="@/assets/img/00115.jpg" class=" object-cover h-full w-full" alt="">
            </div>
            <div class="content-options left-content w-full md:w-[275px]">
                <div class="content-wrapper">
                    <div class="content-option-list bg-white rounded-[10px] mb-6">
                        <h4 class="text-sm font-semibold text-black p-4 border-b border-[#DEE4F1] flex items-center">
                            <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 3.99995C2.3999 3.55812 2.75807 3.19995 3.1999 3.19995H12.7999C13.2417 3.19995 13.5999 3.55812 13.5999 3.99995C13.5999 4.44178 13.2417 4.79995 12.7999 4.79995H3.1999C2.75807 4.79995 2.3999 4.44178 2.3999 3.99995Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 7.99995C2.3999 7.55812 2.75807 7.19995 3.1999 7.19995H7.9999C8.44173 7.19995 8.7999 7.55812 8.7999 7.99995C8.7999 8.44178 8.44173 8.79995 7.9999 8.79995H3.1999C2.75807 8.79995 2.3999 8.44178 2.3999 7.99995Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3999 12C2.3999 11.5581 2.75807 11.2 3.1999 11.2H12.7999C13.2417 11.2 13.5999 11.5581 13.5999 12C13.5999 12.4418 13.2417 12.8 12.7999 12.8H3.1999C2.75807 12.8 2.3999 12.4418 2.3999 12Z" fill="black"/>
                            </svg>

                            Contents</h4>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer font-normal text-sm">
                                <span>First introduction to blockchain</span> 
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer font-normal text-sm">
                                <span>How does blockchain distinguis...</span> 
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer font-normal text-sm">
                                <span>Different types of blockchains</span> 
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer font-normal text-sm">
                                <span>The consensus on the blockchain</span> 
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                </svg>
                            </div>
                            <div class="flex items-center justify-between p-4 border-b border-[#DEE4F1] cursor-pointer font-normal text-sm">
                                <span>The lack of a central accountant</span> 
                                <svg class="filter-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#424242"/>
                                </svg>
                            </div>
                    </div>
                    <a href="" class=" font-semibold text-base text-cblue border border-[#0051FF] rounded-lg flex items-center group justify-center gap-2.5 py-3">View More Articles <svg class=" translate-x-0 group-hover:translate-x-1 transition" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 3.79289C10.6834 3.40237 11.3166 3.40237 11.7071 3.79289L17.7071 9.79289C18.0976 10.1834 18.0976 10.8166 17.7071 11.2071L11.7071 17.2071C11.3166 17.5976 10.6834 17.5976 10.2929 17.2071C9.90237 16.8166 9.90237 16.1834 10.2929 15.7929L14.5858 11.5L3 11.5C2.44772 11.5 2 11.0523 2 10.5C2 9.94772 2.44772 9.5 3 9.5H14.5858L10.2929 5.20711C9.90237 4.81658 9.90237 4.18342 10.2929 3.79289Z" fill="#0051FF"/>
</svg>
</a>
                </div>
            </div>
            <div class="mid-content w-full md:w-[578px]">
                <div class="in-content">
                    <div class="fe-image hidden md:flex w-full h-[316px] rounded-lg overflow-hidden mb-6">
                        <img src="@/assets/img/00115.jpg" class=" object-cover h-full w-full" alt="">
                    </div>
                    <div class="post-content mh-fixed mt-6">
                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-black">First introduction to blockchain</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> The world's first introduction to blockchain actually took place through the Bitcoin whitepaper prepared by Satoshi Nakamoto. In this white paper, of course, special attention was paid to Bitcoin as a cryptocurrency. That being said, the white paper also made a reference to an accounting system that indicated how much Bitcoin someone owns as well as which transactions have been carried out. This accounting system is, as it were, made up of different ledgers which are kept by everyone who uses the Bitcoin network. In addition, it is also the case that all participants jointly determine whether a certain transaction can be executed or not. Transactions on the blockchain are processed in so-called "blocks". It also applies to a block that it is only valid if it contains all correct data from the previous block. This is necessary because each block has its own numerical characteristics. In practice we call this a 'hash'. The hash related to the previous block is thus processed back into the hash of the current block. In this way a chain of hashes is formed between the different blocks. This method is therefore at the basis of the name 'blockchain'. It is striking that the term blockchain was not mentioned at all in the original white paper by Satoshi Nakamoto. This term was not coined until quite a while later. Nakamoto also wrote about blockchain no more than about the other properties of Bitcoin. This makes it immediately clear that this technology (however great the potential that lies behind it) was not more important in his opinion compared to the other features that Bitcoin has. </p>
                        </div>
                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-black">How does blockchain distinguish itself?</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> Blockchain as a technology can be considered unique because it has some very specific characteristics. Initially, the blockchain is a kind of public register in which all transactions are kept. Another crucial property of the blockchain is that it is decentralized. This means that each participant can run a copy of the blockchain on their computer and therefore power does not rest with a single, central party. In practice, a blockchain is formed by thousands of computers scattered around the world that are connected to a network. All these different computers must come to an agreement in order to determine which transactions are valid and which are not. The moment one of the participants of the network chooses to perform a transaction, it is sent to the network sent. All computers connected to it, in turn, run complex algorithms to determine whether the transaction in question is valid or not. The moment the validity of the transaction is confirmed, it will be added to the transaction overview and linked to the previous transaction block. The chain of linked transactions is thus known in practice as the blockchain. </p>
                        </div>
                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-black">Different types of blockchains</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> In addition to the above, it is also important to take into account that there is not just one single blockchain. Instead, there are many different types of blockchains on the market, each with their own unique, concrete properties. We therefore make a distinction in this regard between:
</p>
                                <ul class=" list-inside list-decimal text-[#6B6C6F] text-sm font-normal leading-7 my-8">
                                    <li>The standard and well-known public blockchain;</li>
                                    <li>The hybrid blockchain;</li>
                                    <li>The private blockchain;</li>
                                </ul>



                                <p class="text-[#6B6C6F] text-sm font-normal leading-7">
The public blockchain is of course the best known. Some examples of this are Bitcoin and Litecoin. Anyone who creates an account can participate in such a blockchain. This is of course not the case with a private blockchain. This type of blockchain is therefore used within a company or organization. By using this technology, it is possible for companies to exchange data between departments and branches, for example, in a secure, efficient and cost-effective way. Finally, there is also the hybrid blockchain. In practice, this is also sometimes referred to as a 'consortium blockchain'. This is a closed environment in which different parties work together to share data and transactions. An example of this can be, for example, a group of banks which carry out mutual transactions. A logistics chain would also be a possibility. </p>
                        </div>
                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-black">The consensus on the blockchain</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> Finally, it is also important to take into account that in practice a blockchain can use different algorithms. By default, it was decided to use the Proof of Work algorithm for Bitcoin, for example. Because this algorithm consumes a lot of energy in practice (even more than certain countries use), alternatives were sought. A popular alternative is, for example, the Proof of Stake algorithm. Miners are not used, which means that the energy cost can be significantly reduced. Instead, any owner of a certain amount of tokens can “stake” them into a wallet. This algorithm is so interesting that Ethereum in particular is even thinking about moving from Proof of Work to Proof of Stake. </p>
                        </div>
                        <div class="mb-10">
                            <h2 class="font-semibold text-[32px] text-black">The lack of a central accountant</h2>
                            <p class="text-[#6B6C6F] text-sm font-normal leading-7"> Another important advantage that you can count on by using the blockchain is the fact that there is no central party or central accountant. In principle, anyone can act as a bank, because every participant has the right to all information that is part of the blockchain in question. The principle of the blockchain can be applied in practice in many different ways, not just in the form of Bitcoin. The possibilities are in principle unlimited. For example, you could place the registration of a mortgage in the blockchain and you could also store sensitive data (such as a medical file) in it. </p>
                        </div>
                    </div>
                    <div class="text-center mb-10 block md:hidden">
                        <button @click="removeClass" :class="{ 'hidden': buttonTrue }" class="read-more-btn bg-[#1F3157] text-white w-auto mx-auto text-base font-semibold py-2 px-6 rounded-lg opacity-100 transition hover:opacity-90">
                                    Read More
                                </button>
                    </div>
                   <div class="bottom-social-rating pt-5 border-t border-[#DEE4F1]">
                    <div class="flex justify-between items-start">
                        <div class="detail-page-rating">
                            <h4 class="font-semibold text-xs text-black mb-1.5">Tap to rate this article</h4>
                            <div class="stars flex flex-col lg:flex-row justify-start items-start lg:items-center gap-2">
                                <div class="star-s flex items-center gap-2">
                                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2522 1.14197C14.0145 -0.228374 15.9855 -0.228376 16.7478 1.14197L19.9043 6.81642C20.1907 7.33122 20.6894 7.69359 21.2675 7.80686L27.6397 9.05539C29.1785 9.35691 29.7876 11.2314 28.7199 12.3799L24.2986 17.1354C23.8975 17.5668 23.7069 18.1532 23.7779 18.738L24.5595 25.1841C24.7483 26.7407 23.1537 27.8993 21.7316 27.2387L15.8425 24.5033C15.3083 24.2552 14.6917 24.2552 14.1575 24.5033L8.26844 27.2387C6.84628 27.8993 5.2517 26.7408 5.44047 25.1841L6.22214 18.738C6.29306 18.1532 6.10255 17.5668 5.70144 17.1354L1.28014 12.3799C0.212419 11.2314 0.821491 9.35691 2.36033 9.05539L8.73246 7.80686C9.31056 7.69359 9.80932 7.33122 10.0957 6.81642L13.2522 1.14197Z" fill="#FEA424"/>
</svg>
<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2522 1.14197C14.0145 -0.228374 15.9855 -0.228376 16.7478 1.14197L19.9043 6.81642C20.1907 7.33122 20.6894 7.69359 21.2675 7.80686L27.6397 9.05539C29.1785 9.35691 29.7876 11.2314 28.7199 12.3799L24.2986 17.1354C23.8975 17.5668 23.7069 18.1532 23.7779 18.738L24.5595 25.1841C24.7483 26.7407 23.1537 27.8993 21.7316 27.2387L15.8425 24.5033C15.3083 24.2552 14.6917 24.2552 14.1575 24.5033L8.26844 27.2387C6.84628 27.8993 5.2517 26.7408 5.44047 25.1841L6.22214 18.738C6.29306 18.1532 6.10255 17.5668 5.70144 17.1354L1.28014 12.3799C0.212419 11.2314 0.821491 9.35691 2.36033 9.05539L8.73246 7.80686C9.31056 7.69359 9.80932 7.33122 10.0957 6.81642L13.2522 1.14197Z" fill="#FEA424"/>
</svg>
<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2522 1.14197C14.0145 -0.228374 15.9855 -0.228376 16.7478 1.14197L19.9043 6.81642C20.1907 7.33122 20.6894 7.69359 21.2675 7.80686L27.6397 9.05539C29.1785 9.35691 29.7876 11.2314 28.7199 12.3799L24.2986 17.1354C23.8975 17.5668 23.7069 18.1532 23.7779 18.738L24.5595 25.1841C24.7483 26.7407 23.1537 27.8993 21.7316 27.2387L15.8425 24.5033C15.3083 24.2552 14.6917 24.2552 14.1575 24.5033L8.26844 27.2387C6.84628 27.8993 5.2517 26.7408 5.44047 25.1841L6.22214 18.738C6.29306 18.1532 6.10255 17.5668 5.70144 17.1354L1.28014 12.3799C0.212419 11.2314 0.821491 9.35691 2.36033 9.05539L8.73246 7.80686C9.31056 7.69359 9.80932 7.33122 10.0957 6.81642L13.2522 1.14197Z" fill="#FEA424"/>
</svg>
<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2522 1.14197C14.0145 -0.228374 15.9855 -0.228376 16.7478 1.14197L19.9043 6.81642C20.1907 7.33122 20.6894 7.69359 21.2675 7.80686L27.6397 9.05539C29.1785 9.35691 29.7876 11.2314 28.7199 12.3799L24.2986 17.1354C23.8975 17.5668 23.7069 18.1532 23.7779 18.738L24.5595 25.1841C24.7483 26.7407 23.1537 27.8993 21.7316 27.2387L15.8425 24.5033C15.3083 24.2552 14.6917 24.2552 14.1575 24.5033L8.26844 27.2387C6.84628 27.8993 5.2517 26.7408 5.44047 25.1841L6.22214 18.738C6.29306 18.1532 6.10255 17.5668 5.70144 17.1354L1.28014 12.3799C0.212419 11.2314 0.821491 9.35691 2.36033 9.05539L8.73246 7.80686C9.31056 7.69359 9.80932 7.33122 10.0957 6.81642L13.2522 1.14197Z" fill="#FEA424"/>
</svg>
<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2522 1.14197C14.0145 -0.228374 15.9855 -0.228376 16.7478 1.14197L19.9043 6.81642C20.1907 7.33122 20.6894 7.69359 21.2675 7.80686L27.6397 9.05539C29.1785 9.35691 29.7876 11.2314 28.7199 12.3799L24.2986 17.1354C23.8975 17.5668 23.7069 18.1532 23.7779 18.738L24.5595 25.1841C24.7483 26.7407 23.1537 27.8993 21.7316 27.2387L15.8425 24.5033C15.3083 24.2552 14.6917 24.2552 14.1575 24.5033L8.26844 27.2387C6.84628 27.8993 5.2517 26.7408 5.44047 25.1841L6.22214 18.738C6.29306 18.1532 6.10255 17.5668 5.70144 17.1354L1.28014 12.3799C0.212419 11.2314 0.821491 9.35691 2.36033 9.05539L8.73246 7.80686C9.31056 7.69359 9.80932 7.33122 10.0957 6.81642L13.2522 1.14197Z" fill="#CAD3E7"/>
</svg>
</div>
<div class=" flex items-center gap-2">
    <div class=" text-2xl font-normal">4.0</div> <div class=" text-base text-[#6B6C6F] font-normal">(89 people)</div>
</div>

                            </div>
                        </div>
                        <div class="social-i">
                            <h4 class="font-semibold text-xs text-black mb-1.5">Share this article</h4>
                            <div class="s-icons flex items-center gap-4">
                                <a href="" class="group bg-transparent hover:bg-cblue transition rounded-full">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class=" group-hover:fill-[#ffffff] transition" d="M21.0075 17.9995L21.452 15.104H18.6735V13.225C18.6735 12.433 19.0615 11.6605 20.306 11.6605H21.569V9.1955C21.569 9.1955 20.423 9 19.327 9C17.039 9 15.5435 10.387 15.5435 12.8975V15.1045H13V18H15.5435V25H18.6735V18L21.0075 17.9995Z" fill="#0051FF"/>
                                    <circle cx="17" cy="17" r="16.5" stroke="#0051FF"/>
                                    </svg>
                                </a>
                                <a href="" class="group bg-transparent hover:bg-cblue transition rounded-full">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class=" group-hover:fill-[#ffffff] transition" d="M16.998 14.3322C15.529 14.3322 14.3302 15.531 14.3302 17C14.3302 18.469 15.529 19.6678 16.998 19.6678C18.467 19.6678 19.6658 18.469 19.6658 17C19.6658 15.531 18.467 14.3322 16.998 14.3322ZM24.9994 17C24.9994 15.8953 25.0094 14.8005 24.9474 13.6978C24.8853 12.4169 24.5931 11.2801 23.6565 10.3435C22.7179 9.40487 21.5831 9.11467 20.3022 9.05263C19.1975 8.99059 18.1027 9.0006 17 9.0006C15.8953 9.0006 14.8005 8.99059 13.6978 9.05263C12.4169 9.11467 11.2801 9.40687 10.3435 10.3435C9.40487 11.2821 9.11467 12.4169 9.05263 13.6978C8.99059 14.8025 9.0006 15.8973 9.0006 17C9.0006 18.1027 8.99059 19.1995 9.05263 20.3022C9.11467 21.5831 9.40687 22.7199 10.3435 23.6565C11.2821 24.5951 12.4169 24.8853 13.6978 24.9474C14.8025 25.0094 15.8973 24.9994 17 24.9994C18.1047 24.9994 19.1995 25.0094 20.3022 24.9474C21.5831 24.8853 22.7199 24.5931 23.6565 23.6565C24.5951 22.7179 24.8853 21.5831 24.9474 20.3022C25.0114 19.1995 24.9994 18.1047 24.9994 17ZM16.998 21.1048C14.7265 21.1048 12.8932 19.2715 12.8932 17C12.8932 14.7285 14.7265 12.8952 16.998 12.8952C19.2695 12.8952 21.1028 14.7285 21.1028 17C21.1028 19.2715 19.2695 21.1048 16.998 21.1048ZM21.2709 13.6858C20.7405 13.6858 20.3122 13.2575 20.3122 12.7271C20.3122 12.1968 20.7405 11.7685 21.2709 11.7685C21.8012 11.7685 22.2295 12.1968 22.2295 12.7271C22.2297 12.853 22.205 12.9778 22.1569 13.0942C22.1088 13.2105 22.0382 13.3163 21.9491 13.4053C21.8601 13.4944 21.7543 13.565 21.6379 13.6131C21.5216 13.6612 21.3968 13.6859 21.2709 13.6858Z" fill="#0051FF"/>
                                        <circle cx="17" cy="17" r="16.5" stroke="#0051FF"/>
                                        </svg>

                                </a>
                                <a href="" class="group bg-transparent hover:bg-cblue transition rounded-full">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class=" group-hover:fill-[#ffffff] transition" d="M26.6817 10.8979C25.958 11.2186 25.1804 11.4353 24.363 11.5333C25.2064 11.0286 25.8374 10.2343 26.1383 9.29863C25.3459 9.7693 24.4786 10.1006 23.5742 10.2781C22.9661 9.62877 22.1605 9.19836 21.2827 9.05374C20.4048 8.90911 19.5038 9.05834 18.7195 9.47828C17.9351 9.89821 17.3114 10.5654 16.945 11.3761C16.5787 12.1869 16.4903 13.0959 16.6935 13.9621C15.0879 13.8814 13.5172 13.4641 12.0833 12.7372C10.6495 12.0102 9.38445 10.9899 8.37042 9.74244C8.0237 10.3405 7.82433 11.034 7.82433 11.7725C7.82395 12.4373 7.98767 13.092 8.30097 13.6784C8.61428 14.2648 9.06748 14.7648 9.62036 15.134C8.97916 15.1136 8.35211 14.9403 7.7914 14.6286V14.6806C7.79133 15.6131 8.11388 16.5169 8.7043 17.2386C9.29473 17.9603 10.1167 18.4555 11.0307 18.6402C10.4358 18.8012 9.81222 18.8249 9.20689 18.7096C9.46477 19.5119 9.96708 20.2135 10.6435 20.7162C11.3199 21.2188 12.1366 21.4974 12.9792 21.5128C11.5489 22.6357 9.78236 23.2448 7.96389 23.2421C7.64177 23.2422 7.31992 23.2234 7 23.1858C8.84585 24.3726 10.9945 25.0024 13.189 25C20.6176 25 24.6786 18.8474 24.6786 13.5113C24.6786 13.338 24.6742 13.1629 24.6664 12.9895C25.4563 12.4183 26.1382 11.7109 26.68 10.9005L26.6817 10.8979Z" fill="#0051FF"/>
<circle cx="17" cy="17" r="16.5" stroke="#0051FF"/>
</svg>


                                </a>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
            <div class="right-content md:flex hidden w-full md:w-[254px]">
                <div class="compare-prices-cta">
                    <div class=" px-4 py-9 bg-[#245FDE] rounded-lg">
                        <img src="@/assets/img/compare-price-cta-img.svg" class="mb-6" alt="">
                        <h5 class=" font-bold text-white text-2xl mb-1.5">Cryptocurrency Prices</h5>
                        <p class=" font-normal text-white text-xs mb-6">We have 128 exchanges in the comparison tool that sell Binance USD. View and compare for more information.</p>
                        <a class="bg-[#FFA800] group text-white text-base font-semibold flex whitespace-nowrap items-center py-3 px-2.5 rounded-full" href="">Compare Exchanges<img src="@/assets/img/arrow-right-white-bg.svg" class="h-5 w-5 ml-3 translate-x-0 transition group-hover:translate-x-1" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w-full bg-[#E4EAF6] p-10 md:p-12 md:pb-24">
    <div class="container mx-auto max-w-screen-xl">  <!-- container start -->
        <div class="flex items-center justify-between mb-6">
            <div class=" text-[32px] text-primary font-semibold">Related Articles</div>
            <div class="">
                <a href="" class="group text-cblue font-medium font-sm flex items-center gap-1.5">View More Articles <svg class=" translate-x-0 transition group-hover:translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.60493 3.70503C8.8783 3.43166 9.32151 3.43166 9.59488 3.70503L12.3949 6.50503C12.6682 6.77839 12.6682 7.22161 12.3949 7.49497L9.59488 10.295C9.32151 10.5683 8.8783 10.5683 8.60493 10.295C8.33156 10.0216 8.33156 9.57839 8.60493 9.30503L10.21 7.7H2.0999C1.7133 7.7 1.3999 7.3866 1.3999 7C1.3999 6.6134 1.7133 6.3 2.0999 6.3H10.21L8.60493 4.69497C8.33156 4.42161 8.33156 3.97839 8.60493 3.70503Z" fill="#0051FF"/>
</svg>
</a>
            </div>
        </div>

        <div class="more-info-topics">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-y-[30px} gap-x-10">
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Blockchain</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>ERC2​​0 tokens
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Bitcoin</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Online wallets
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Cryptocurrency Value
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Privacy disclaimer
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Sell Bitcoin
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Current rate
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Types of Bitcoins
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Limit order
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Buy crypto
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Stop Limit
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Exchange traded fund
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Crypto transaction fees
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
                <a href="" class="group">
                    <div class="g-info font-semibold text-base text-black flex items-center justify-between bg-white rounded-lg px-5 py-2.5">
                        <span>Software wallets
</span> 
                        <svg class="group-hover:translate-x-1 translate-x-0 transition" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="black"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
</template>