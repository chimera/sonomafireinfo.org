const React = require('react')

function Error() {
  return (
    <p className="lead text-center text-danger">
      <i className="fa fa-warning fa-spin mr-3" /> Sorry, we had an issue
      loading results, please try again in a few moments.
    </p>
  )
}

module.exports = Error
