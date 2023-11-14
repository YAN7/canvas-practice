<template>
  <canvas ref="canvasRef"></canvas>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const ctx = canvasRef.value?.getContext('2d')!
  ctx.fillStyle = 'cyan'
  /**
   * 画布默认是300px*150px
   * 前两个参数是表示距离画布左上角的距离(x,y)
   */
  ctx.fillRect(10, 20, 200, 100)
})
</script>
<style scoped lang="less"></style>
