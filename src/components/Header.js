import React from 'react';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useNavStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0,
    },
  }));

const Header = () => {
    const navStyles = useNavStyles();

    let navigate = useNavigate();

  return (
    <div className={navStyles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={navStyles.title}>
            MKamran
          </Typography>
            <Button 
            color="inherit"
            onClick={ () => navigate("/")}
            >
                Home
            </Button>
          <Button 
          color="inherit"
          onClick={ () => navigate("/aboutUs")}
          >
            About-US
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header