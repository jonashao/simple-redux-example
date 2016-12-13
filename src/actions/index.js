import {FETCH_POST} from "../constants/actionTypes";

const FetchPostAction = { type: FETCH_POST };

export function fetchPost() {
    return dispatch => {
        console.log('fetching data');
        setTimeout(() => dispatch(FetchPostAction), 1000)
    }
}