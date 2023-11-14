<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        <li>
          arc是画圆的api,mdn文档地址:
          https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc
        </li>
        <li>
          moveTo相当于提笔落点,就是相当于在写字的时候,写完一个字,需要提笔到另一个点写另一个字一样,中间不留下笔迹
        </li>
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
    cc.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
    cc.moveTo(110, 75)
    cc.arc(75, 75, 35, 0, Math.PI, false) // 口 (顺时针)
    cc.moveTo(65, 65)
    cc.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
    cc.moveTo(95, 65)
    cc.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
    cc.stroke()
  }
})
</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
