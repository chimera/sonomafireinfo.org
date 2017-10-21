import dataHandler from './data-handler'
import PageWrapper from './page-wrapper'
import PropTypes from 'prop-types'
import React from 'react'
import { resources } from '../config'

TestimonyPage.defaultProps = {}

TestimonyPage.propTypes = {}

function TestimonyPage({ items }) {
  return (
    <PageWrapper>
      <h3 className="text-center mb-4">
        <span className="mr-3">📢</span>
        Testimony
      </h3>
      <ul className="list-unstyled my-5">
        {items.map((item, key) => {
          return (
            <li key={key} className="my-4">
              <blockquote className="blockquote" key={key}>
                {item.quote}
                <footer className="blockquote-footer">
                  <cite title={item.name}>{item.name}</cite>
                </footer>
              </blockquote>
            </li>
          )
        })}
      </ul>
    </PageWrapper>
  )
}

export default dataHandler(TestimonyPage, resources.testimony)
