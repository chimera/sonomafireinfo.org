const Error = require('./error')
const ErrorBoundary = require('./error-boundary')
const fetchResources = require('../fetch-resources')
const Fuse = require('fuse.js')
const Loading = require('./loading')
const React = require('react')
const Search = require('./search')

function dataHandler(WrappedComponent, { type, url }) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        loading: false,
        items: [],
        filtered: [],
        search: '',
      }
    }

    async componentWillMount() {
      this.setState({ ...this.state, error: null, loading: true })
      try {
        const news = await fetchResources(url, type)
        const items = news.items.filter(item => Object.keys(item.fields).length)
        this.setState({
          ...this.state,
          items,
          filtered: items,
          error: null,
          loading: false,
        })
      } catch (error) {
        this.setState({ ...this.state, error: error })
        console.error('ERROR:', error)
      }
    }

    search(text) {
      const options = {
        shouldSort: true,
        minMatchCharLength: 1,
        threshold: 0.3,
        // location: 0,
        // distance: 100,
        // maxPatternLength: 32,
        keys: [
          'fields.Name',
          'fields.Notes',
          'fields.Needs',
          'fields.Description',
          'fields.Email',
          'fields.Phone',
        ],
      }
      const fuse = new Fuse(this.state.items, options)

      const filtered = text ? fuse.search(text) : this.state.items

      this.setState({
        ...this.state,
        search: text,
        filtered,
      })
    }

    render() {
      if (this.state.error) {
        return <Error />
      }

      if (this.state.loading) {
        return <Loading />
      }

      return (
        <ErrorBoundary>
          <div className="mb-3">
            <Search onChange={text => this.search(text)} />
          </div>
          <WrappedComponent items={this.state.filtered} />
        </ErrorBoundary>
      )
    }
  }
}

module.exports = dataHandler
