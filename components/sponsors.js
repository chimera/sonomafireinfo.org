import React from 'react'
import PropTypes from 'prop-types'

Sponsors.defaultProps = {}

Sponsors.propTypes = {}

export default function Sponsors() {
  return (
    <div className="mt-5 text-center">
      <h5 className="navigation-heading text-center text-muted my-3">
        Sponsors
      </h5>
      <div class="row">
        <div className="col-sm-6 mb-4">
          <img src="/images/google.png" alt="Google" className="img-fluid" />
        </div>
        <div className="col-sm-6 mb-4">
          <img src="/images/twilio.png" alt="Twilio" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div className="col-sm-6 mb-4">
          <img
            src="/images/airtable.png"
            alt="AirTable"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-6 mb-4">
          <img src="/images/zapier.png" alt="Zapier" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div className="col-sm-6 mx-auto">
          <img src="/images/mapbox.png" alt="MapBox" className="img-fluid" />
        </div>
        <div className="col-sm-6 mx-auto">
          <a href="http://chimeraarts.org" target="_blank">
            <img
              src="/images/chimera.png"
              alt="Chimera"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
