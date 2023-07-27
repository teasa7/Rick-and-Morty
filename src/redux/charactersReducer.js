// import { useState, useEffect } from "react"
// import { getCharacters } from "./../api/api"

// const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

// let initialState = {
//   currentPage: 1
// }

// const charactersReducer = (state = initialState, action) => {
//   switch(action.type) { 
//     case SET_CURRENT_PAGE: 
//       return {
//         ...state,
//         currentPage: action.currentPage
//       }
//     default:
//       return state
//   }
// }

// export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

// export default charactersReducer