import axios from "axios";

let baseURL

export const getCharactersData = async (page, name, status, type, gender, species, filter) => {
  baseURL = 'https://rickandmortyapi.com/api/character/' + `?page=${page}`;
  
  
  if(name) baseURL = baseURL + `&name=${name}`
  if(status) baseURL = baseURL + `&status=${status}`
  if(type) baseURL = baseURL + `&type=${type}`
  if(gender) baseURL = baseURL + `&gender=${gender}`
  if(species) baseURL = baseURL + `&species=${species}`
  const data = await axios.get(baseURL)
    .catch(function (error) {
      if (error.response) {
        data = 0
      } else if (error.request) {
        data = 1
      } else {
        data = 2
      }
    });
  console.log(data)
  return data
}
