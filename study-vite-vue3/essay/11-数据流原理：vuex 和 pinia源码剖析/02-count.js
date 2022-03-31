


import { defineStore } from 'pinia'

export const useCounterStore = defineStore('count', {
  id:'count',
  state: () => {
    return { count: 1 }
  },
  actions: {
    add() {
      this.count++
    },
  },
})
