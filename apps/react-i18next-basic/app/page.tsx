'use client'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='font-[family-name:var(--font-geist-mono)]'>
          {t('greeting')}
        </div>
        <div>
          <button onClick={() => changeLanguage('en')} className='mr-2'>
            English
          </button>
          <button onClick={() => changeLanguage('zh-TW')}>繁體中文</button>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
    </div>
  )
}
