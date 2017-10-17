import BackBar from './back-bar'
import GoogleTranslate from './google-translate'
import React from 'react'
import PropTypes from 'prop-types'

PageWrapper.defaultProps = { back: true }

PageWrapper.propTypes = {
  back: PropTypes.bool,
}

export default function PageWrapper({ back, children }) {
  return (
    <div>
      {back && (
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-md-3 ml-auto">
              <div class="mt-3">
                <BackBar />
              </div>
            </div>
            <div className="col-md-3 text-md-right mr-auto">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid mt-4 mb-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}
