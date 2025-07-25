import { createAppSlice, rootReducer } from '@/store'
import { createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'

interface Counter {
  id: string
  value: number
}

const counterAdapter = createEntityAdapter<Counter>()
interface CounterSliceState
  extends ReturnType<typeof counterAdapter.getInitialState> {
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterSliceState = counterAdapter.getInitialState({
  ids: ['default'],
  entities: {
    default: { id: 'default', value: 0 }
  },
  status: 'idle'
})

export const slice = createAppSlice({
  name: 'counter',
  initialState,
  reducers: (create) => {
    return {
      increment: create.reducer((state) => {
        const counter = state.entities.default
        if (!counter) return
        counterAdapter.updateOne(state, {
          id: 'default',
          changes: { value: counter.value + 1 }
        })
      }),
      decrement: create.reducer((state) => {
        const counter = state.entities.default
        if (!counter) return
        counterAdapter.updateOne(state, {
          id: 'default',
          changes: { value: counter.value - 1 }
        })
      }),
      incrementByAmount: create.reducer(
        (state, action: PayloadAction<number>) => {
          const counter = state.entities.default
          if (!counter) return
          counterAdapter.updateOne(state, {
            id: 'default',
            changes: { value: counter.value + action.payload }
          })
        }
      ),
      incrementAsync: create.asyncThunk(
        async (amount: number, thunkApi) => {
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
            const counter = state.entities.default
            if (!counter) return
            counterAdapter.updateOne(state, {
              id: 'default',
              changes: { value: counter.value + action.payload }
            })
          },
          rejected: (state) => {
            state.status = 'failed'
          }
        }
      )
    }
  },
  selectors: {
    selectCount: (counter) => counter.entities.default?.value ?? 0,
    selectStatus: (counter) => counter.status
  }
}).injectInto(rootReducer)

export const { increment, decrement, incrementByAmount, incrementAsync } =
  slice.actions

export const { selectCount, selectStatus } = slice.selectors
