<template>
    <div class=" mt-28">
        <h5 class=" text-2xl font-normal text-black mb-6">Customer Reviews</h5>
    </div>
    <div class="flex flex-col md:flex-row items-start mb-4 bg-white rounded-2xl pb-8 px-6 pt-6">
      <div class="flex items-center gap-3 mb-3 md:mb-0">
        <div class="mr-4 w-[50px] h-[50px] rounded-full">
          <img src="@/assets/img/avatar.png" alt="Customer Avatar" class="" />
        </div>        
        <div class="text-sm font-medium text-black flex md:hidden">Jacob Martin</div>
      </div>

      <div>
        <textarea name="" id="" cols="100" rows="10" class="w-full h-32 border rounded-2xl border-[#CBD7F1] focus:outline-none active:outline-none text-[#6B6C6F] text-base font-medium p-4 mb-6" placeholder="Write a Review..." ></textarea>  
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between">  
            <div class="star-rating flex items-center gap-1 mb-8 md:mb-0">
                <div class="stars">
                    <svg
      class="star"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 28"
      fill="none"
      v-for="(star, index) in stars"
      :key="index"
      :class="{ 'text-yellow-500': index < hoveredIndex }"
      @mouseover="hoveredIndex = index + 1"
      @mouseout="hoveredIndex = 0"
    >
      <path
        :d="starPath"
        :fill="index < hoveredIndex ? activeColor : inactiveColor"
      />
    </svg>
  </div>
                <span class=" font-semibold text-[32px] ml-2">0.0</span>
            </div>  
            <button type="submit" class="bg-[#0051FF] text-white w-full md:w-auto font-semibold text-base py-3 px-6 rounded-lg">Enter Review</button> 
        </div> 
      </div>
    </div>

    <div class="bg-white rounded-2xl p-6">
        <div class=" border border-[#CBD7F1] rounded-2xl  mb-4">
            <div class="user-info flex items-center  p-4">
                <div class=" w-9 h-9 rounded-full overflow-hidden mr-2">
                    <img src="@/assets/img/a1.png" alt="">
                </div>
                <div class="">
                    <div class="text-sm font-medium text-black">Jacob Jones</div>
                    <div class="flex items-center">
                        <span>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.0643 5.15873L15.6085 5.52786L11.3401 9.08527L12.7023 14.4721L8 11.512L3.29772 14.4721L4.65989 9.08527L0.391548 5.52786L5.9357 5.15873L8 0Z" fill="#FDA425"/>
                            </svg>
                        </span>
                        <span class="text-black text-sm font-normal ml-1 mr-2">5.0</span>
                        <span class=" text-[#6B6C6F] font-normal text-xs">2 days ago</span>
                    </div>
                </div>
            </div>
            <p class="text-base font-normal text-black leading-7 p-4 border-t border-[#CBD7F1]">Het is een exchange gericht op het Nederlander (Euro) de transacties zijn super snel gedaan voor gebruikers binnen SEPA. Het doel van de exchange is duidelijk, de exchange biedt goede prijzen en een zeer snel eersteklas handelsplatform waar je makkelijke alle transacties in realtime kunt volgen.</p>
        </div>
        <div class=" border border-[#CBD7F1] rounded-2xl  mb-4">
            <div class="user-info flex items-center  p-4">
                <div class=" w-9 h-9 rounded-full overflow-hidden mr-2">
                    <img src="@/assets/img/a2.png" alt="">
                </div>
                <div class="">
                    <div class="text-sm font-medium text-black">Jacob Jones</div>
                    <div class="flex items-center">
                        <span>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.0643 5.15873L15.6085 5.52786L11.3401 9.08527L12.7023 14.4721L8 11.512L3.29772 14.4721L4.65989 9.08527L0.391548 5.52786L5.9357 5.15873L8 0Z" fill="#FDA425"/>
                            </svg>
                        </span>
                        <span class="text-black text-sm font-normal ml-1 mr-2">5.0</span>
                        <span class=" text-[#6B6C6F] font-normal text-xs">2 days ago</span>
                    </div>
                </div>
            </div>
            <p class="text-base font-normal text-black leading-7 p-4 border-t border-[#CBD7F1]">Het is een exchange gericht op het Nederlander (Euro) de transacties zijn super snel gedaan voor gebruikers binnen SEPA. Het doel van de exchange is duidelijk, de exchange biedt goede prijzen en een zeer snel eersteklas handelsplatform waar je makkelijke alle transacties in realtime kunt volgen.</p>
        </div>
        <div class=" border border-[#CBD7F1] rounded-2xl  mb-4">
            <div class="user-info flex items-center  p-4">
                <div class=" w-9 h-9 rounded-full overflow-hidden mr-2">
                    <img src="@/assets/img/a3.png" alt="">
                </div>
                <div class="">
                    <div class="text-sm font-medium text-black">Jacob Jones</div>
                    <div class="flex items-center">
                        <span>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.0643 5.15873L15.6085 5.52786L11.3401 9.08527L12.7023 14.4721L8 11.512L3.29772 14.4721L4.65989 9.08527L0.391548 5.52786L5.9357 5.15873L8 0Z" fill="#FDA425"/>
                            </svg>
                        </span>
                        <span class="text-black text-sm font-normal ml-1 mr-2">5.0</span>
                        <span class=" text-[#6B6C6F] font-normal text-xs">2 days ago</span>
                    </div>
                </div>
            </div>
            <p class="text-base font-normal text-black leading-7 p-4 border-t border-[#CBD7F1]">Het is een exchange gericht op het Nederlander (Euro) de transacties zijn super snel gedaan voor gebruikers binnen SEPA. Het doel van de exchange is duidelijk, de exchange biedt goede prijzen en een zeer snel eersteklas handelsplatform waar je makkelijke alle transacties in realtime kunt volgen.</p>
        </div>
        <div class=" border border-[#CBD7F1] rounded-2xl  mb-4">
            <div class="user-info flex items-center  p-4">
                <div class=" w-9 h-9 rounded-full overflow-hidden mr-2">
                    <img src="@/assets/img/a4.png" alt="">
                </div>
                <div class="">
                    <div class="text-sm font-medium text-black">Jacob Jones</div>
                    <div class="flex items-center">
                        <span>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.0643 5.15873L15.6085 5.52786L11.3401 9.08527L12.7023 14.4721L8 11.512L3.29772 14.4721L4.65989 9.08527L0.391548 5.52786L5.9357 5.15873L8 0Z" fill="#FDA425"/>
                            </svg>
                        </span>
                        <span class="text-black text-sm font-normal ml-1 mr-2">5.0</span>
                        <span class=" text-[#6B6C6F] font-normal text-xs">2 days ago</span>
                    </div>
                </div>
            </div>
            <p class="text-base font-normal text-black leading-7 p-4 border-t border-[#CBD7F1]">Het is een exchange gericht op het Nederlander (Euro) de transacties zijn super snel gedaan voor gebruikers binnen SEPA. Het doel van de exchange is duidelijk, de exchange biedt goede prijzen en een zeer snel eersteklas handelsplatform waar je makkelijke alle transacties in realtime kunt volgen.</p>
        </div>

        <div class="pagination">
            <div class="flex items-center justify-end mt-8">
  <nav class="flex gap-2">
    <a href="#" class="items-center flex justify-center rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L15.4142 16L18.7071 19.2929C19.0976 19.6834 19.0976 20.3166 18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L13.2929 16.7071C12.9024 16.3166 12.9024 15.6834 13.2929 15.2929L17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929Z" fill="#B4BAC6"/>
