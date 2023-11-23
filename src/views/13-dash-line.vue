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

let offset = 0

function draw(cc: CanvasRenderingContext2D) {
  cc.clearRect(0, 0, 1500, 1500)
  cc.setLineDash([2, 2, 30])
  cc.lineDashOffset = -offset
  cc.strokeRect(10, 10, 250, 250)
}

function march(cc: CanvasRenderingContext2D) {
  offset++
  if (offset > 16) {
    offset = 0
  }
  draw(cc)
  setTimeout(() => march(cc), 20)
}

onMounted(() => {
  if (ctx.value) {
    const cc = unref(ctx)!
    march(cc)
  }
})
</script>
