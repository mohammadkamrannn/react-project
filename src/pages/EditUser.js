import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRecord, updateRecord } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));

const EditUser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        title: ""
    });

    const [error, setError] = useState("");

    let {id} = useParams();
    const {record} = useSelector((state) => state.data)

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const { title } = state;

    useEffect(() => {
        dispatch(getSingleRecord(id));
    }, []);

    useEffect(() => {
        if (record) {
            setState({ ...record });
        }
    }, [record]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            setError("The input is empty!");
        } else {
            dispatch(updateRecord(state, id));
            navigate(`/singlePage/${record.id}`);
            setError("");
        }
    };
  return (
    <div>
        <h2>Edit Content</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form 
        className={classes.root} 
        noValidate 
        autoComplete="off" 
        onSubmit={handleSubmit}
        >
            <TextField 
            id="standard-basic" 
            label="Title" 
            name="title" 
            value={title || ""} 
            type="text" 
            onChange={handleInputChange} 
            />
            <br />
            <Button 
            style={{width: "100px"}}
            size="small"
            variant="contained"
            onClick={() => navigate('/')}
            >
                Home
            </Button>
            <Button
            style={{width: "100px"}}
            variant='contained' 
            color="primary" 
            type='submit'
            onChange={handleInputChange}
            >
                Update
            </Button>
        </form>
    </div>
  )
}

export default EditUser