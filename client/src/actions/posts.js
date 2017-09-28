import axios from 'axios';

export const addPost= (post) => {
  return(dispatch) => {
    axios.post('/api/posts', {post})
      .then( res => {
        dispatch({ type: 'ADD_POST', post })
      })
      .catch( err => {
        console.log(err);
      })
  }
}