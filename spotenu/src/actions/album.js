import axios from 'axios'
import {baseUrl, getToken} from "../utils/constants"

export const createAlbum = (albumData) => async (dispatch) => {
  try{
    const response = await axios.post(`${baseUrl}/create`, albumData)
    const token = response.data.token
    localStorage.setItem("token", token)
  }catch(err){
    console.error(err.message)
  }

  export const searchAlbum = () => async (dispatch) => {
    try{
      const response = await axios.post(`${baseUrl}/search`, {
        headers: {
          auth: getToken()
        }
      })
      const token = response.data.token
      localStorage.setItem("token", token)
    }catch(err){
      console.error(err.message)
    }
  }
}