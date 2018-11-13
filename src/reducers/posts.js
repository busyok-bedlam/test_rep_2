import { handleActions } from 'redux-actions'
import { append } from 'ramda'

import * as postActions from '../actions/posts';
const initialPosts = [];

const postsReducer = handleActions({
  [postActions.setPosts]: (state, { payload }) => [...state, ... payload],
  [postActions.addPost]: (state, { payload: post }) => [...state,post],
  [postActions.deletePost]: (state, { payload: id }) => [...state.filter( post => post.id !== id )],
  [postActions.updatePost]: (state,{ payload: updatedPost}) => [
    ...state.map(post => post.id === updatedPost.id ? updatedPost : post)
  ]
},initialPosts)

export default postsReducer;
