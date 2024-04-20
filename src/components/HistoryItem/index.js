import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  console.log(id)
  console.log(timeAccessed)
  console.log(logoUrl)
  console.log(title)
  console.log(domainUrl)

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="item-bg-time">
        <p>{timeAccessed}</p>
      </div>
      <div className="item-bg-card">
        <div className="item-bg-info">
          <img src={logoUrl} alt="domain logo" />
        </div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          data-testid="delete"
          className="bg-delete-item"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
