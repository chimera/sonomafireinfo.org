import React from 'react'
import PropTypes from 'prop-types'
import { sections } from '../config'

Navigation.defaultProps = {}

Navigation.propTypes = {}

export default function Navigation() {
  return (
    <div>
      {sections.map((section, key) => (
        <div key={key}>
          <h5 className="navigation-heading text-center text-muted my-3">
            {section.heading}
          </h5>
          <nav className="list-group">
            {section.links.map((link, key) => (
              <a
                href={link.url}
                className="list-group-item list-group-item-action align-middle"
                key={key}
              >
                {link.url.startsWith('/') && (
                  <i class="fa fa-chevron-right ml-2 float-right text-muted mt-1" />
                )}

                <span className="mr-3">{link.icon}</span>
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </div>
  )
}
