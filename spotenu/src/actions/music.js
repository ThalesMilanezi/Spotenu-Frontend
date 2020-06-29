import axios from 'axios'
import {baseUrl, getToken} from "../utils/constants"

export const createMusic = (musicData) => async (dispatch) => {
  try{
    const response = await axios.post(`${baseUrl}/create`, musicData)
    const token = response.data.token
    localStorage.setItem("token", token)
  }catch(err){
    console.error(err.message)
  }
}