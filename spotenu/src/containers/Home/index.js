import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import * as S from './style'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const HomePage = () => {

  const history = useHistory()

  const goToAlbumPage = () => {
    history.push("/album")
  }
  const goToMusicPage = () => {
    history.push("/music")
  }
  const goToGenderPage = () => {
    history.push("/gender")
  }

  return (
    <>
    <HomeHeader/>
    <S.MainWrapper>
      <S.GridWrapper item xs={12}>
        <S.PaperWrapper >
          <Typography variant="h5">
            Menu
          </Typography>
          <Button onClick={goToAlbumPage} color='secondary' variant='contained'>Albuns</Button>
          <Button onClick={goToMusicPage} color='secondary' variant='contained'>Musicas</Button>
          <Button onClick={goToGenderPage} color='secondary' variant='contained'>Generos Musicais</Button>
          </S.PaperWrapper>
      </S.GridWrapper>
      <Grid item xs={6}>
        <Paper>
        <Typography variant="h5">
            Content
          </Typography>
        </Paper>
      </Grid>
    </S.MainWrapper>
    <Footer/>
    </>
  )
}

export default HomePage