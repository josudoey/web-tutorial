import { create } from 'zustand'

interface CounterState {
  count: number
  loading: boolean
  increment: () => void
  decrement: () => void
  incrementAsync: () => Promise<void>
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  loading: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementAsync: async () => {
    set({ loading: true })
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    set((state) => ({ count: state.count + 1, loading: false }))
  }
}))