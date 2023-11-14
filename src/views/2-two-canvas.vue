<template>
  <canvas ref="canvasRef" width="500" height="300"></canvas>
</template>
<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { useCanvas } from '@/hooks/useCanvas'
const canvasRef = ref<HTMLCanvasElement>()

const { ctx } = useCanvas(canvasRef as Ref<HTMLCanvasElement>)
onMounted(() => {
  if (ctx.value) {
    ctx.value.fillStyle = 'cyan'
    ctx.value.fillRect(10, 10, 150, 150)
    ctx.value.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.value.fillRect(50, 50, 150, 150)
    ctx.value.fillStyle = 'rgba(50, 175, 140, 0.5)'
    ctx.value.fillRect(100, 100, 150, 150)
  }
})
</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
