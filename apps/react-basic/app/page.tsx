export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        {/* see https://nextjs.org/docs/app/getting-started/fonts */}
        <div className='font-[family-name:var(--font-geist-mono)]'>
          <ul>
            <li>
              <a href='/example/media-record'>mediaRecord</a>
            </li>
            <li>
              <a href='/example/use-callback'>useCallback</a>
            </li>
            <li>
              <a href='/example/use-memo'>useMemo</a>
            </li>
          </ul>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
    </div>
  )
}
