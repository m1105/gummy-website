<template>
  <div class="feature-card">
    <component :is="icon" :size="24" class="icon" />
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: Object, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<style scoped>
.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  padding: var(--card-padding);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.icon {
  color: var(--accent);
}
.card-title {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
}
.card-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
