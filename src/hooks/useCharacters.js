import { useState, useEffect } from "react"
import { getCharactersData } from "./../api/api"

export default function useCharacters() {  
  const [characters, setCharacter] = useState([])

  // Pagination
  const [countPages, setPages] = useState([])
  const [currentPage, setСurrentPage] = useState(1)

  // Filters
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [type, setType] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  
  useEffect(() => {
    getData(currentPage, name, status, type, gender, species)
  }, [currentPage, name, status, type, gender, species])

  const getData = async(page) => {
    const data = await getCharactersData(page, name, status, type, gender, species)
    setCharacter(data.data.results)
    setPages(data.data.info.pages)
  }

  let pages = []
    for(let i = 1; i <= countPages; i++) {
    pages.push(i)
  }

  const paginate = (pageNumber) => {
    setСurrentPage(pageNumber)
  } 
  const getName = (name) => {
    setName(name)
  } 
  const getStatus = (status) => {
    setStatus(status)
  } 
  const getGender = (gender) => {
    setGender(gender)
  } 
  const getType = (type) => {
    setType(type)
  } 
  const getSpecies = (species) => {
    setSpecies(species)
  } 

  return {
    characters,
    pages,
    currentPage,
    paginate,
    getName,
    getStatus,
    getGender,
    getType,
    getSpecies
  }
}