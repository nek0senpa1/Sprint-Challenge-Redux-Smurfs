import { ADD_SMURF_START, ADD_SMURF_FAILURE, ADD_SMURF_SUCCESS, MORE } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/


 const initialSmurfs =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


 const reducer = ( state = initialSmurfs, action) => {
  switch (action.type) {
    case ADD_SMURF_START:
    return{
      ...state,
      fetchingSmurfs: true
    }
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }
    case ADD_SMURF_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false
    }
    

    default:
    return state;

  }


 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.import { ADD_SMURF_SUCCESS } from './../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;