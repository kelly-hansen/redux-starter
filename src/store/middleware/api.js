import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    await axios.request({
      //test success/failure by changing port
      baseURL: 'http://localhost:9002/api',
      url,
      method,
      data
    });
    // General
    dispatch(actions.apiCallSuccess(Response.data));
    // Specific
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: Response.data });
    }
  } catch(error) {
    // General
    dispatch(actions.apiCallFailed(error));
    // Specific
    if (onError) {
      dispatch({ type: onError, payload: error });
    }
  }

};

export default api;
