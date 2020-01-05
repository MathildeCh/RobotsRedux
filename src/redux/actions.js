import {CHANGE_SEARCH_FIELD,
        FETCH_ROBOTS_SUCCESS,
        FETCH_ROBOTS_ERROR,
      } from './constants';


export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const fetchRobots = () => async(dispatch) =>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch({type:FETCH_ROBOTS_SUCCESS,robots:data })
  }
  catch(err){
    dispatch({type:FETCH_ROBOTS_ERROR,robots:[]})
  }
}
