<template>
  <canvas ref="canvasRef" width="500" height="300"></canvas>
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
  ctx.fillRect(10, 10, 200, 200)
})
</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
