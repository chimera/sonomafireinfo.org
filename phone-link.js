const React = require('react')
const PhoneNumber = require('awesome-phonenumber')

function PhoneLink({ number }) {
  const cleaned = new PhoneNumber(number, 'US')
  return (
    <a href={`tel:1${cleaned.getNumber('significant')}`}>
      {cleaned.getNumber()}
    </a>
  )
}

module.exports = PhoneLink
