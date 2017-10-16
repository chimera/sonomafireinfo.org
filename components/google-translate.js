import React from 'react'
import PropTypes from 'prop-types'
import { GOOGLE_ANALYTICS_ID } from '../config'

const INTERVAL = 250
const TIMEOUT = 5000

export default class GoogleTranslate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
    this.elapsed = 0
    this.watcher = null
  }

  componentWillMount() {
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js'
    script.async = true
    document.body.appendChild(script)
  }

  load() {
    const config = {
      pageLanguage: 'en',
      includedLanguages: 'es', // comma separated
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      gaTrack: true,
      gaId: GOOGLE_ANALYTICS_ID,
    }
    new google.translate.TranslateElement(config, 'google_translate_element')
  }

  check() {
    this.elapsed += INTERVAL
    if (google && google.translate && google.translate.TranslateElement) {
      clearInterval(this.watcher)
      this.setState({ loaded: true })
      this.load()
    } else if (this.elapsed > TIMEOUT) {
      console.error('TIMEOUT!')
      clearInterval(this.watcher)
      this.setState({ loaded: false })
      // TODO: log error?
    }
  }

  componentDidMount() {
    this.watcher = setInterval(() => this.check(), INTERVAL)
  }

  render() {
    if (!this.state.loaded) {
      return (
        <small>
          <i className="fa fa-spinner fa-spin mr-2" /> Loading translation...
        </small>
      )
    }

    return (
      <div>
        <small class="text-muted">Translate this website:</small>
        <div id="google_translate_element" />
      </div>
    )
  }
}
