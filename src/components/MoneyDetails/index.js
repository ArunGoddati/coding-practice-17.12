import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="moneyDetails-container">
      <div className="list-item-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="balance">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="list-item-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="heading">Your Income</p>
          <p className="balance">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="list-item-expences">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="balance">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
