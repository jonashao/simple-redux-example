import {FETCH_POST} from "../constants/actionTypes";

const FetchPostAction = {
    type: FETCH_POST
};

export function fetchPost() {
    return dispatch => {
        setTimeout(() => dispatch(FetchPostAction), 1000)
    }
}