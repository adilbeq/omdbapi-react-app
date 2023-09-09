import React from "react"
import { Movie } from "../types/Movie"
import { MovieCardContainer, MovieImage, Title, Year } from "./MovieCard.styled"

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <MovieCardContainer>
    <MovieImage src={movie.Poster} alt={movie.Title} />
    <Title>{movie.Title}</Title>
    <Year>{movie.Year}</Year>
  </MovieCardContainer>
)
