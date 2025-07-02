'use client'

import { useCounterStore } from '@/store/counter'

export default function Home() {
  const { count, increment, decrement, incrementAsync, loading } = useCounterStore()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Zustand Counter Example</h1>
        <div className='flex items-center justify-center space-x-4'>
          <button
            onClick={decrement}
            className='px-4 py-2 bg-red-500 text-white rounded'
          >
            -1
          </button>
          <span className='text-2xl'>{count}</span>
          <button
            onClick={increment}
            className='px-4 py-2 bg-green-500 text-white rounded'
          >
            +1
          </button>
          <button
            onClick={incrementAsync}
            disabled={loading}
            className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50'
          >
            {loading ? 'Loading...' : '+1 Async'}
          </button>
        </div>
      </div>
    </main>
  )
}