import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="about-main-container">
          <Navbar />
          {!isDarkTheme ? (
            <ul className="about-container-light">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="about-image"
                  alt="about"
                />
              </li>
              <li>
                <h1 className="about-heading-light">About</h1>
              </li>
            </ul>
          ) : (
            <ul className="about-container-dark">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="about-image"
                  alt="about"
                />
              </li>
              <li>
                <h1 className="about-heading-dark">About</h1>
              </li>
            </ul>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
