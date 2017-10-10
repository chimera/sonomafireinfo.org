require('whatwg-fetch')
require('./styles.scss')

const React = require('react')
const ReactDOM = require('react-dom')

class ResourceList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      items: [],
    }
  }

  componentWillMount() {
    this.setState(Object.assign({}, this.state, { loading: true }))

    fetch('http://app.tubbsfireinfo.com/recent_news.json')
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log('RESPONSE:', json)
        this.setState(
          Object.assign({}, this.state, { items: json, loading: false })
        )
      })
      .catch(ex => {
        console.log('parsing failed', ex)
        this.setState(Object.assign({}, this.state, { loading: false }))
      })
  }

  render() {
    return <List items={this.state.items} loading={this.state.loading} />
  }
}

function List({ loading, items }) {
  if (loading) {
    return (
      <p className="lead text-center">
        <i className="fa fa-spinner fa-spin mr-3" /> Loading news...
      </p>
    )
  }

  return (
    <ul className="list-group">
      {items.map((item, key) => <Item item={item} key={key} />)}
    </ul>
  )
}

function Item({ item }) {
  return (
    <li className="list-group-item">
      <i className="fa fa-warning mr-3" />
      {item.fields.Description}
    </li>
  )
}

ReactDOM.render(<ResourceList />, document.getElementById('resource-list'))
