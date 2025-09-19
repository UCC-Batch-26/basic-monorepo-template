import { useReducer } from 'react';

const LOGIN_PATH = `${process.env.API_URL}/auth/login`;

const STATE_TYPE = {
  RESET: 'reset',
};
const LOGIN_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

function reducer(state, action) {
  switch (state.type) {
    case LOGIN_STATUS.PENDING:
      return {
        ...state,
        status: LOGIN_STATUS.PENDING,
      };

    case LOGIN_STATUS.SUCCESS:
      return {
        ...state,
        token: action.payload,
        status: LOGIN_STATUS.SUCCESS,
      };

    case LOGIN_STATUS.FAILED:
      return {
        ...state,
        status: LOGIN_STATUS.FAILED,
        error: action.payload,
      };

    case LOGIN_STATUS.IDLE:
      return {
        stat,
      };

    default:
      return state;
  }
}
const initialState = {
  status: LOGIN_STATUS.PENDING,
  token: null,
  error: null,
};
export function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(email, password) {
    dispatch({ type: LOGIN_STATUS.PENDING });

    try {
      const response = await fetch(LOGIN_PATH, {
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Unable to login');
      }
    } catch (error) {
      setMessage(error?.message ?? 'Something went wrong');
    }
  }

  return {
    ...state,
  };
}
