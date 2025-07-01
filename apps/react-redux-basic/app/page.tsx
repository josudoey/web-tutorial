'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { increment, decrement } from '@/store/counter/slice'

export default function Home() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Redux Counter Example</h1>
        <div className='flex items-center justify-center space-x-4'>
          <button
            onClick={() => dispatch(decrement())}
            className='px-4 py-2 bg-red-500 text-white rounded'
          >
            -1
          </button>
          <span className='text-2xl'>{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className='px-4 py-2 bg-green-500 text-white rounded'
          >
            +1
          </button>
        </div>
      </div>
    </main>
  )
}
