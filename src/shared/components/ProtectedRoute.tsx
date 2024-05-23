import React from 'react';
import { useRecoilValue } from 'recoil';
import { userRoleState } from '../../recoil/atom';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactElement;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const userRole = useRecoilValue(userRoleState);

  if(!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
