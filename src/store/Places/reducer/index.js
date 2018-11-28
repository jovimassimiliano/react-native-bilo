import { ADD_NEWS, SELECT_NEWS } from "../types";

const initState = {
  selectedPlace:{},
  places:[]
}

export default (state = initState, action) => {
  switch(action.type){
    case ADD_NEWS:
      const places = state.places.concat({
        id: state.places.length + 1,
        text: action.payload,
        image: 'https://source.unsplash.com/random/600x400'
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
    default:
      return state;
  }
}