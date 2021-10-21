import { useReducer } from 'react';
import { createContext } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '6161f2ee359797080a37b410',
    username: 'new1',
    email: 'new1@email.com',
    password: '$2b$10$poQNhnj7wazwoOT3xPJS8ObBODZRQatQUh0IPIIuMmWTqEdZMDFo6',
    profilePicture: '',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    desc: 'th is gonne be fun',
    city: 'Rangamati',
    from: 'Bangladesh',
    relationship: '2',
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
