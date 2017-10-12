import React from 'react'

export default function EmailLink({ email }) {
  return <a href={`mailto:${email}`}>{email}</a>
}
