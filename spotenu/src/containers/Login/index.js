import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BoxWrapper, FormWrapper } from '../SignUpListener/style'


const Login = () => {

  const [usersInfo, setUsersInfo] = useState({
    email:"",
    nickname:"",
    senha:''
  })

  const inputChange = (event) => {
    const { name, value } = event.target
    setUsersInfo({...usersInfo, [name]:value})
  }

  const handleSubmitLogin = (event) => {
    event.preventDefault()
  }



  return (
    <BoxWrapper>
      <FormWrapper onSubmit={handleSubmitLogin}>
        
        <TextField
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

        <TextField
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
        <TextField
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
      </FormWrapper>
    </BoxWrapper>
  )
}

export default Login