import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initialTransactionHistory = []
class MoneyManager extends Component {
  state = {
    transactionHistory: initialTransactionHistory,
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }
  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionHistory: [...prevState.transactionHistory, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }
  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }
  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }
  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  getExpenses = () => {
    const {transactionHistory} = this.state
    let expensesAmount = 0

    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionHistory} = this.state
    let incomeAmount = 0

    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionHistory[1].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionHistory} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }
  render() {
    const {transactionHistory, title, amount, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div>
        <div className="big-container">
          <div className="top-header-container">
            <h1 className="header-main-heading">Hi, Richard</h1>
            <p className="header-description">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div>
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <h1 className="form-main-heading">Add Transaction</h1>
              <label htmlFor="titleInputElement" className="input-heading">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="titleInputElement"
                className="input-element"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amountInputElement" className="input-heading">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amountInputElement"
                className="input-element"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="typeInputElement" className="input-heading">
                TYPE
              </label>
              <select
                id="typeInputElement"
                className="select-input-element"
                onChange={this.onChangeType}
                value={optionId}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <ul className="transaction-history-list">
              <h1 className="history-heading">History</h1>
              <li className="transaction-heading-container">
                <p className="transaction-heading">Title</p>
                <p className="transaction-heading">Amount</p>
                <p className="transaction-heading">Type</p>
              </li>
              {transactionHistory.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
