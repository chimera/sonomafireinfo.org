import Error from './error'
import fetchResources from '../fetch-resources'
import Fuse from 'fuse.js'
import Loading from './loading'
import React from 'react'
import Search from './search'

export default function dataHandler(WrappedComponent, { title, url }) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        error: null,
        loading: false,
        items: [],
        filtered: [],
        search: ''
      }
    }

    async componentWillMount() {
      this.setState({ ...this.state, error: null, loading: true })
      try {
        const items = await fetchResources(url)
        console.log(`RESPONSE from ${title}:`, items)

        this.setState({
          ...this.state,
          items,
          filtered: items,
          error: null,
          loading: false
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
        keys: [
          'name',
          'description',
          'notes',
          'needs',
          'email',
          'phone',
          'address',
          'donationNeeds',
          'volunteerNeeds'
        ]
      }
      const fuse = new Fuse(this.state.items, options)

      const filtered = text ? fuse.search(text) : this.state.items

      this.setState({
        ...this.state,
        search: text,
        filtered
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
        <div>
          <div className="mb-3">
            <Search onChange={text => this.search(text)} />
          </div>
          <WrappedComponent items={this.state.filtered} />
        </div>
      )
    }
  }
}
