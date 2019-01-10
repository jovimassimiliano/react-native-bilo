import { REQUEST_SIGN_UP } from "./types";

export const requestSignUp = (values) => {
  return ({
    type: REQUEST_SIGN_UP,
    payload: values
  })
}