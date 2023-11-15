<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        <li>绘制三次贝塞尔曲线</li>
        <li>同样高端操作,单靠代码没有工具辅助几乎不可能画出想要的图形</li>
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
    cc.beginPath()
    cc.moveTo(75, 40)
    cc.bezierCurveTo(75, 37, 70, 25, 50, 25)
    cc.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    cc.bezierCurveTo(20, 80, 40, 102, 75, 120)
    cc.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    cc.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    cc.bezierCurveTo(85, 25, 75, 37, 75, 40)
    cc.fillStyle = '#f30'
    cc.fill()
  }
})
</script>
