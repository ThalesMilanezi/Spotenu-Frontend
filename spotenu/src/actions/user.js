import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'


export const signupListener = (signupDataListener) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup/listener`, signupDataListener)
    const token = response.data.token
    localStorage.setItem("token", token)
    console.log("resposta está aqui", response)
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}
export const signupAdmin = (signupDataAdmin) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup/admin`, signupDataAdmin)
    const token = response.data.token
    localStorage.setItem("token", token)
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}
export const signupBand = (signupDataBand) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup/admin`, signupDataBand)
    const token = response.data.token
    localStorage.setItem("token", token)
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o cadastro, tente novamente.")
  }
}

export const login = (loginData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, loginData)
    const token = response.data.token
    localStorage.setItem("token", token)
  } catch (err) {
    console.error(err.message)
    window.alert("Não foi possivel realizar o Login do usuário, cheque as credenciais e tente novamente.")
  }
}