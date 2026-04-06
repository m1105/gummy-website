<template>
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="hero-content section">
      <div class="eyebrow">
        <span class="dot"></span>
        <span class="eyebrow-text">LINEAGE CLASSIC ASSISTANT</span>
      </div>
      <h1 class="headline">天堂:經典版<br>專屬輔助工具</h1>
      <p class="description">
        Gummy 是為天堂經典版玩家打造的智能輔助工具。<br>
        加入 LINE 官方社群，了解更多功能與使用方式。
      </p>
      <a :href="ui.lineUrl" target="_blank" rel="noopener" class="cta-btn">
        加入 LINE 官方社群
      </a>
    </div>
  </section>
</template>

<script setup>
import { useUiStore } from '../stores/ui.js'
const ui = useUiStore()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,255,0,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 120px;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}
.dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  display: inline-block;
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent-half);
  letter-spacing: 4px;
}
.headline {
  font-family: var(--font-heading);
  font-size: 52px;
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 24px;
}
.description {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 32px;
}
.cta-btn {
  display: inline-block;
  padding: 14px 36px;
  background: var(--accent);
  color: #000;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-pill);
  transition: filter 0.2s;
}
.cta-btn:hover {
  filter: brightness(1.1);
}

@media (max-width: 640px) {
  .headline { font-size: 36px; }
  .description { font-size: 15px; }
  .hero-content { padding-top: 100px; }
}
</style>
