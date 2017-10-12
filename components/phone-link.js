import React from 'react'
import PhoneNumber from 'awesome-phonenumber'

export default function PhoneLink({ number }) {
  const cleaned = new PhoneNumber(number, 'US')
  return (
    <a href={`tel:1${cleaned.getNumber('significant')}`}>
      {cleaned.getNumber('significant')}
    </a>
  )
}
