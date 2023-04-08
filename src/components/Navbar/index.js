import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <div className="navbar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <div className="middle-items">
                <Link to="/" className="link-light">
                  <p className="list-item">Home</p>
                </Link>
                <Link to="/about" className="link-light">
                  <p className="list-item">About</p>
                </Link>
              </div>
              <button
                type="button"
                className="theme-button"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-image"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <div className="middle-items">
                <Link to="/" className="link-dark">
                  <p className="list-item">Home</p>
                </Link>
                <Link to="/about" className="link-dark">
                  <p className="list-item">About</p>
                </Link>
              </div>
              <button
                type="button"
                className="theme-button"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-image"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Navbar)
