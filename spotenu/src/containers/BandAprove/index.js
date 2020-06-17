import React, { useEffect, useState } from 'react'
import useList from '../../Hooks/CustomLists'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const BandApprove = () => {
  const { list, onChange } = useList([])

  useEffect(() => {

  }, [])


  return (
    <div>
      {list.map((item) => {
        return (
          <List>
            <ListItemText>{list.item}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton label="delete">
                <DeleteForeverRoundedIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </List>
        )
      })}
    </div>
  )
}

export default BandApprove



