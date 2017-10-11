const React = require('react')

function EmailLink({ email }) {
  return <a href={`mailto:${email}`}>{email}</a>
}

module.exports = EmailLink
