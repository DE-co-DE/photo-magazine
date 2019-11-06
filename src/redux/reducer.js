
import _posts from '../data/posts';
import { combineReducers } from 'redux';

let localdata=localStorage.getItem('posts')
let posts_all=_posts
//console.log(localdata)
if(localdata!==null){
  posts_all=  JSON.parse(localdata)
}
export function comments(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return { ...state, [action.postId]: [action.comment] }
            } else {
                return { ...state, [action.postId]: [...state[action.postId], action.comment] }
            }
        default: return state;
    }
}
export function posts(state = posts_all, action) {
    console.log("post reducer");

    switch (action.type) {
        case 'REMOVE_POST': {
            let states= [...state.slice(0, action.index), ...state.slice(action.index + 1)]
              localStorage.setItem('posts', JSON.stringify(states));
                return states
        }
        case 'ADD_POST': {
            let states= [...state, action.post]
              localStorage.setItem('posts', JSON.stringify(states));
                return states
             }
        case 'LOAD_POSTS': return action.posts
        default: return state;
    }
      localStorage.setItem('posts', ...state);

}

//const rootReducer = combineReducers({ comments, posts })

//export default rootReducer;