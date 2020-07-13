import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'


export const signupListener = (signupDataListener, history) => async (dispatch) => {

  try {
    const response = await axios.post(`${baseUrl}/signup/listener`, signupDataListener)
    const token = response.data.token
    localStorage.setItem("token", token)
    history.push("/home")
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}
export const signupAdmin = (signupDataAdmin, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup/admin`, signupDataAdmin)
    const token = response.data.token
    localStorage.setItem("token", token)
    history.push("/home")
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}
export const signupBand = (signupDataBand, history) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/signup/band`, signupDataBand)
    const token = response.data.token
    // localStorage.setItem("token", token)
    history.push("/waiting")
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}

export const login = (loginData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, loginData)
    const token = response.data.token
    localStorage.setItem("token", token)
    history.push("/home")
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o Login do usuário, cheque as credenciais e tente novamente.")
  }
}

export const getUser = (info) => ({
  type: "SET_USER",
  payload: {
    info
  }})


export const getUserById = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/profile`,{
      headers: {
        auth : {
          auth: getToken()
        }
      }
    })
    dispatch(getUser(response.data.user))
  } catch (err) {
    console.log(err.message)
    window.alert("Não foi possivel encontrar esse usuário")
  }
}