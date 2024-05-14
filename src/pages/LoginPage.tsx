import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Username: ${username}\nPassword: ${password}`;
    setUsername('');
    setPassword('');
    alert(message);
  };

  const signUpClick = ()=>{
    navigate('/signUp');
  }

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={loginSubmit}>
        <FormElement>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormElement>
        <FormElement>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormElement>
        <Button type="submit">Login</Button>
      </Form>
      <SignUp>
        <p>Don&apos;t you have an account? </p>
        <a onClick={signUpClick}>Create account</a>
      </SignUp>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 20px; /* Add some space between the inputs and buttons */
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
`

const FormElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px;
    
    label{
        margin-right: 5px;
    }
`

const SignUp = styled.div`
    p {
        display: inline; /* 문장을 인라인 요소로 설정합니다. */
    }
    a {
        display: inline-block; /* 링크를 인라인 블록 요소로 설정합니다. */
        margin-left: 5px; /* 링크와 문장 사이에 간격을 추가합니다. */
        color: ${({ theme: { color } }) => color.indigo};
        cursor: pointer; /* 마우스 호버 시 손 모양으로 변경합니다. */
    }

    a:hover {
        text-decoration: underline; /* 호버 시에 밑줄 효과 추가합니다. */
    }
`;


export default LoginPage;
