import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      )
  };

  request = user => ({ type: userConstants.LOGIN_REQUEST, user });
  success = user => ({type: userConstants.LOGIN_SUCESSS, user });
  failure = error => ({ type: userConstants.LOGIN_FAILURE, error })
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successfull'))
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  request = user => ({ type: userConstants.REGISTER_REQUEST, user })
  success = user => ({ type: userConstants.REGISTER_SUCCESS, user })
  failure = error => ({ type: userConstants.REGISTER_FAILURE, error })
}


function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }

  request = () => ({ type: userConstants.GETALL_REQUEST });
  success = users => ({ type: userConstants.GETALL_SUCCESS, users });
  failure = error => ({ type: userConstants.GETALL_FAILURE, error });
}

function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        user => {
          dispatch(success(id));
        },
        error => dispatch(failure(id, error))
      )
  };

  request = id => ({ type: userConstants.DELETE_REQUEST, id });
  success = id => ({ type: userConstants.DELETE_SUCCESS, id });
  failure = (id, error) =>
}