import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    currentSection: 'hero',
    lineUrl: 'https://line.me/ti/g2/VTcRIKs5i7po5qss96upqwzBo6V4hDGo-1-LRg'
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
