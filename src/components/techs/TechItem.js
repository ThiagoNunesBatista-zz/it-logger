import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = ({ id, firstName, lastName }) => {
    deleteTech(id)
    M.toast({ html: `${firstName} ${lastName} was deleted` })
  }

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' onClick={() => handleDelete(tech)} className='secondary-content'>
          <i className='material-icons grey-text'>
            delete
          </i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem)
