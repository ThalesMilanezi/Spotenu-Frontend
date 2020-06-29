import React from 'react'
import useForm from '../../Hooks/CustomForm'
import * as S from './style'
import AppBarSignupComponent from '../../components/AppBarSignup/AppBarSignup'
import Footer from '../../components/Footer/Footer'
import { useHistory } from 'react-router-dom'

const SignUpBand = () => {

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    descricao:"",
    password: ""
  })

  const history = useHistory()

  const goToHome = () => {
    history.push("/home")
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }



  return (
    <>
    <AppBarSignupComponent/>
    <S.BoxWrapper>
      <S.Text>
          Olá querid@s músic@s, Bora se cadastrar?
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
          value={form.descricao}
          name="descricao"
          title="Descrição com no max 200 caracteres"
          type="text"
          placeholder="Descrição"
          onChange={inputChange}
          variant="outlined"
          label="DESCRIÇÃO"
          required
        />

        <S.InputWrapper
          value={form.password}
          name="password"
          title="Password com mínimo de 6 caracteres"
          type="password"
          placeholder="Senha"
          onChange={inputChange}
          variant="outlined"
          id="outlined-password-input"
          label="SENHA"
          required
          pattern="{6,}"
        />
        <S.ButtonStyled color='primary' variant="contained" type='submit' onClick={goToHome}>Inscreva-se</S.ButtonStyled>
        <S.ButtonStyled onClick={resetForm} color="secondary">Limpar Campos</S.ButtonStyled>
      </S.FormWrapper>
    </S.BoxWrapper>
    <Footer/>
    </>
  )
}

export default SignUpBand