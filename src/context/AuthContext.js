import { useReducer } from 'react';
import { createContext } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '6161f0fa3659667f07431e22',
    username: 'new',
    email: 'new@email.com',
    password: '$2b$10$LaEThze2nTB/q4Q3DLAUPeNEO58D63Vnq0OlB.v4ndP82/uqUBsVO',
    profilePicture: '',
    coverPicture: '',
    followers: ['6161f2ee359797080a37b410'],
    followings: [],
    isAdmin: false,
    createdAt: '2021-10-09T19:43:54.082+00:00',
    updatedAt: '2021-10-11T07:05:58.459+00:00',
  },
  isfetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
