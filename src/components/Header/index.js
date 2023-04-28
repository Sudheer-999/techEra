import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="linked">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
    </Link>
  </div>
)

export default Header
