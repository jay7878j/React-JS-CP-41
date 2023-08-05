import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent)

      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="navbar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1>Content</h1>
              <p>Lorem ipsum dolor de isth </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar">
              <h1>Right Navbar Menu</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
