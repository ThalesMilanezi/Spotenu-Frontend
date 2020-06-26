import React, { useEffect, useState } from 'react'
import useList from '../../Hooks/CustomLists'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import CheckIcon from '@material-ui/icons/Check';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import * as S from "./style"
import Footer from '../../components/Footer/Footer';
import AppBarApproveBand from '../../components/AppBarApprove/AppBarApproveBand';

const BandApprove = () => {
  const { list, onChange } = useList([])

  useEffect(() => {

  }, [])


  return (
    <>
    <AppBarApproveBand/>
      <S.BoxWrapper>
        <Paper elevation={3}>
          {list.map((item) => {
            return (
              <List>
                <ListItemText>{list.item}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton label="approved">
                    <CheckIcon />
                  </IconButton>
                  <IconButton label="delete">
                    <DeleteForeverRoundedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
            )
          })}
        </Paper>
      </S.BoxWrapper>
      <Footer/>
    </>
  )
}

export default BandApprove



