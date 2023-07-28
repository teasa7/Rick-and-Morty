import axios from "axios";

let baseURL

export const getCharactersData = async (page, name, status, type, gender, species) => {
  baseURL = 'https://rickandmortyapi.com/api/character/' + `?page=${page}`;
  if(name) baseURL = baseURL + `&name=${name}`
  if(status) baseURL = baseURL + `&status=${status}`
  if(type) baseURL = baseURL + `&type=${type}`
  if(gender) baseURL = baseURL + `&gender=${gender}`
  if(species) baseURL = baseURL + `&species=${species}`
  const data = await axios.get(baseURL)
  console.log(data)
  return data
}
