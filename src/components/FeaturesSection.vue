<template>
  <section id="features" class="features-section">
    <div class="divider section"></div>
    <div class="features-content section">
      <div class="eyebrow">
        <span class="dot"></span>
        <span class="eyebrow-text">FEATURES</span>
      </div>
      <h2 class="title">核心功能一覽</h2>
      <div class="features-grid">
        <FeatureCard
          v-for="feat in features"
          :key="feat.title"
          :icon="feat.icon"
          :title="feat.title"
          :description="feat.description"
        />
      </div>
      <p class="note">※ 本工具不包含自動戰鬥功能，戰鬥操作需由玩家自行進行。</p>
    </div>
  </section>
</template>

<script setup>
import { Users, HeartPulse, ShieldCheck, Hand, Map, Sun } from 'lucide-vue-next'
import FeatureCard from './FeatureCard.vue'

const features = [
  { icon: Users, title: '高寵協作', description: '多角色組隊管理，隊伍治療、Buff 與高等寵物協同作戰。' },
  { icon: HeartPulse, title: '自動治療', description: '即時監控血量魔力，自動補水補藥、施放治癒與 Buff。' },
  { icon: ShieldCheck, title: '安全保護', description: '死亡自動復活、危險自動回村、異常狀態即時處理。' },
  { icon: Hand, title: '智能拾取', description: '自動拾取地面物品，支援黑白名單過濾與優先級設定。' },
  { icon: Map, title: '地圖導航', description: 'A* 路徑規劃、路線記錄，支援傳送卷軸與自動尋路。' },
  { icon: Sun, title: '全白天模式', description: '無論白天黑夜或地監深處，全場景清晰視野，不再錯過任何目標。' }
]
</script>

<style scoped>
.features-section {
  padding: 80px 0;
}
.divider {
  border-bottom: 1px solid var(--divider);
  margin-bottom: 60px;
}
.features-content {
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
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--card-gap);
  width: 100%;
}

@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
.note {
  font-size: 13px;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 8px;
}

@media (max-width: 640px) {
  .features-grid { grid-template-columns: 1fr; }
  .title { font-size: 28px; }
}
</style>
