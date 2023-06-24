<template>
        <div class="call-to-action relative top-sec max-w-[1068px] mx-auto">
        <div class="w-full flex text-center mt-6">
            <h2 class="text-[32px] text-primary md:text-5xl font-bold mx-auto leading-9 md:leading-[57px] mb-5 "><span class="flex"><span class="strick-line-inline">{{ slag }}</span></span></h2>            
        </div>
    </div>
</template>
<script>
export default {
  props: {
    slag: {
      type: String,
      required: true
    }
  }
}
</script>