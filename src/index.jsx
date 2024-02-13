import React from 'react'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'

import './index.css'

import { AppProvider } from './setup/app_context'
import SharedLayout from './layout/SharedLayout'
import Main from './components/Main'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'
import Layout from './layout/Layout'
import { links } from './utilities/constants'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />} errorElement={<Error />}>
      <Route index element={<Main url={links.POPULAR} />} />
      <Route path='now_playing' element={<Main url={links.NOW_PLAYING} />} />
      <Route path='upcoming' element={<Main url={links.UPCOMING} />} />
      <Route path='top_rated' element={<Main url={links.TOP_RATED} />} />
      <Route path='query/:query' element={<Main url={links.SEARCH} />} />
      <Route path='movie/:id' element={<SingleMovie />} />
    </Route>
  )
)

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
