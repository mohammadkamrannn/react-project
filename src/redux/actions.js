import * as types from "./actionType";
import axios from "axios";

// const { data } = urlApi('https://api.jsonbin.io/v3/b/62b2f1d4449a1f382115026d/record');

const getRecords = (records) => ({
    type: types.GET_RECORDS,
    payload: records,
});

const recordDeleted = () => ({
    type: types.DELETE_RECORD,
});

const recordUpdated = () => ({
    type: types.UPDATE_RECORD,
});

const getRecord = (record) => ({
    type: types.GET_SINGLE_RECORD,
    payload: record,
});

export const loadRecords = (page) => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}?_page=${page}&_limit=8`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(getRecords(resp.data));
        })
        .catch((error) => console.log(error));
    };
};
export const deleteRecord = (id) => {
    return function (dispatch) {
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(recordDeleted());
            dispatch(loadRecords());
        })
        .catch((error) => console.log(error));
    };
};
export const getSingleRecord = (id) => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(getRecord(resp.data));
        })
        .catch((error) => console.log(error));
    };
};
export const updateRecord = (record, id) => {
    return function (dispatch) {
        axios
        .put(`${process.env.REACT_APP_API}/${id}`, record)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(recordUpdated());
        })
        .catch((error) => console.log(error));
    };
};