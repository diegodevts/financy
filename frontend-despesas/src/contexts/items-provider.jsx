import { addExpense, getExpenses } from '../config/http'
import MyContext from './items-context'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export function MyProvider({ children }) {
  const [data, setData] = useState([])
  const notifySuccess = (message) => toast.success(message)
  const notifyError = (message) => toast.error(message)

  const onSubmit = async (item) => {
    const response = await addExpense(item)

    //retornar a resposta
    notifySuccess(response)
    await search('')
  }

  const search = async (month) => {
    const expenses = await getExpenses(month)

    setData(expenses)
  }

  return (
    <MyContext.Provider
      value={{
        onSubmit,
        data,
        search,
        notifySuccess,
        notifyError
      }}
    >
      {children}
    </MyContext.Provider>
  )
}
