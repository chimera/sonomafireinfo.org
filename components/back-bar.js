import React from 'react'
import PropTypes from 'prop-types'
import GoogleTranslate from './google-translate'
import { Link } from 'react-router-dom'

BackBar.defaultProps = {}

BackBar.propTypes = {}

export default function BackBar() {
  return (
    <div class="container-fluid my-4">
      {/* <div class="row">
        <div class="col-md-3 ml-auto"> */}
      <div class="my-3 text-center">
        <Link to="/">
          <big>← Back</big>
        </Link>
      </div>
      {/* </div> */}
      {/* <div class="col-md-3 text-md-right mr-auto">
          <GoogleTranslate />
        </div> */}
      {/* </div> */}
    </div>
  )
}
