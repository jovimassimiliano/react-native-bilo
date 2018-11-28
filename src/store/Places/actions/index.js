import { 
  ADD_NEWS,
  SELECT_NEWS,
  DELETE_NEWS
} from "../types";

export const addNews = (values) => {
  return({
    type: ADD_NEWS,
    payload: values
  })
}

export const selectNews = id => {
  return({
    type: SELECT_NEWS,
    id
  })
}

export const deleteNews = id => {
  return({
    type: DELETE_NEWS,
    id
  })
}