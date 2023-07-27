import { useState, useEffect } from "react"
import { getCharactersData } from "./../api/api"
import Characters from "./../components/characters/Characters";
import Pagination from "./../components/characters/Characters"

export default function useCharacters() {  
  const [characters, setCharacter] = useState([])
  const [countPages, setPages] = useState([])
  const [currentPage, setСurrentPage] = useState(1)
  
  useEffect(() => {
    getData(currentPage)
  }, [currentPage])

  const getData = async(page) => {
    const data = await getCharactersData(page)
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

  return {
    characters,
    pages,
    currentPage,
    paginate
  }
}

