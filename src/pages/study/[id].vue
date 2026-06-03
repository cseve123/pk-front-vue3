<template>
  <div>
    id: {{ route.id }}
    id: {{ route2.id }}
  </div>
</template>

<script setup lang="ts">
import { useParams } from '@/hooks'

type Params = {
  id: string
}
// 方法1 as 断言
const route = useRoute().params as Params

// 封装到hooks中
// function useParams<P extends RouteParams>() {
//   const route = useRoute()
//   return computed(() => route.params as P)
// }
// 方法2 泛型
const route2 = useParams<Params>()
</script>

<style scoped>

</style>