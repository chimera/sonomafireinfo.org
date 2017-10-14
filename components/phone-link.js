import React from 'react'
import phone from 'phone'

export default function PhoneLink({ number }) {
  const cleaned = phone(number)[0]
  return <a href={`tel:${cleaned}`}>{cleaned}</a>
}
