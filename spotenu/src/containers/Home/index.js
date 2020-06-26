import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import * as S from './style'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Footer from '../../components/Footer/Footer'
import { Typography } from '@material-ui/core'

const HomePage = () => {
  return (
    <>
    <HomeHeader/>
    <S.MainWrapper>
      <Grid item xs={3}>
        <Paper >
          <Typography variant="h1">
            Menu
          </Typography>
          </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
        <Typography variant="h1">
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