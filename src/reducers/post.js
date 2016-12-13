import {FETCH_POST} from "../constants/actionTypes";

const initialState = {text: 'initial post'};

function posts(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return Object.assign({}, {text: 'Hello! I am fetched.'});
        default:
            return state;
    }
}

export default posts;