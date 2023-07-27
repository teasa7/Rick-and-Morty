import axios from "axios";

const baseURL = 'https://rickandmortyapi.com/api/character'

export const getCharactersData = async (page) => {
  const data = await axios.get(baseURL + `/?page=${page}`)
  return data
}
