import React, { useState, createContext, useContext } from 'react'

const AppContext = createContext()

const ContextApp = ({ children }) => {
  const [query, setQuery] = useState('')

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { ContextApp }
