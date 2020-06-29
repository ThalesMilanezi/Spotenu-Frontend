import React, { useState, useEffect } from 'react'
import * as S from './style'
import { Grid, Paper, Typography, List } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import useForm from '../../Hooks/CustomForm'
import { useDispatch } from 'react-redux'

const AlbunsPage = () => {

  const { form, onChange, resetForm } = useForm({
    name: ""
  })

  const [album, setAlbum] = useState({
    name: ""
  })

  useEffect(() => {
  }, [album])

  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }
  return(
       <>
    <HomeHeader/>
    <S.MainWrapper>
      <div>
      <Grid item xs={12}>
        <Paper>
        <Typography variant="h5">
            Criar um novo Album musical
          </Typography>
          <S.FormWrapper onSubmit={handleSubmitForm}>
          <S.InputWrapper
            value={form.name}
            name="Album"
            title="Nome do novo Album"
            type="text"
            placeholder="Novo Album"
            onChange={inputChange}
            variant="outlined"
            label="Album"
            required
          />
          <S.ButtonStyled color='primary' variant="contained" type="submit">Criar</S.ButtonStyled>
        </S.FormWrapper>
        </Paper>
        </Grid>
        </div>
        <div>
          <Grid item xs={5}>
            <Paper >
              <Typography variant="h5">
                Todos os Albuns
          </Typography>
              <List>
               
              </List>
            </Paper>
          </Grid>
          </div>
    </S.MainWrapper>
    <Footer/>
    </>
  )
}

export default AlbunsPage