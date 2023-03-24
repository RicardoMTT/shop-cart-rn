import React from 'react';

import {useAuth} from '../context/providers/authContext';
import {MenuLateral} from './MenuLateral';
import {Navigation} from '../navigation/Navigation';

export const IndexNavigation = () => {
  const {isLoggedIn} = useAuth();
 
  return <>{isLoggedIn ? <MenuLateral /> : <Navigation />}</>;
};
