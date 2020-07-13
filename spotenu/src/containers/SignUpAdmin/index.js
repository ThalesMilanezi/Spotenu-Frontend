import React from 'react'
import useForm from '../../Hooks/CustomForm'
import { useDispatch } from 'react-redux'
import { signupAdmin } from '../../actions/user'
import * as S from './style'
import Footer from '../../components/Footer/Footer'
import AppBarSignupComponent from '../../components/AppBarSignup/AppBarSignup'
import { useHistory } from 'react-router-dom'



const SignUpAdmin = () => {

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: ""
  })

  const history = useHistory()
  const dispatch = useDispatch()


  const signupadmin = () => {
    const signupDataAdmin = {
      email: form.email,
      name: form.name,
      nickname: form.nickname,
      password: form.password
    }
    dispatch(signupAdmin(signupDataAdmin, history))
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    signupadmin()
  }


    return (
      <>
        <AppBarSignupComponent />
        <S.BoxWrapper>
          <S.Text>
            Bem vindos, Administradores.
        </S.Text>
          <S.FormWrapper onSubmit={handleSubmitForm}>
            <S.InputWrapper
              value={form.name}
              name="name"
              title="Nome Completo com mínimo de 3 letras"
              type="text"
              placeholder="Nome Completo"
              onChange={inputChange}
              variant="outlined"
              label="NOME"
              required
            />

            <S.InputWrapper
              value={form.email}
              name="email"
              title="E-mail válido"
              type="email"
              placeholder="Email"
              onChange={inputChange}
              variant="outlined"
              label="EMAIL"
              required
            />

            <S.InputWrapper
              value={form.nickname}
              name="nickname"
              title="nickname para realizar o login"
              type="text"
              placeholder="Nickname"
              onChange={inputChange}
              variant="outlined"
              label="NICKNAME"
              required
            />
            <S.InputWrapper
              value={form.password}
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
            <S.ButtonStyled color='primary' variant="contained" type='submit'>Inscreva-se</S.ButtonStyled>
            <S.ButtonStyled onClick={resetForm} color="secondary">Limpar Campos</S.ButtonStyled>
          </S.FormWrapper>
        </S.BoxWrapper>
        <Footer />
      </>
    )
  }

  export default SignUpAdmin