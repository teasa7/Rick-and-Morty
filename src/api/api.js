import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async (word) => {
  const data = await axios.get(baseURL)
  return data
}


