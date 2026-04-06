<template>
  <section id="why" class="why-section">
    <div class="divider section"></div>
    <div class="why-content section">
      <div class="eyebrow">
        <span class="dot"></span>
        <span class="eyebrow-text">WHY GUMMY</span>
      </div>
      <h2 class="title">讓你的冒險更輕鬆</h2>
      <p class="desc">
        戰鬥由你掌控，繁瑣的補給、治療、導航交給 Gummy。<br>
        專注在最重要的事 — 享受遊戲本身。
      </p>
      <div class="stats-row">
        <div class="stat-card" v-for="stat in stats" :key="stat.value">
          <span class="stat-num">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
      <p class="note">※ 本工具不包含自動戰鬥功能，戰鬥操作需由玩家自行進行。</p>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '24/7', label: '全天候自動運行' },
  { value: '30秒', label: '快速上手設定' },
  { value: '穩定', label: '持續更新維護' }
]
</script>

<style scoped>
.why-section {
  padding: 80px 0;
}
.divider {
  border-bottom: 1px solid var(--divider);
  margin-bottom: 60px;
}
.why-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--section-gap);
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-half);
  letter-spacing: 4px;
}
.title {
  font-family: var(--font-heading);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}
.desc {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
  max-width: 600px;
  line-height: 1.7;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--card-gap);
  width: 100%;
}
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: var(--stat-padding);
  height: 160px;
  border: 1px solid rgba(0,255,0,0.12);
  border-radius: var(--radius-card);
}
.note {
  font-size: 13px;
  color: var(--text-secondary);
  text-align: center;
}
.stat-num {
  font-family: var(--font-mono);
  font-size: 36px;
  font-weight: 700;
  color: var(--accent);
}
.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .stats-row { grid-template-columns: 1fr; }
  .title { font-size: 28px; }
}
</style>
