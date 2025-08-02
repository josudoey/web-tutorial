'use client'

import { useEffect } from 'react'

export default function WebRTCPage() {
  useEffect(() => {
    exampleWebRTC()
  })
  return <></>
}

async function exampleWebRTC() {
  function createRTCPeer() {
    const conn = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    })
    return conn
  }

  function delay(ms: number) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms)
    })
  }

  function setupRTCChannel(name: string, channel: RTCDataChannel) {
    channel.onopen = (e) => {
      console.log(`${name} channel(${channel.label}) open`, e)
    }
    channel.onmessage = (e) => {
      console.log(`${name} channel(${channel.label}) message`, e)
    }
    channel.onclose = (e) => {
      console.log(`${name} channel(${channel.label}) closed`, e)
    }
  }

  const offerConn = createRTCPeer()
  const anwserConn = createRTCPeer()

  offerConn.onicecandidate = (e) => {
    console.log('offer found ice candidate', JSON.stringify(e.candidate))
    if (!e.candidate) return

    console.log('anwser add ice candidate', JSON.stringify(e.candidate))
    anwserConn.addIceCandidate(e.candidate)
  }

  offerConn.ondatachannel = (e) => {
    const { channel } = e
    console.log(`offer found data channel(${channel.label})`, e)
    setupRTCChannel('offer', channel)
  }

  anwserConn.ondatachannel = (e) => {
    const { channel } = e
    console.log(`anwser found data channel(${channel.label})`, e)
    setupRTCChannel('anwser', channel)
  }

  anwserConn.onicecandidate = (e) => {
    console.log('anwser found ice candidate', JSON.stringify(e.candidate))
    if (!e.candidate) return
    console.log('offer add ice candidate', JSON.stringify(e.candidate))
    offerConn.addIceCandidate(e.candidate)
  }

  // step1: set local offer sdp
  console.log('offer create data channel')
  const offerChannel = offerConn.createDataChannel('offer-channel')
  const offer = await offerConn.createOffer()
  console.log('offer set local description', JSON.stringify(offer))
  offerConn.setLocalDescription(offer)

  // step2: set remoe offer sdp and local answer sdp
  console.log('anwser set remote description', JSON.stringify(offer))
  anwserConn.setRemoteDescription(offer)
  const answer = await anwserConn.createAnswer()
  console.log('anwser set local description', JSON.stringify(answer))
  anwserConn.setLocalDescription(answer)

  // step3: set remote answer sdp
  console.log('offer set remote description', JSON.stringify(answer))
  offerConn.setRemoteDescription(answer)
  console.log('anwser create data channel')
  const anwserChannel = anwserConn.createDataChannel('anwser-channel')

  Object.assign(window, {
    offerConn,
    offerChannel,
    anwserConn,
    anwserChannel
  })
}
