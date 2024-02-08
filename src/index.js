import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import { AppProvider } from './setup/app_context'
import SharedLayout from './layout/SharedLayout'
import Main from './components/Main'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'
import Layout from './layout/Layout'
import { links } from './utilities/constants'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Main url={links.POPULAR} />,
      },
      {
        path: 'now_playing',
        element: <Main url={links.NOW_PLAYING} />,
      },
      {
        path: 'upcoming',
        element: <Main url={links.UPCOMING} />,
      },
      {
        path: 'top_rated',
        element: <Main url={links.TOP_RATED} />,
      },
      {
        path: 'query/:query',
        element: <Main url={links.SEARCH} />,
      },
      {
        path: 'movie/:id',
        element: <SingleMovie />,
      },
    ],
  },
])

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
