import './index.css'

const HistoryDetails = Props => {
  const {HistoryDetailsAll, updateHistory} = Props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetailsAll

  const DeleteHistory = () => {
    updateHistory(id)
  }

  return (
    <li>
      <div className="total_bar_input">
        <div className="History_item_container">
          <p className="time_of_history">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image_size" />
          <p className="title_of_history">{title}</p>
          <p className="domain_of_history">{domainUrl}</p>
        </div>
        <div className="delete_button">
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              onClick={DeleteHistory}
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryDetails
