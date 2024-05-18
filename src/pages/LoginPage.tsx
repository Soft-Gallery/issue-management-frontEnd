import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userRoleState } from '../recoil/atom';
const LoginPage = () => {
  const [role, setRole] = useState<string>('guest');
  const setUserRole = useSetRecoilState(userRoleState);
  const navigate = useNavigate();

  const handleLogin = () => {
    setUserRole(role);
    navigate('/');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
        <option value="dev">Developer</option>
        <option value="pl">Project Leader</option>
        <option value="tester">Tester</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
