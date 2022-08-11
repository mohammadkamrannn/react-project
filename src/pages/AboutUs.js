import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";


import myImage from '../images/mk.jpg';

const useStyles = makeStyles({
  root: {
    width: '90%',
    maxWidth: 'auto',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-start',
    padding: '2rem'
  },
  image: {
    width: 250,
    height: "auto",
    borderRadius: "5px",
    marginRight: "2rem"
  }
});

const AboutUs = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
        <div className={classes.root}>
          <img className={classes.image} alt="Mohammad Kamran" src={myImage} />
          <div style={{textAlign: "left"}}>
              <Typography variant="h3" gutterBottom>
                  Mohammad Kamran
              </Typography>
              <Typography variant="subtitle1" style={{marginBottom: "2rem"}} gutterBottom>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, fugiat sint quis libero debitis optio quisquam amet ea nihil illo, labore ipsum iusto asperiores. Tenetur quos reprehenderit molestias assumenda aut!
              </Typography>
            <Button 
            size="small"
            variant="contained"
            onClick={() => navigate('/')}
            >
              Home
            </Button>
          </div>
        </div>
    </>
  )
}

export default AboutUs