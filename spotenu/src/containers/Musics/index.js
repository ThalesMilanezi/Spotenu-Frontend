import React, { useState, useEffect } from 'react'
import * as S from './style'
import { Grid, Paper, Typography, List, ListItem, ListItemText, Select, MenuItem } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import useForm from '../../Hooks/CustomForm'
import { connect } from 'react-redux'

const MusicPage = (props) => {
  const { form, onChange, resetForm } = useForm({
    name: ""
  })

  const [music, setMusic] = useState({
    name: ""
  })

  useEffect(() => {
  }, [music])


  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <HomeHeader />
      <S.MainWrapper>
        <div>
          <Grid item xs={12}>
            <Paper>
              <Typography variant="h5">
                Criar uma nova Musica
          </Typography>
              <S.FormWrapper onSubmit={handleSubmitForm}>
                <S.InputWrapper
                  value={form.name}
                  name="Musica"
                  title="Nome da nova música"
                  type="text"
                  placeholder="Nova Musica"
                  onChange={inputChange}
                  variant="outlined"
                  label="musica"
                  required
                />
                <Select
                  // value={Music}
                  onChange={inputChange}
                >
                  <MenuItem value={10}>Musica 1</MenuItem>
                  <MenuItem value={20}>Musica 2</MenuItem>
                  <MenuItem value={30}>Musica 3</MenuItem>
                </Select>
                <S.ButtonStyled color='primary' variant="contained" type="submit">Criar</S.ButtonStyled>
              </S.FormWrapper>
            </Paper>
          </Grid>
        </div>
        <div>
          <Grid item xs={8}>
            <Paper >
              <Typography variant="h5">
                Todos as Musicas
          </Typography>
              <List>

              </List>
            </Paper>
          </Grid>
        </div>
      </S.MainWrapper>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage)