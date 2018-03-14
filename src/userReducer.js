import { userConstants } from "./userConstants";
import { persistentReducer } from "redux-pouchdb";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LIST_PROCESSING:
      return {
        ...state,
        isProcessing: action.isProcessing
      };
    case userConstants.USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.data
      };
    case userConstants.USER_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.USER_CREATE_PROCESSING:
      return {
        ...state,
        isProcessing: action.isProcessing
      };
    case userConstants.USER_CREATE_SUCCESS:
      console.log(state);
      if (state.users) {
        return {
          users: [...state.users, action.user]
        };
      } else {
        return {
          users: [action.user]
        };
      }

    default:
      return state;
  }
};
export default persistentReducer(userReducer, "user");
