import * as types from "./actionType";
const initialStore = {
    records: [],
    record: {},
    loading: true
}

const recordRedusers = (state = initialStore, action) => {
    switch (action.type) {
        case types.GET_RECORDS:
            return {
                ...state,
                records: action.payload,
                loading: false
            }
        case types.DELETE_RECORD:
        case types.UPDATE_RECORD:
            return {
                ...state,
                loading: false
            };
        case types.GET_SINGLE_RECORD:
            return {
                ...state,
                record: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default recordRedusers;