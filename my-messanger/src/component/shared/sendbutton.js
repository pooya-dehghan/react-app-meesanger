import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: ' cornflowerblue',
        display : 'flex' ,
        
        
    }
}));

export default function SendButton() {
    const classes = useStyles();

    return (
    <Fab color="primary" aria-label="add" className ={classes.root} dispaly = "flex">
        <AddIcon fontSize = "small" />
    </Fab>
    )
}