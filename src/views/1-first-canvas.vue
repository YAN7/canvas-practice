<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画布默认是300px*150px</p>
      <p>坐标原点在左上角</p>
    </div>
    <div style="flex: 0 0 550px" class="flex justify-center mt-[20px]">
      <div><canvas ref="canvasRef" width="500" height="500"></canvas></div>
    </div>
  </div>
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
