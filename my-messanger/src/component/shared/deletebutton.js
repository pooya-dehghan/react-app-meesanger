import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: '#11cb5f' }, 
  },
});
export default function DeleteButton() {
  const classes = useStyles();
  return(

  <div>
 <IconButton aria-label="delete" className={classes.margin}>
  <ThemeProvider theme={theme}>
   <DeleteIcon fontSize = "small"  color= 'primary'/>
  </ThemeProvider>       
</IconButton>
</div>
  );
}