import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import * as S from './style'
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const AppBarSignupComponent = () => {

  let history = useHistory();

  function logout() {
    localStorage.clear()
    history.push("/")
  }

  function goHomePage() {
    history.push("/");
  }
  function goUsuarioFree() {
    history.push("/signup/listener");
  }
  function goBandSignup() {
    history.push("/signup/band");
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
          <MenuItem onClick={goUsuarioFree}>Usuário FREE</MenuItem>
          <MenuItem onClick={goBandSignup}>Band</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
        <Typography variant="h3" >
          SIGN UP
    </Typography>
        <Button color="inherit" onClick={goHomePage} >Login</Button>
      </S.ToolbarWrapper>
    </AppBar>
  )
}

export default AppBarSignupComponent