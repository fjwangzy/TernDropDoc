<template>
  <div class="aside-toggle-wrapper">
    <button class="aside-toggle-btn" @click="toggleAside" :title="isHidden ? '显示大纲' : '隐藏大纲'">
      <svg v-if="isHidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isHidden = ref(false)

const toggleAside = () => {
  isHidden.value = !isHidden.value
  if (isHidden.value) {
    document.documentElement.classList.add('hide-aside')
  } else {
    document.documentElement.classList.remove('hide-aside')
  }
}

onMounted(() => {
  if (document.documentElement.classList.contains('hide-aside')) {
    isHidden.value = true
  }
})
</script>

<style>
.aside-toggle-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.aside-toggle-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}
.aside-toggle-btn:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

/* Hide the outline content */
html.hide-aside .VPDocAsideOutline {
  display: none !important;
}

/* On large screens, adjust the spacing so content can expand or at least looks clean */
@media (min-width: 1280px) {
  html.hide-aside .VPDoc .aside {
    width: 40px !important;
    padding-left: 0 !important;
  }
  
  html.hide-aside .aside-toggle-wrapper {
    justify-content: center;
  }
}
</style>
