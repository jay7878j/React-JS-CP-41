import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'
import Layout from './components/Layout'

class App extends Component {
  state = {
    content: true,
    leftNavbar: true,
    rightNavbar: true,
  }

  changeContent = value => {
    this.setState({
      content: value,
    })
    console.log(value)
  }

  changeLeftBar = value => {
    this.setState({
      leftNavbar: value,
    })
    console.log(value)
  }

  changeRightBar = value => {
    this.setState({
      rightNavbar: value,
    })
    console.log(value)
  }

  render() {
    const {content, leftNavbar, rightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent: content,
          showLeftNavbar: leftNavbar,
          showRightNavbar: rightNavbar,
          onToggleShowContent: this.changeContent,
          onToggleShowLeftNavbar: this.changeLeftBar,
          onToggleShowRightNavbar: this.changeRightBar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
