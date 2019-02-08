import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const NEW_SMURF_START = 'NEW_SMURF_START';
export const NEW_SMURF_SUCCESS = 'NEW_SMURF_SUCCESS';
export const NEW_SMURF_FAILURE = 'NEW_SMURF_FAILURE';

// ya know... we don't REALLY have to do this... like we could just push the string around...
// but I guess this keeps us 'same' everywhere... sort of...

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({
    type: ADD_SMURF_START
  });
  axios
  .get ('http://localhost:3333/smurfs')
  
  // .then (res => dispatch ({
  //   type: ADD_SMURF_SUCCESS, payload: res.data
  // }))

  .then(res => setTimeout(() => {dispatch({
    type: ADD_SMURF_SUCCESS, payload: res.data 
   })}, 
   4200))

  .catch (err => dispatch ({
    type: ADD_SMURF_FAILURE, payload: err.data
  }))
};

export const moreSmurfs = smurf => dispatch => {
  dispatch({
    type: NEW_SMURF_START
  });
  axios
  .post('http://localhost:3333/smurfs', smurf)
  
  .then (res => dispatch ({
    type: NEW_SMURF_SUCCESS, payload: res.data
  }))

  
  .catch (err => dispatch ({
    type: NEW_SMURF_FAILURE, payload: err.data
  }))
};
