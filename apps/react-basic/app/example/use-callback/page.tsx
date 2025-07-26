'use client'

import React, { useState, useCallback } from 'react'

// A component that receives a function as a prop.
// It's wrapped in React.memo to prevent re-rendering if its props don't change.
const ChildComponent = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('ChildComponent rendered')
  return (
    <button
      onClick={onClick}
      className='p-2 m-2 border rounded-md bg-blue-500 text-white'
    >
      Increment Count
    </button>
  )
})
ChildComponent.displayName = 'ChildComponent'

export default function UseCallbackExample() {
  const [count, setCount] = useState(0)
  const [unrelatedState, setUnrelatedState] = useState(0)

  // This function is memoized with useCallback.
  // It will not be recreated on re-renders unless its dependencies change.
  // Since it has no dependencies, it will be created only once.
  const memoizedCallback = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const handleUnrelatedStateChange = () => {
    setUnrelatedState((s) => s + 1)
  }

  return (
    <div className='p-6 text-center'>
      <h1 className='text-2xl font-bold mb-4'>useCallback Example</h1>
      <p className='mb-2'>Count: {count}</p>
      <p className='mb-4'>Unrelated State: {unrelatedState}</p>

      <div className='space-x-4'>
        {/* The ChildComponent receives the memoized callback. */}
        <ChildComponent onClick={memoizedCallback} />

        <button
          onClick={handleUnrelatedStateChange}
          className='p-2 m-2 border rounded-md bg-green-500 text-white'
        >
          Change Unrelated State
        </button>
      </div>

      <div className='mt-6 p-4 border rounded-md bg-gray-100 text-left'>
        <h2 className='font-semibold'>How it works:</h2>
        <p className='mt-2'>
          1. `ChildComponent` is wrapped in `React.memo()`, so it only
          re-renders if its props change.
        </p>
        <p className='mt-2'>
          2. The `onClick` prop is a function. In JavaScript, functions are
          objects, so a new function is created on every render of
          `UseCallbackExample`.
        </p>
        <p className='mt-2'>
          3. `useCallback(fn, deps)` memoizes the function `fn`. It returns the
          same function instance between renders as long as the dependencies
          `deps` haven't changed.
        </p>
        <p className='mt-2'>
          4. Here, `memoizedCallback` has an empty dependency array `[]`, so the
          same function is used for all renders.
        </p>
        <p className='mt-4 font-medium'>
          Try clicking "Change Unrelated State". Notice in the browser console
          that "ChildComponent rendered" is NOT logged. This is because
          `memoizedCallback` is not recreated, and `React.memo` prevents the
          re-render. If you remove `useCallback`, the child will re-render every
          time.
        </p>
      </div>
    </div>
  )
}
