import axios from 'axios'
import { baseUrl, getToken } from "../utils/constants"

export const createGender = (genderData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/gender/create`, genderData,{
      headers: {
        Authorization: getToken()
      }
    })
    // const token = response.data.acessToken
    // localStorage.setItem("token", token)
  } catch (err) {
    console.error(err.message)
  }
}

export const getAllGenders = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/all`)
  } catch (err) {
    console.error(err.message)
  }
}