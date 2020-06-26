import React from 'react'
import * as S from './styled'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <S.AppBarWrapper position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HomeIcon />
        </IconButton>
        <Typography >
          Thales Fernando Milanezi
          </Typography>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <EmailIcon />
        </IconButton>
      </Toolbar>
    </S.AppBarWrapper>
  )
}

export default Footer