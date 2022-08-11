import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRecord } from '../redux/actions';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '90%',
    maxWidth: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '2rem'
  },
});

const useCardStyles = makeStyles({
  root: {
    width: 500,
    maxWidth: 'auto',
    margin: 5
  },
});

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SinglePage = () => {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  const cardStyles = useCardStyles();

  let {id} = useParams();
  let dispatch = useDispatch();

  let navigate = useNavigate();
  const { record } = useSelector(state => state.data);
  
    useEffect(() => {
    dispatch(getSingleRecord(id));
    }, []);



  return (
    <div className={classes.root}>
              <Card className={cardStyles.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={record.title}
                  height="280"
                  image={record.image}
                  title={record.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {record.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                size="small"
                variant="contained"
                onClick={() => navigate('/')}
                >
                  Home
                </Button>
              </CardActions>
            </Card>
    </div>
  )
}

export default SinglePage;