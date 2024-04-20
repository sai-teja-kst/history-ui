import './index.css'

const HistoryItem = props => {
  const {eachItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  console.log(id)
  console.log(timeAccessed)
  console.log(logoUrl)
  console.log(title)
  console.log(domainUrl)

  return (
    <div className="item-container">
      <div className="item-bg-time">
        <p>{timeAccessed}</p>
      </div>
      <div className="item-bg-card">
        <div className="item-bg-info">
          <img src={logoUrl} alt={title} />
        </div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{domainUrl}</p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="bg-delete-item"
        />
      </div>
    </div>
  )
}

export default HistoryItem
