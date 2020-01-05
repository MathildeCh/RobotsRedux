import {CHANGE_SEARCH_FIELD} from './constants';


const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField : action.payload} //copying the object state(which is aqual to initialStateSearch) but changing the property searchFiled from empty strings to the text(=value of action.payload).
    default:
      return state
  }
}

const initialStateRobots = {
  robots:[]
}

export const getRobots = (state = initialStateRobots, action={}) => {
  switch (action.type) {
    case 'FETCH_ROBOTS_SUCCESS':
    // return object.assign({}, state, {searchField:action.payload})
      return{...state, robots: action.robots}
    default:
      return state
  }
}
