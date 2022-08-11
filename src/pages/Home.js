import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord, loadRecords } from '../redux/actions';
import { useNavigate } from "react-router-dom";

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
  root: {
    width: '90%',
    maxWidth: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '2rem',
  },
});

const usePaginatinStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1rem'
  },
});

const useCardStyles = makeStyles({
  root: {
    width: '300px',
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

const Home = () => {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  const cardStyles = useCardStyles();
  const paginationStyles = usePaginatinStyles();

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { records } = useSelector(state => state.data)

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadRecords(page));
  }, [page]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure wanted to delete the record?")) {
      dispatch(deleteRecord(id))
    }
  }

  return (
    <>
      <Box className={classes.root}>
              {records && records.map((record) => (
                <Card className={cardStyles.root} key={record.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={record.title}
                    height="180"
                    image={record.image}
                    title={record.title}
                  />
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      onClick={() => navigate(`/singlePage/${record.id}`)}
                    >
                      {record.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent: "space-between"}}>
                  <Button 
                  size="small"
                  variant="contained"
                  onClick={() => navigate(`/singlePage/${record.id}`)}
                  >
                    Read More
                  </Button>
                  <ButtonGroup
                  variant="contained" 
                  aria-label="outlined secondary button group">
                    <Button 
                    size="small" 
                    color="primary"
                    variant="contained"
                    onClick={() => navigate(`/editUser/${record.id}`)}
                    >
                      <EditIcon />
                    </Button>
                    <Button 
                    size="small" 
                    color="secondary"
                    variant="contained"
                    onClick={() => handleDelete(record.id)}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
            ))}
      </Box>
      <div className={paginationStyles.root}>
        <Pagination 
        count={3}
        color="secondary"
        defaultPage={page}
        onChange={ (event, value) => setPage(value) }
        />
      </div>
    </>
  )
}

export default Home