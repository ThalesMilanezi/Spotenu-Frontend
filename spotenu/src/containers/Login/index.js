import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as S from './style'
import Typography from '@material-ui/core/Typography'


const Login = () => {

  const [usersInfo, setUsersInfo] = useState({
    email: "",
    nickname: "",
    senha: ''
  })

  const inputChange = (event) => {
    const { name, value } = event.target
    setUsersInfo({ ...usersInfo, [name]: value })
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
  }



  return (
    <div>
        <S.FormWrapper onSubmit={handleSubmitLogin}>
          <Typography variant="h1" component="h2" gutterBottom>Login</Typography>
          <S.TextFieldWrapper
            value={usersInfo.email}
            name="email"
            title="E-mail válido"
            type="email"
            placeholder="Email"
            onChange={inputChange}
            variant="outlined"
            label="EMAIL"
            required
          />

          <S.TextFieldWrapper
            value={usersInfo.nickname}
            name="nickname"
            title="nickname para realizar o login"
            type="text"
            placeholder="Nickname"
            onChange={inputChange}
            variant="outlined"
            label="NICKNAME"
            required
          />
          <S.TextFieldWrapper
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
          <Button color='primary' variant="contained">Entrar</Button>
          {/* <Button  color="secondary">Limpar Campos</Button> */}
        </S.FormWrapper>
        </div>
  )
}

export default Login