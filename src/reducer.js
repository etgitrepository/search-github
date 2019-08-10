export const SEARCH_USER_RROR = 'SEARCH_USER_RROR';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';

const initialState = {
  userInfo: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return { ...state, userInfo: action.payload };
    case SEARCH_USER_RROR:
      return { ...state };
    default:
      return { ...state };
  }
}
