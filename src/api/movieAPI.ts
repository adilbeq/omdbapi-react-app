import { MovieResponse } from "../types/Movie"

const API_KEY = "fe667ca4"

export const fetchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
  const res = await fetch(url)
  const data: MovieResponse = await res.json()
  return data
}
