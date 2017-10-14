require('whatwg-fetch')
require('./styles.scss')

import Application from './components/application'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Application />, document.getElementById('app-root'))
