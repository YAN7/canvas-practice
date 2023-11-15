<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        <li>绘制二次贝塞尔曲线</li>
        <li>高端操作,单靠代码没有工具辅助几乎不可能画出想要的图形</li>
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
    let cc = unref(ctx)!
    cc.beginPath()
    cc.moveTo(75, 25)
    cc.quadraticCurveTo(25, 25, 25, 62.5)
    cc.quadraticCurveTo(25, 100, 50, 100)
    cc.quadraticCurveTo(50, 120, 30, 125)
    cc.quadraticCurveTo(60, 120, 65, 100)
    cc.quadraticCurveTo(125, 100, 125, 62.5)
    cc.quadraticCurveTo(125, 25, 75, 25)
    cc.stroke()
  }
})
</script>
