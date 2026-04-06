import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    currentSection: 'hero',
    lineUrl: 'https://line.me/ti/g/PLACEHOLDER'
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
