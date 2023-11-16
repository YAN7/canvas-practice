<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <p>画图形的步骤:</p>
      <ol>
        <li>stroke 用来描边图形</li>
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
    // cc.arc(25, 25, 20, 0, Math.PI * 2)
    // cc.strokeStyle = 'cyan'
    // cc.stroke()
    // cc.moveTo(0, 0)
    // cc.beginPath()
    // cc.rect(0, 0, 50, 50)
    // cc.strokeStyle = 'orange'
    // cc.stroke()
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        // cc.beginPath
        // cc.rect(50 * j, 50 * i, 50, 50)
        // cc.fillStyle =
        //   'rgb(' + Math.floor(255 - 22.5 * i) + ',' + Math.floor(255 - 22.5 * j) + ', 120' + ')'
        // cc.fill()
        cc.beginPath()
        cc.arc(50 * j + 25, 50 * i + 25, 20, 0, Math.PI * 2)
        cc.strokeStyle =
          'rgb(120,' + Math.floor(255 - 22.5 * i) + ',' + Math.floor(255 - 22.5 * j) + ')'
        cc.stroke()
      }
    }
  }
})
</script>
