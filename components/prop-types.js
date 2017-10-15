import PropTypes from 'prop-types'

export const Resource = PropTypes.shape({
  icon: PropTypes.node.isRequire,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
})

export const NavLink = PropTypes.shape({
  icon: PropTypes.node.isRequire,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  highlight: PropTypes.bool,
})

export const NavSection = PropTypes.shape({
  links: PropTypes.arrayOf(NavLink).isRequired,
  heading: PropTypes.string,
})

export const Item = PropTypes.shape({
  // Generic data
  name: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.string,
  description: PropTypes.string,
  needs: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  source: PropTypes.string,
  website: PropTypes.string,
  lastUpdated: PropTypes.string,
  facebookLink: PropTypes.string,

  // Data (stats)
  data: PropTypes.string,

  // Priority
  priority: PropTypes.bool,

  // Extra content
  extraContent: PropTypes.func,

  // Shelter specific
  closed: PropTypes.bool,
  donationNeeds: PropTypes.string,
  volunteerNeeds: PropTypes.string,
  atCapacity: PropTypes.bool,
  elderCare: PropTypes.bool,
  hablanEspanol: PropTypes.bool,
  redCrossFacility: PropTypes.bool,
})
