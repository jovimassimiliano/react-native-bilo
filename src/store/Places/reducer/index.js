import { ADD_NEWS, SELECT_NEWS, DELETE_NEWS } from "../types";

const initState = {
  selectedPlace:{},
  places:[]
}

export default (state = initState, action) => {
  switch(action.type){
    case ADD_NEWS:
      const places = state.places.concat({
        id: state.places.length + 1,
        text: action.payload.text,
        image: action.payload.image.uri
      });

      return({
        ...state,
        places
      });
    case SELECT_NEWS:
      const selectedPlace = state.places.filter(place => place.id === action.id);

      return({
        ...state,
        selectedPlace
      })
    case DELETE_NEWS: 
    const deletedPlace = state.places.filter(place => place.id !== action.id);
      return({
        places: deletedPlace
      })
    default:
      return state;
  }
}