import ExternalLink from './external-link'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
          </h5>{' '}
          <nav className="list-group">
            {' '}
            {section.links.map((link, key) => {
              if (link.url) {
                return (
                  <ExternalLink
                    url={link.url}
                    className="list-group-item list-group-item-action align-middle"
                    key={key}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.title}
                  </ExternalLink>
                )
              }

              return (
                <Link
                  to={link.path}
                  className="list-group-item list-group-item-action align-middle"
                  key={key}
                >
                  <i class="fa fa-chevron-right ml-2 float-right text-muted mt-1" />
                  <span className="mr-3">{link.icon}</span>
                  {link.title}
                </Link>
              )
            })}
          </nav>
        </div>
      ))}
    </div>
  )
}
