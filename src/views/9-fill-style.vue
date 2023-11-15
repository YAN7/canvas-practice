<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <ol>
        <li>fillStyle的写法和css中的color写法一样,支持多种颜色定义方式</li>
      </ol>
    </div>
    <div style="flex: 0 0 550px" class="flex justify-center mt-[20px]">
      <div><canvas ref="canvasRef" width="500" height="500"></canvas></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, unref, onMounted, type Ref } from 'vue'
import { useCanvas } from '@/hooks/useCanvas'

const canvasRef = ref<HTMLCanvasElement>()

const { ctx } = useCanvas(canvasRef as Ref<HTMLCanvasElement>)

onMounted(() => {
  if (ctx.value) {
    const cc = unref(ctx)!

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        cc.fillStyle =
          'rgb(' +
          Math.floor(255 - 22.5 * i) +
          ',' +
          Math.floor(255 - 22.5 * j) +
          ',' +
          Math.floor(255 - 22.5 * j) +
          ')'
        cc.fillRect(50 * j, 50 * i, 50, 50)
      }
    }
  }
})
</script>
