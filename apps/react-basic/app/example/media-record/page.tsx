'use client'

import { useRef, useState } from 'react'

export default function MediaRecordPage() {
  const [recording, setRecording] = useState(false)
  const mediaRecoderRef = useRef<MediaRecorder>(null)
  async function startRecord() {
    if (mediaRecoderRef.current) throw new Error('already recording')
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })

    const recorder = new MediaRecorder(localStream, {
      mimeType: 'video/webm'
    })
    mediaRecoderRef.current = recorder
    setRecording(true)

    const stack: Blob[] = []

    recorder.ondataavailable = async (e) => {
      console.log(e.data)
      stack.push(e.data)
    }
    recorder.start(1000)
    recorder.addEventListener('stop', () => {
      mediaRecoderRef.current = null
      setRecording(false)
      const blob = new Blob(stack, { type: 'audio/webm' })
      window.open(URL.createObjectURL(blob), '_blank')
    })
  }

  function stopRecord() {
    if (!mediaRecoderRef.current) throw new Error('not recording')
    mediaRecoderRef.current.stop()
  }

  return (
    <>
      {!recording && (
        <button
          onClick={() => {
            startRecord()
          }}
          className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
        >
          start
        </button>
      )}

      {recording && (
        <button
          onClick={() => {
            stopRecord()
          }}
          className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
        >
          stop
        </button>
      )}
    </>
  )
}
