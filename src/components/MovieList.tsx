import React from "react"
import { Movie } from "../types/Movie"
import { MovieCard } from "./MovieCard"

import { MovieListContainer } from "./MovieList.styled"

interface MovieListProps {
  movies: Movie[]
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (movies.length === 0) {
    return <h3>Not found movie with that name</h3>
  }

  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </MovieListContainer>
  )
}
