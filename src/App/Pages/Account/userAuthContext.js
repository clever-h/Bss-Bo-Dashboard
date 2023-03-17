import { AuthContext } from '../Account/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('UseAuthContext Must be used inside an Provider');
  }

  return context;
};
