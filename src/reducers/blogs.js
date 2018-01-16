import {FETCH_BLOGS} from "../actions";

const blogs = (state=[], action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            console.log(action);
            console.log((action.error) ? state : action.payload.data);
            return (action.error) ? state : action.payload.data;
        default:
            return state;
    }
};

export default blogs;