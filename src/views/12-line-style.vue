<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <h3>lineWidth, 设置线宽</h3>
      <ol>
        <li>只能是正数</li>
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

const drawLineWidth = (cc: CanvasRenderingContext2D) => {
  const colors = ['#acef11', '#9137ea', '#f50808', '#f80780', '#00b7ff']
  cc.lineWidth = 1
  cc.beginPath()
  cc.strokeStyle = 'orange'
  cc.strokeRect(5, 5, 250, 250)
  for (let i = 1; i <= 5; i++) {
    cc.beginPath()
    cc.lineWidth = i
    cc.strokeStyle = colors[i - 1]
    cc.moveTo(50 * i - 20, 10)
    cc.lineTo(50 * i - 20, 245)
    cc.stroke()
  }
}

const drawLineCap = (cc: CanvasRenderingContext2D) => {
  const lineCapStyle = ['butt', 'round', 'square']
}

onMounted(() => {
  if (ctx.value) {
    const cc = unref(ctx)!
    drawLineWidth(cc)
  }
})
</script>
