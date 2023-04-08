import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="main-home-container">
          <Navbar />
          {!isDarkTheme ? (
            <ul className="home-container-light">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-image"
                />
              </li>
              <li>
                <h1 className="home-heading-light">Home</h1>
              </li>
            </ul>
          ) : (
            <ul className="home-container-dark">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-image"
                />
              </li>
              <li>
                <h1 className="home-heading-dark">Home</h1>
              </li>
            </ul>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
