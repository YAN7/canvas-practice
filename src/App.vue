<template>
  <div class="main">
    <el-menu class="menu" router :default-active="$route.path">
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
    const name = path.replace('/', '')
    const sort = parseInt(name.split('-')[0])
    return {
      path,
      sort,
      name
    }
  })
  btns.value = autoRoutes.sort((a, b) => a.sort - b.sort)
}

onMounted(() => {
  getBtns()
})
</script>

<style scoped>
.main {
  display: flex;
}
.menu {
  width: 260px;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
.content {
  display: flex;
  flex: 1;
}
</style>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}
canvas {
  border: 1px solid black;
}
</style>
