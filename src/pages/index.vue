<template>
  <div>
    <!-- <div class="test">Hello World</div> -->
    <Swiper :items="items" :height="36 + themeStore.rate + 'rem'" />
    <Card :image="bg" title="标题" subTitle="副标题" imageType="rounded" border />
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore'
const themeStore = useThemeStore()
const items:SwiperItemType[] = [
  {
    image: bg,
    title: '标题1',
    subtitle: '副标题1'
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  }
]

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped>
.test {
  width: 240px;
  height: 100px;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
