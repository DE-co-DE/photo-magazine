import _posts from "../data/posts";
import { combineReducers } from "redux";

let localdata = localStorage.getItem("posts");
let localcomments = localStorage.getItem("comments");

let posts_all = _posts;
let comments_all = {};

if (localdata !== null) {
    posts_all = JSON.parse(localdata);
}

if (localcomments !== null) {
    comments_all = JSON.parse(localcomments);
}
function comments(state = comments_all, action) {
    switch (action.type) {
        case "ADD_COMMENT": {
            let states = {};
            if (!state[action.postId]) {
                states = { ...state, [action.postId]: [action.comment] };
            } else {
                states = {
                    ...state,
                    [action.postId]: [...state[action.postId], action.comment]
                };
            }
            localStorage.setItem("comments", JSON.stringify(states));
            return states;
        }
        default:
            return state;
    }
}
function posts(state = posts_all, action) {
    console.log("post reducer");

    switch (action.type) {
        case "REMOVE_POST": {
            let states = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            localStorage.setItem("posts", JSON.stringify(states));
            return states;
        }
        case "ADD_POST": {
            let states = [...state, action.post];
            localStorage.setItem("posts", JSON.stringify(states));
            return states;
        }

        default:
            return state;
    }
}

const rootReducer = combineReducers({ comments, posts });

export default rootReducer;
