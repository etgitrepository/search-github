import { SEARCH_USER_RROR, SEARCH_USER_SUCCESS } from './reducer';

export function searchUser(username) {
  return async dispatch => {
    fetch('https://api.github.com/users/' + username)
      .then(response => {
        if (response.status !== 200) {
          throw Error('HTTP Error');
        }
        return response.json();
      })
      .then(data => dispatch({ type: SEARCH_USER_SUCCESS, payload: data }))
      .catch(() => dispatch({ type: SEARCH_USER_RROR }));
  };
}
