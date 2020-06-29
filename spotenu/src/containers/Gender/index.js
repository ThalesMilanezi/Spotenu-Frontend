import React, { useState, useEffect } from 'react'
import * as S from './style'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import useForm from '../../Hooks/CustomForm'
import { useDispatch, connect } from 'react-redux'
import { createGender, getAllGenders } from '../../actions/gender'

const GenderPage = (props) => {
  const { form, onChange, resetForm } = useForm({
    name: ""
  })

  const [gender, setGender] = useState({
    name: ""
  })

  useEffect((props) => {
    // getGenders()
  }, [gender])


  const inputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    props.createGender(gender)
  }
  return (
    <>
      <HomeHeader />
      <S.MainWrapper>
        <div>
          <Grid item xs={12}>
            <Paper>
              <Typography variant="h5">
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
        </div>
        <div>
          <Grid item xs={8}>
            <Paper >
              <Typography variant="h5">
                Todos os Generos
          </Typography>
              <List>
                {/* {getAllGenders.map((listgender) =>
                  <ListItem>
                    {listgender}
                  </ListItem>,
                )} */}
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
    allGender: state.gender.Allgenders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGender: (genderData) => dispatch(createGender(genderData)),
    getGenders: () => dispatch(getAllGenders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderPage)