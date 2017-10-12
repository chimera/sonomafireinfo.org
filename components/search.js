import React from 'react'

export default function Search({ onChange, text }) {
  return (
    <div className="input-group">
      <span className="input-group-addon">🔎</span>
      <input
        type="search"
        onChange={e => onChange(e.target.value)}
        value={text}
        placeholder="Search..."
        aria-label="Search..."
        className="form-control"
      />
    </div>
  )
}
