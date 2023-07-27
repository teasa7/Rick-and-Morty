// import {charactersAPI} from "../api/api";

// const SET_CHARACTERS_DATA = 'SET-CHARACTERS-DATA'

// let initialState = {
//   characters: []
// }

// const charactersReducer = (state = initialState, action) => {
//   switch(action.type) { 
//     case SET_CHARACTERS_DATA: 
//       return {
//         ...state,
//         ...action.data
//       }
//     default:
//       return state
//   }
// }

// export let setCharactersData = (id, name, status, gender) => ({ type: SET_CHARACTERS_DATA, data: {id, name, status, gender}})

// export const getCharactersData = () => {
//   return (dispatch) => {
//     charactersAPI.me().then(response => {
//       let {id, name, status, gender} = response.data
//       dispatch(setCharactersData(id, name, status, gender))
//     })
//   }
// }


// export default charactersReducer