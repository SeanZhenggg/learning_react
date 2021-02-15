import jsonPlaceholder from '../api/jsonPlaceholder' 
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
      
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// FIX MULTIPLE SAME FETCH USER REQUESTS BY USING LODASH MEMOIZE FUNCTION
export const fetchUserByMemoize = function(id) { 
  
  return function(dispatch) {
    _memoizeFetchUser(id, dispatch)
  }
}

const _memoizeFetchUser = _.memoize(async function(id, dispatch) {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
})

// FIX MULTIPLE SAME FETCH USER REQUESTS BY USING FETCH POSTS AND USERS
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};
