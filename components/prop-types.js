import PropTypes from 'prop-types'

export const Resource = PropTypes.shape({
  icon: PropTypes.node.isRequire,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
})

export const Item = PropTypes.shape({
  fields: PropTypes.shape({
    // Generic fields
    Name: PropTypes.string,
    Description: PropTypes.string,
    Notes: PropTypes.string,
    Needs: PropTypes.string,
    Phone: PropTypes.string,
    Email: PropTypes.string,
    Address: PropTypes.string,
    Source: PropTypes.string,
    'Last Updated': PropTypes.string,

    // Extra content
    extraContent: PropTypes.func,

    // Shelter specific
    Closed: PropTypes.bool,
    'Donation needs': PropTypes.string,
    'Volunteer needs': PropTypes.string,
    'At capacity': PropTypes.bool,
    'Elder Care': PropTypes.bool,
    'Hablan español': PropTypes.bool,
    'Red Cross Facility': PropTypes.bool,
  }),
})
