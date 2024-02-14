import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AppProvider>
  </React.StrictMode>
)
