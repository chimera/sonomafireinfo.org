import React from 'react'
import PropTypes from 'prop-types'

SubSection.defaultProps = {
  types: [],
}

SubSection.propTypes = {
  types: PropTypes.array,
}

export default function SubSection({ types, search }) {
  return (
    <ul class="display-flex position-relative float-right small list-unstyled">
      {types.map((type, key, arr) => {
        return <li class="d-inline-block ml-1" key={key} >
          <a class="d-inline-block" href="#" onClick={(e) => {
            e.preventDefault()
            search(type)
          }}>{type}</a>
        </li>
      })}
    </ul>
  )
}
