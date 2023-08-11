"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endingDate=new Date("2023-08-21")

export default function CountDown() {
  return (
    <Countdown className='text-yellow-300 font-bold text-5xl' date={endingDate} />
  )
}
