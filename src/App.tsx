import React, { useEffect, useState } from "react"
import { Movie, MovieResponse } from "./types/Movie"
import { fetchMovies } from "./api/movieAPI"
import { Header } from "./components/Header"
import { MovieList } from "./components/MovieList"

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [query, setQuery] = useState("spider")

  useEffect(() => {
    const fetch = async () => {
      const data: MovieResponse = await fetchMovies(query)
      if (data.Response === "True" && data.Search) {
        setMovies(data.Search)
      } else {
        setMovies([])
      }
    }

    fetch()
  }, [query])

  return (
    <>
      <Header onSearch={setQuery} />
      <MovieList movies={movies} />
    </>
  )
}

export default App
