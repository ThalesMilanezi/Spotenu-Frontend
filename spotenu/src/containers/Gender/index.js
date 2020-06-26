import React from 'react'
import * as S from './style'
import { Grid, Paper, Typography } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import useForm from '../../Hooks/CustomForm'
import { useDispatch } from 'react-redux'

const GenderPage = () => {
  const { form, onChange, resetForm } = useForm({
    name: ""
  })

  const dispatch = useDispatch()

  const createNewGender = () => {
    const genderData = {
      name: form.name
    }
    // dispatch(createGender(genderData))
  }

  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    createNewGender()
  }
  return(
    <>
    <HomeHeader/>
    <S.MainWrapper>
      <Grid item xs={3}>
        <Paper>
        <Typography variant="h1">
            Criar um novo genero musical
          </Typography>
          <S.FormWrapper onSubmit={handleSubmitForm}>
          <S.InputWrapper
            value={form.name}
            name="Gênero"
            title="Nome do novo genero"
            type="text"
            placeholder="Novo Genero"
            onChange={inputChange}
            variant="outlined"
            label="genero"
            required
          />
          <S.ButtonStyled color='primary' variant="contained" type="submit">Criar</S.ButtonStyled>
        </S.FormWrapper>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper >
          <Typography variant="h1">
            Todos os Generos
          </Typography>
          </Paper>
      </Grid>
    </S.MainWrapper>
    <Footer/>
    </>
  )
}

export default GenderPage