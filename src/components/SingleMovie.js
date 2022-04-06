// import React from 'react'
// // import { useParams } from 'react-router-dom'
// // import { useFetch } from '../useFetch'

// function SingleMovie({ clickedId }) {
//   //   const { id } = useParams()
//   const SINGLE = `https://api.themoviedb.org/3/movie/${clickedId}?api_key=${process.env.REACT_APP_API_KEY}`

//   const { movie, loading } = useFetch(SINGLE)
//   const { title, overview, release_date, genres, runtime } = movie
//   //   console.log(movie, loading)
//   return (
//     <div className='movie-details'>
//       <h1>{title}</h1>
//       <p>{overview}</p>
//       <div className='details'>
//         <span>{release_date}</span>
//         {/* <span>{genres}</span> */}
//         <span>{runtime}</span>
//       </div>
//     </div>
//   )
// }

// export default SingleMovie
