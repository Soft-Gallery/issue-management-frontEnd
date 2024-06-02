import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userRoleState } from '../../recoil/atom';

interface ProtectedRouteProps {
  allowedRoles: string[];
  componentMap?: {
    [key: string]: FC;
  };
  defaultComponent?: FC;
  children?: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowedRoles, componentMap, defaultComponent, children }) => {
  const userRole = useRecoilValue(userRoleState);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }

  if (componentMap && defaultComponent) {
    const ComponentToRender = componentMap[userRole] || defaultComponent;
    return <ComponentToRender />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
