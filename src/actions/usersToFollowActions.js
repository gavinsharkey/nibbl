import { fetchWithCredentials } from '../concerns/fetchable'

const fetchUsersToFollow = () => {
  return dispatch => {
    fetchWithCredentials('https://nibbl.live/api/v1/users/to_follow')
    .then(json => {
      dispatch({type: 'SET_USERS_TO_FOLLOW', users: json})
    })
  }
}

const followUser = userId => {
  return dispatch => {
    dispatch({type: 'LOADING_FOLLOW'})
    fetchWithCredentials('https://nibbl.live/api/v1/follows', 'POST', { 
      follow: { followed_user_id: userId } 
    })
    .then(json => {
      if (!json.errors) {
        dispatch({type: 'FOLLOW_USER', follow: json})
      }
    })
  }
}

const unfollowUser = followId => {
  return dispatch => {
    dispatch({type: 'LOADING_FOLLOW'})
    fetchWithCredentials(`https://nibbl.live/api/v1/follows/${followId}`, 'DELETE')
    .then(json => {
      dispatch({type: 'UNFOLLOW_USER', id: json.id})
    })
  }
}

export {
  fetchUsersToFollow,
  followUser,
  unfollowUser
}