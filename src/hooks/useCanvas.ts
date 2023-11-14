import { onMounted, ref, unref, type Ref } from 'vue'

export const useCanvas = (canvasRef: Ref<HTMLCanvasElement>) => {
  const ctx = ref<CanvasRenderingContext2D>()
  onMounted(() => {
    ctx.value = canvasRef.value?.getContext('2d')!
  })
  return { ctx }
}
