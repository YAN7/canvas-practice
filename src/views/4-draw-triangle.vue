<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        <li>beginPath起手</li>
        <li>moveTo指定第一个点</li>
        <li>后续的点都通过lineTo指定</li>
        <li>使用closePath闭合图形</li>
        <li>此时页面上还看不出来任何东西,需要用fill去填充</li>
        <li>要新画一个图形的话,重新以beginPath起手</li>
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
    cc.moveTo(200, 100)
    cc.lineTo(200, 200)
    cc.lineTo(250, 150)
    cc.closePath()
    cc.fillStyle = 'cyan'
    cc.fill()
    cc.beginPath()
    cc.moveTo(190, 100)
    cc.lineTo(190, 200)
    cc.lineTo(140, 150)
    cc.closePath()
    cc.fillStyle = 'orange'
    cc.fill()
  }
})
</script>
<style scoped lang="less">
canvas {
  border: 1px solid black;
}
</style>
