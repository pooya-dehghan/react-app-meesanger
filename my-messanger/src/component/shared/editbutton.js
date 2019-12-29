import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor: 'rgb(162, 102, 173)',
        padding: '0px'
    }
}));

export default function EditButton() {
    const classes = useStyles();

    return (
        <Fab  aria-label="edit" className={classes.root}>
        <EditIcon fontSize = "small" />
      </Fab>
    )
}