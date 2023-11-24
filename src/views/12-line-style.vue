<template>
  <div class="flex flex-1">
    <div class="flex-1 p-[20px]" style="border-right: 1px solid #999">
      <h3>lineWidth, 设置线宽</h3>
      <ol>
        <li>只能是正数</li>
      </ol>
      <h3>lineCap, 设置线的端点样式</h3>
      <ol>
        <li>butt: 与辅助线齐平</li>
        <li>round: 端点处加上了半径为一半线宽的半圆</li>
        <li>square: 端点处加上了等宽且高度为一半线宽的方块</li>
      </ol>
      <h3>lineJoin,设置图形中两线段连接处所显示的样子,默认是miter</h3>
      <ol>
        <li>round: 边角处被磨圆了，圆的半径等于线宽</li>
        <li>bevel: 与辅助线齐平</li>
        <li>miter: 在连接处外侧延伸直至交于一点</li>
      </ol>
      <h3>setLineDash, 接受一个数组，来指定线段与间隙的交替</h3>
      <h3>lineDashOffset，设置起始偏移量</h3>
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
  cc.strokeRect(5, 5, 240, 240)
  for (let i = 1; i <= 5; i++) {
    cc.beginPath()
    cc.lineWidth = i
    cc.strokeStyle = colors[i - 1]
    cc.moveTo(50 * i - 20, 10)
    cc.lineTo(50 * i - 20, 240)
    cc.stroke()
  }
}

const drawLineCap = (cc: CanvasRenderingContext2D) => {
  const lineCapStyle: ('butt' | 'round' | 'square')[] = ['butt', 'round', 'square']
  cc.beginPath()
  cc.lineWidth = 1
  cc.strokeRect(255, 5, 240, 240)
  cc.moveTo(280, 40)
  cc.lineTo(480, 40)
  cc.stroke()
  cc.moveTo(280, 200)
  cc.lineTo(480, 200)
  cc.stroke()
  for (let i = 0; i < 3; i++) {
    cc.lineWidth = 15
    cc.lineCap = lineCapStyle[i]
    cc.beginPath()
    cc.moveTo(300 + i * 80, 40)
    cc.lineTo(300 + i * 80, 200)
    cc.stroke()
  }
}

const drawLineJoin = (cc: CanvasRenderingContext2D) => {
  cc.beginPath()
  cc.lineWidth = 1
  cc.strokeStyle = 'pink'
  cc.strokeRect(5, 255, 240, 240)
  const lineJoin: ('round' | 'bevel' | 'miter')[] = ['round', 'bevel', 'miter']
  cc.lineWidth = 10
  for (let i = 0; i < lineJoin.length; i++) {
    cc.lineJoin = lineJoin[i]
    cc.beginPath()
    cc.moveTo(45, 295 + i * 40)
    cc.lineTo(80, 335 + i * 40)
    cc.lineTo(120, 295 + i * 40)
    cc.lineTo(160, 335 + i * 40)
    cc.lineTo(200, 295 + i * 40)
    cc.stroke()
  }
}

const drawDashLineContainer = (cc: CanvasRenderingContext2D) => {
  cc.beginPath()
  cc.strokeStyle = 'lightgreen'
  cc.lineWidth = 1
  cc.strokeRect(255, 255, 235, 235)
}

const drawDashLine = (cc: CanvasRenderingContext2D) => {
  cc.clearRect(260, 260, 220, 220)
  cc.setLineDash([5, 5])
  cc.strokeStyle = 'blue'
  cc.strokeRect(300, 300, 150, 150)
}

let offset = 0
const march = (cc: CanvasRenderingContext2D) => {
  offset++
  if (offset > 16) {
    offset = 0
  }
  cc.lineDashOffset = -offset
  drawDashLine(cc)
  setTimeout(() => march(cc), 20)
}

onMounted(() => {
  if (ctx.value) {
    const cc = unref(ctx)!
    drawLineWidth(cc)
    drawLineCap(cc)
    drawLineJoin(cc)
    drawDashLineContainer(cc)
    march(cc)
  }
})
</script>
