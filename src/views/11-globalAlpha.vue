<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <ol>
        <li>globalAlpha为全局颜色增加透明度,但是只对它后面的颜色生效</li>
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
    cc.fillStyle = 'cyan'
    cc.fillRect(0, 0, 250, 250)
    cc.fillStyle = 'orange'
    cc.fillRect(250, 0, 250, 250)
    cc.fillStyle = 'pink'
    cc.fillRect(0, 250, 250, 250)
    cc.fillStyle = 'lightgreen'
    cc.fillRect(250, 250, 250, 250)
    cc.globalAlpha = 0.2
    cc.fillStyle = '#fff'
    for (let i = 50; i < 250; i += 50) {
      cc.beginPath()
      cc.arc(250, 250, i, 0, Math.PI * 2)
      cc.fill()
    }
  }
})
</script>
