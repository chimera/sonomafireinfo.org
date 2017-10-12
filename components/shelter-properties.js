const React = require('react')

function ShelterProperties({ fields }) {
  return (
    <div className="mt-2">
      <small>
        {fields['At capacity'] && (
          <span className="mr-3" title="At capacity">
            <span className="mr-2">❌</span> At Capacity
          </span>
        )}
        {fields['Elder Care'] && (
          <span className="mr-3" title="Has elder care">
            <span className="mr-2">👵</span> Elder Care
          </span>
        )}
        {fields['Hablan español'] && (
          <span className="mr-3" title="Hablan Español">
            <span className="mr-2">🇲🇽</span> Hablan Español
          </span>
        )}
        {fields['Red Cross Facility'] && (
          <span className="mr-3" title="Red Cross Facility">
            <span className="mr-2">🏥</span> Red Cross Facility
          </span>
        )}
      </small>
    </div>
  )
}

module.exports = ShelterProperties