</svg>

    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center bg-[#0051FF] text-white rounded">
      1
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      2
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      3
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      4
    </a>
    <a href="#" class="h-8 w-8 items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
      &hellip;
    </a>
    <a href="#" class="items-center flex justify-center  rounded bg-white text-black hover:bg-[#0051FF] hover:text-white">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 20.7071C12.9024 20.3166 12.9024 19.6834 13.2929 19.2929L16.5858 16L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929L18.7071 15.2929C19.0976 15.6834 19.0976 16.3166 18.7071 16.7071L14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071Z" fill="black"/>
</svg>

    </a>
  </nav>
</div>

        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
      stars: [1, 2, 3, 4, 5],
      hoveredIndex: 0,
      activeColor: '#FFD600',
      inactiveColor: '#DDE0E7',
      starPath:
        'M14.1302 0.533005C14.5134 -0.14237 15.4866 -0.142373 15.8698 0.533002L19.8731 7.58909C20.0155 7.84016 20.2595 8.01742 20.5423 8.07531L28.4902 9.70226C29.2509 9.85798 29.5516 10.7835 29.0277 11.3566L23.5541 17.3445C23.3593 17.5576 23.2661 17.8444 23.2984 18.1312L24.2071 26.1928C24.2941 26.9644 23.5068 27.5364 22.7998 27.2153L15.4136 23.8599C15.1508 23.7405 14.8492 23.7405 14.5864 23.8599L7.20017 27.2153C6.49319 27.5364 5.70588 26.9644 5.79286 26.1928L6.70155 18.1312C6.73389 17.8444 6.64069 17.5576 6.44594 17.3445L0.972297 11.3566C0.448387 10.7835 0.74911 9.85798 1.50984 9.70226L9.45768 8.07531C9.74047 8.01742 9.98445 7.84016 10.1269 7.58909L14.1302 0.533005Z',
    };
  },
  };
  </script>
  <style scoped>
  .stars {
    display: flex;
  }
  
  .star {
    width: 32px;
    height: 32px;
    margin-right: 4px;
    cursor: pointer;
  }
  </style>