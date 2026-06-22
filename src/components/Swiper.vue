<template>
   <swiper
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :navigation="{prevEl: '.prev', nextEl: '.next'}"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div class="w-full h-full bg-cover bg-no-repeat bg-center-top"
        :style="{ backgroundImage: `url(${item.image})` }">
          <Container class="h-full">
            <div class=" flex flex-col items-start justify-center lt-sm:px-4">
              <p class="text-xl sm:text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item.subtitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    
    <div class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-32 h-16 z-30">
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 1.5rem;"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 1.5rem;"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
  import { Navigation, Pagination } from 'swiper/modules';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
   import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // ts类型声明
  import type { Swiper as SwiperType } from 'swiper';
  import type { SwiperItemType } from './types';

  const props =defineProps({
    // 这里可以定义组件的props
    height: {
      type: String,
      default: 'h-80'
    },
    items: {
      type: Array as PropType<Array<SwiperItemType>>,
      default: () => []
    }
  });
  const modules = [Navigation, Pagination];

  function getClassAndStyle (str: string) {
    // props.height
    // 如何height的值包含rem,px,em,则返回{style: str, class: ''}
    // 否则值是h-,返回{style: '', class: str}
    return {
      style: /rem|px|em/.test(props.height) ? {height: str} : '',
      class: /h-/.test(props.height) ? str : ''
    }
  }

  const onSwiper = (swiper: SwiperType) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>