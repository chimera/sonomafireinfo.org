const React = require('react')

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true })
    console.error(error, info)
  }

  render() {
    if (this.state.error) {
      return <Error />
    }

    return this.props.children
  }
}

module.exports = ErrorBoundary
