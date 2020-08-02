import { fetchWithCredentials } from '../concerns/fetchable'

const checkLoggedInStatus = () => {
  return dispatch => {
    dispatch({type: 'LOADING_CURRENT_USER'})
    fetchWithCredentials('https://nibbl.live/api/v1/logged_in')
    .then(json => {
      if (json.logged_in) {
        dispatch({type: 'LOGIN_USER', user: json.user})
      } else {
        dispatch({type: 'LOGOUT_USER'})
      }
    })
  }
}

const loginUser = user => {
  return {type: 'LOGIN_USER', user}
}

const logoutUser = () => {
  return {type: 'LOGOUT_USER'}
}

export {
  checkLoggedInStatus,
  loginUser,
  logoutUser
}