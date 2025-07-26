'use client'

import { useMemo, useState } from 'react'

// In a real app, this would be a more complex calculation
const calculateExpensiveValue = (num: number) => {
  console.log('Calculating expensive value...')
  let result = 0
  for (let i = 0; i < 100000000; i++) {
    result += Math.sqrt(i)
  }
  return result + num
}

export default function UseMemoPage() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(10)

  // useMemo will only recompute the memoized value when 'number' has changed.
  const expensiveValue = useMemo(
    () => calculateExpensiveValue(number),
    [number]
  )

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>useMemo Example</h1>

      <div className='mb-4'>
        <p>
          This example demonstrates the use of the <code>useMemo</code> hook to
          avoid expensive recalculations on every render.
        </p>
      </div>

      <div className='border p-4 rounded-md shadow-md'>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Counter</h2>
          <p className='my-2'>
            Current count: <strong>{count}</strong>
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Increment Count
          </button>
          <p className='text-sm text-gray-600 mt-2'>
            Clicking this button re-renders the component, but it does not
            trigger the expensive calculation because the `number` state has not
            changed. Check your browser's console.
          </p>
        </div>

        <hr className='my-4' />

        <div className='mb-4'>
          <h2 className='text-xl font-semibold'>Expensive Calculation</h2>
          <p className='my-2'>
            The expensive calculation depends on this number:{' '}
            <strong>{number}</strong>
          </p>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setNumber(number - 1)}
              className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
            >
              -
            </button>
            <button
              onClick={() => setNumber(number + 1)}
              className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
            >
              +
            </button>
          </div>
          <p className='text-lg mt-2'>
            Result of expensive calculation: <strong>{expensiveValue}</strong>
          </p>
          <p className='text-sm text-gray-600 mt-2'>
            Changing the number will trigger the expensive calculation. Check
            your browser's console.
          </p>
        </div>
      </div>
    </div>
  )
}
