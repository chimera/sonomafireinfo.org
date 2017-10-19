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
    <div class="display-inline-block position-relative float-right small">
      {types.map((type, key, arr) => {
        return <div key={key} >
          <a href="#" onClick={(e) => {
            e.preventDefault()
            search(type)
          }}>{type}</a>
          {arr.length-1 === key ? '' : ','}
      </div>
      })}
    </div>
  )
}
