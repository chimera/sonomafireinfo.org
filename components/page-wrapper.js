import BackBar from './back-bar'
import React from 'react'
import PropTypes from 'prop-types'

PageWrapper.defaultProps = { back: true }

PageWrapper.propTypes = {
  back: PropTypes.bool,
}

export default function PageWrapper({ back, children }) {
  return (
    <div>
      {back && <BackBar />}
      <div class="container-fluid my-4">
        <div className="row">
          <div className="col-lg-6 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}
