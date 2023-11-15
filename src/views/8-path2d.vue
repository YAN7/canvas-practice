<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        path2d对象可以用来生成一组固定的图形,方便多次重复使用.
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
    // cc.beginPath()
    // cc.moveTo(20, 20)
    // cc.rect(20, 20, 50, 50)
    // cc.stroke()
    // cc.beginPath()
    // cc.moveTo(90, 20)
    // cc.arc(115, 45, 25, 0, Math.PI * 2)
    // cc.fill()
    // path2d的画法
    const rect = new Path2D()
    const circle = new Path2D()
    rect.rect(20, 20, 50, 50)
    cc.stroke(rect)
    circle.moveTo(90, 20)
    circle.arc(115, 45, 25, 0, Math.PI * 2)
    cc.fillStyle = 'green'
    cc.fill(circle)
  }
})
</script>
