import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  list = this.props

  state = {searchInput: '', userList: this.list}

  onUserInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput, userList} = this.state
    const {initialHistoryList} = userList
    console.log(searchInput)
    console.log(userList)
    console.log(initialHistoryList)

    return (
      <div className="bg-container">
        <div className="header-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="icon"
            className="logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search-icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="enter text"
              className="header-text"
              onChange={this.onUserInput}
            />
          </div>
        </div>
        <div className="bg-footer">
          {userList.map(eachItem => (
            <HistoryItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
