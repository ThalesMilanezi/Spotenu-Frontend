import React from 'react'
import useForm from '../../Hooks/CustomForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BoxWrapper, FormWrapper } from '../SignUpListener/style'
import { signupListener } from '../../actions/user'
import { useDispatch } from 'react-redux'


const SignUpListener = () => {

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: ""
  })


  const dispatch = useDispatch()

  const onClickSignup = () => {
    const signupDataListener = {
      name: form.name,
      email: form.email,
      nickname: form.nickname,
      password: form.password
    }
    dispatch(signupListener(signupDataListener))
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    onClickSignup()
  }



  return (
    <BoxWrapper>
      <FormWrapper onSubmit={handleSubmitForm}>
        <TextField
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

        <TextField
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

        <TextField
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
        <TextField
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
        <Button color='primary' variant="contained" type="submit">Inscreva-se</Button>
        <Button onClick={resetForm} color="secondary">Limpar Campos</Button>
      </FormWrapper>
    </BoxWrapper>
  )
}

export default SignUpListener