import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './app_context'
import { ContextApp } from './components/context'

ReactDOM.render(
  <React.StrictMode>
    <ContextApp>
      <AppProvider>
        <App />
      </AppProvider>
    </ContextApp>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
