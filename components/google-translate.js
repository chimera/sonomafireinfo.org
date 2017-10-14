import React from 'react'
import PropTypes from 'prop-types'

export default class GoogleTranslate extends React.Component {
  componentDidMount() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    )
  }

  render() {
    return (
      <div>
        <small class="text-muted">Translate this website:</small>
        <div id="google_translate_element" />
      </div>
    )
  }
}
