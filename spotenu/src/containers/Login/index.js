import React, { useState } from 'react'
import * as S from './style'
import AppBarComponent from '../../components/AppBarLogin'
import { useDispatch } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import {login} from "../../actions/user" 
import { useHistory } from 'react-router-dom'

const Login = (props) => {

  const [usersInfo, setUsersInfo] = useState({
    emailOrNickname:"",
    password:''
  })

  const history = useHistory()
  const dispatch = useDispatch()

  const inputChange = (event) => {
    const { name, value } = event.target
    setUsersInfo({...usersInfo, [name]:value})
  }

  const handleLogin = (event) => {
    const loginData = {
      emailOrNickname: usersInfo.emailOrNickname,
      password: usersInfo.password
    }
    dispatch(login(loginData, history))
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
    handleLogin()
  }

const logo = <img src={require('../../assets/logoFinalAzul.jpg')} alt='Logo'/>

  return (
    <>
    <AppBarComponent/>
    <S.BoxWrapper>
      <S.LogoWrapper>
        {logo}
      </S.LogoWrapper>
      <S.FormWrapper onSubmit={handleSubmitLogin}>
        <S.InputWrapper
          value={usersInfo.emailOrNickname}
          name="emailOrNickname"
          title="E-mail válido"
          type="email"
          placeholder="Email"
          onChange={inputChange}
          variant="outlined"
          label="EMAIL"
          required
        />

        {/* <S.InputWrapper
          value={usersInfo.nickname}
          name="nickname"
          title="nickname para realizar o login"
          type="text"
          placeholder="Nickname"
          onChange={inputChange}
          variant="outlined"
          label="NICKNAME"
          required
        /> */}
        <S.InputWrapper
          value={usersInfo.password}
          name="password"
          title="Password com mínimo de 10 caracteres"
          type="password"
          placeholder="Senha"
          onChange={inputChange}
          variant="outlined"
          id="outlined-password-input"
          label="SENHA"
          required
          pattern="{10,}"
        />
        <S.ButtonStyled color='primary' variant="contained" type="onSubmit">Entrar</S.ButtonStyled>
        {/* <Button  color="secondary">Limpar Campos</Button> */}
      </S.FormWrapper>
    </S.BoxWrapper>
    <Footer/>
  </>
  )
}

export default Login