import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    currentSection: 'hero',
    lineUrl: 'https://line.me/ti/g2/HAA4_XvVNzh4VyLMbbnqSqAy93KsImggoMwx-A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default'
  }),
  actions: {
    setSection(section) {
      this.currentSection = section
    },
    async loadConfig() {
      try {
        const res = await fetch(import.meta.env.BASE_URL + 'config.json')
        const data = await res.json()
        if (data.lineUrl) this.lineUrl = data.lineUrl
      } catch {
        // fallback to default
      }
    }
  }
})
