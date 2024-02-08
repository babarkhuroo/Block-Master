// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SharedLayout from './layout/SharedLayout'
import Main from './components/Main'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'

import { links } from './utilities/constants'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <SharedLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '',
//         element: <Main url={links.POPULAR} />,
//       },
//       {
//         path: 'now_playing',
//         element: <Main url={links.NOW_PLAYING} />,
//       },
//       {
//         path: 'upcoming',
//         element: <Main url={links.UPCOMING} />,
//       },
//       {
//         path: 'top_rated',
//         element: <Main url={links.TOP_RATED} />,
//       },
//       {
//         path: 'query=:query',
//         element: <Main url={links.SEARCH} />,
//       },
//       {
//         path: 'movie/:id',
//         element: <SingleMovie />,
//       },
//     ],
//   },
// ])

function App() {
  return (
    <></>
    // <RouterProvider router={router} />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<SharedLayout />}>
    //       <Route index element={<Main url={links.POPULAR} />} />
    //       <Route
    //         path='now_playing'
    //         element={<Main url={links.NOW_PLAYING} />}
    //       />
    //       <Route path='upcoming' element={<Main url={links.UPCOMING} />} />
    //       <Route path='top_rated' element={<Main url={links.TOP_RATED} />} />
    //       <Route path='query=:query' element={<Main url={links.SEARCH} />} />
    //       <Route path='movie/:id' element={<SingleMovie />} />
    //       <Route path='*' element={<Error />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
