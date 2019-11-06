
// export function startAddingPost(post) {
//     return (dispatch) => {
//         return database.ref('posts').update({ [post.id]: post }).then(() => {
//             dispatch(addPhoto(post))
//         });
//     }
// }

// export function startLoadingPost() {
//     return (dispatch) => {
//         return database.ref('posts').once('value').then((rows) => {
//             var posts = [];
//             rows.forEach((row)=>{
//                 posts.push(row.val());
//             })
//             dispatch(loadPosts(posts))
//         });
//     }
// }

// export function startRemovePost(index, id) {
//     return (dispatch) => {
//         return database.ref(`posts/${id}`).remove().then(() => {
//             dispatch(removePost(index))
//         });
//     }
// }

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPhoto(post){
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
        
    }
}