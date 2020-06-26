import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import * as S from './style'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom'

const HomeHeader = () => {
  const [name, setName] = useState()

  let history = useHistory();

  function goHome() {
    history.push("/home");
  }
  function goLogin() {
    history.push("/");
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
      <S.ToolbarWrapper>
        <IconButton onClick={handleClick} size="medium" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={goHome}>Voltar para Home</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Typography variant="h3" >
        Bem vindo, {name}
    </Typography>
        <Button color="inherit" onClick={goLogin} >Logout</Button>
      </S.ToolbarWrapper>
    </AppBar>
  )
}

export default HomeHeader