import { createAppSlice } from '@/store/createAppSlice'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterSliceState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterSliceState = {
  value: 0,
  status: 'idle'
}

export const counterSlice = createAppSlice({
  name: 'counter',
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.value += 1
    }),
    decrement: create.reducer((state) => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    ),
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await new Promise<{ data: number }>((resolve) =>
          setTimeout(() => resolve({ data: amount }), 1000)
        )
        return response.data
      },
      {
        pending: (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'idle'
          state.value += action.payload
        },
        rejected: (state) => {
          state.status = 'failed'
        }
      }
    )
  }),
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status
  }
})

export const { increment, decrement, incrementByAmount, incrementAsync } =
  counterSlice.actions

export const { selectCount, selectStatus } = counterSlice.selectors
