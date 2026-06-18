<template>
  <div>
    <Swiper :items="items" height="h-90" />
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
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

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
