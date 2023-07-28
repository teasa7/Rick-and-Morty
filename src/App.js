import { useState, useEffect } from "react"
import { getCharactersData } from "./api/api"
import  "./App.css"
import Characters from "./components/characters/Characters"
import Pagination from "./components/characters/Pagination"
import Filtration from "./components/characters/FIltration"

function App(props) {  
  const [characters, setCharacter] = useState([])
  const [error, setError] = useState(null)

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

    if(data === "Error") {
      const dataAgain = await getCharactersData("1", name, status, type, gender, species)
      if(dataAgain === "Error") {
        setError("Error")
      }
      else {
        setCharacter(dataAgain.data.results)
        setPages(dataAgain.data.info.pages)
        setError(null)
      }
    }
    else {
      setCharacter(data.data.results)
      setPages(data.data.info.pages)
      setError(null)
    } 
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
  const reset = () => {
    setСurrentPage(1)
    setName(null)
    setStatus(null)
    setGender(null)
    setType(null)
    setSpecies(null)
    setError(null)
  } 

  return (
    <div className="app">
      <h1 className="title">Rick and Morty</h1>
      <Filtration getName={getName} getStatus={getStatus} getGender={getGender} getType={getType} getSpecies={getSpecies} reset={reset}/>
      <Characters characters={characters} error={error} />
      <Pagination pages={pages} currentPage={currentPage} paginate={paginate}/>
    </div>
  )
}
export default App;
