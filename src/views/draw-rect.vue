<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>fillRect(x, y, width, height) 绘制一个填充的矩形</p>
      <p>strokeRect(x, y, width, height) 绘制一个矩形的边框</p>
      <p>clearRect(x, y, width, height) 清除指定矩形区域,让清除部分完全透明</p>
    </div>
    <div style="flex: 0 0 550px" class="flex justify-center mt-[20px]">
      <div><canvas ref="canvasRef" width="500" height="500"></canvas></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { useCanvas } from '@/hooks/useCanvas'

const canvasRef = ref<HTMLCanvasElement>()

const { ctx } = useCanvas(canvasRef as Ref<HTMLCanvasElement>)

onMounted(() => {
  if (ctx.value) {
    ctx.value.fillStyle = 'cyan'
    ctx.value.fillRect(20, 20, 150, 150)

    ctx.value.fillStyle = 'red'
    ctx.value.strokeRect(40, 40, 150, 150)

    ctx.value.clearRect(30, 30, 30, 30)
  }
})
</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
