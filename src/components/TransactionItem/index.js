import './index.css'
const TransactionItem = props => {
  const {transactionDetails, key} = props
  const {id, title, amount, type} = transactionDetails
  return (
    <li className="transactionItem-details">
      <p className="transaction-heading-details">{title}</p>
      <p className="transaction-heading-details">{amount}</p>
      <p className="transaction-heading-details">{type}</p>
      <button className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
