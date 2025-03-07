import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCalculationsStore = create(
  persist(
    (set) => ({
      calculations: [],
      addCalculation: (entry) => set((state) => ({
        calculations: [{
          id: Date.now(),
          ...entry,
          createdAt: new Date().toISOString()
        }, ...state.calculations]
      })),
      clearHistory: () => set({ calculations: [] })
    }),
    {
      name: 'carbon-trackr-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useCalculationsStore