<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <ol>
        <li>fillStyle的写法和css中的color写法一样,支持多种颜色定义方式</li>
      </ol>
    </div>
    <div style="flex: 0 0 550px" class="flex justify-center mt-[20px]">
      <div><canvas ref="canvasRef" width="500" height="500"></canvas></div>
      <div>123</div>
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

    const colors = ['#acef11', '#9137ea', '#f50808', '#f80780', '#00b7ff']
    cc.lineWidth = 1
    cc.beginPath()
    cc.strokeStyle = 'orange'
    cc.strokeRect(5, 5, 50, 100)
    for (let i = 1; i <= 5; i++) {
      cc.beginPath()
      cc.strokeStyle = colors[i - 1]
      cc.moveTo(10 * i, 10)
      cc.lineTo(10 * i, 100)
      cc.stroke()
    }
  }
})
</script>
