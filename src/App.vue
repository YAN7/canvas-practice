<template>
  <div class="main">
    <el-menu style="width: 260px" router>
      <el-menu-item v-for="btn in btns" :key="btn.path" :index="btn.path">
        {{ btn.name }}
      </el-menu-item>
    </el-menu>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const btns = ref<{ path: string; name: string }[]>([])

const getBtns = () => {
  const modules = import.meta.glob('./views/*.vue')
  const autoRoutes = Object.entries(modules).map(([key]) => {
    const path = key.replace('./views', '').replace('.vue', '')
    return {
      path,
      name: path.replace('/', '')
    }
  })
  btns.value = autoRoutes
}

onMounted(() => {
  getBtns()
})
</script>

<style scoped>
.main {
  display: flex;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
