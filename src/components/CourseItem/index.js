import './index.css'
import {Link} from 'react-router-dom'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <li className="course-item">
      <img src={logoUrl} alt={name} className="course-logo" />
      <Link to={`/courses/${id}`} className="link">
        <p className="course-name">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
