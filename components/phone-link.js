import React from 'react'
import justNumbers from 'just-numbers'

export default function PhoneLink({ number }) {
  let cleaned = String(justNumbers(number))

  let formatted
  if (cleaned.length === 10) {
    const area = cleaned.slice(0, 3)
    const number = cleaned.slice(3)
    const first3 = number.slice(0, 3)
    const last4 = number.slice(3)
    formatted = `(${area}) ${first3}-${last4}`
  }

  return <a href={`tel:1${cleaned}`}>{formatted || cleaned}</a>
}
