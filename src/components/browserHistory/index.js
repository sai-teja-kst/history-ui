import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    userList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({searchInput: '', userList: initialHistoryList})
  }

  searchResults = () => {
    const {searchInput, userList} = this.state
    const updatedList = userList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedList
  }

  onUserInput = e => {
    this.setState({searchInput: e.target.value})
  }

  updatingState = () => {
    console.log('update state')
  }

  deleteItem = id => {
    const {userList} = this.state
    const updatedList = userList.filter(eachItem => eachItem.id !== id)
    this.setState({userList: updatedList})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)

    const searchResults = this.searchResults()

    return (
      <div className="bg-container">
        <div className="header-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
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
        {searchResults.length === 0 ? (
          <div className="bg-no-history">
            <p>There is no history to show</p>
          </div>
        ) : (
          <ui className="bg-footer">
            {searchResults.map(eachItem => (
              <HistoryItem
                eachItem={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ui>
        )}
      </div>
    )
  }
}

export default BrowserHistory
