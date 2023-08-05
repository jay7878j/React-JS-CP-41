import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="layout-main-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left"
              checked={showLeftNavbar}
              onChange={onLeftNavbar}
            />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right"
              checked={showRightNavbar}
              onChange={onRightNavbar}
            />
            <label htmlFor="right">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
