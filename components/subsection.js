import React from 'react'
import PropTypes from 'prop-types'

SubSection.defaultProps = {
  types: [],
}

SubSection.propTypes = {
  types: PropTypes.array,
}

export default function SubSection({ types, search }) {
  if (!types || !types.length) {
    return null
  }

  return (
    <ul class="clearfix float-right small list-unstyled mt-2">
      {types.map((type, key, arr) => {
        return (
          <li class="d-inline-block ml-2" key={key}>
            <small>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  search(type)
                }}
              >
                {type}
              </a>
            </small>
          </li>
        )
      })}
    </ul>
  )
}
