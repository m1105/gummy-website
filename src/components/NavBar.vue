<template>
  <nav class="navbar">
    <div class="navbar-inner section">
      <span class="logo">GUMMY</span>
      <div class="nav-links">
        <a href="#why" class="nav-link">關於</a>
        <a href="#features" class="nav-link">功能</a>
        <a :href="ui.lineUrl" target="_blank" rel="noopener" class="nav-cta">加入社群</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useUiStore } from '../stores/ui.js'
const ui = useUiStore()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
}
.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
.logo {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 2px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-link {
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover {
  color: var(--text-primary);
}
.nav-cta {
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  padding: 8px 20px;
  border: 1px solid var(--accent);
  border-radius: var(--radius-pill);
  transition: background 0.2s;
}
.nav-cta:hover {
  background: rgba(0, 255, 0, 0.1);
}

@media (max-width: 640px) {
  .nav-links { gap: 16px; }
  .nav-link { display: none; }
}
</style>
