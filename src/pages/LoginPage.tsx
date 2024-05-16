import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Username: ${username}\nPassword: ${password}`;
    setUsername('');
    setPassword('');
    alert(message);
  };

  const signUpClick = () => {
    navigate('/signUp');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <LoginContainer>
        <p>로고 이미지</p>
        <h2 style={{ marginBottom: 50 }}>Program Pasooggun</h2>
        <Form onSubmit={loginSubmit}>
          <FormElement>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="id"
              required
            />
          </FormElement>
          <FormElement>
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ToggleSwitch onClick={togglePasswordVisibility}>
                {passwordVisible ? <StyledBsEyeFill /> : <StyledBsEyeSlashFill />}
              </ToggleSwitch>
            </PasswordInputContainer>
          </FormElement>
        </Form>
        <LoginButton type="submit">Login</LoginButton>
        <SignUp>
          <span>Don&apos;t you have an account? </span>
          <a onClick={signUpClick}>Create account</a>
        </SignUp>
      </LoginContainer>
      <ImageContainer />
    </Container>
  );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const LoginContainer = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
`;

const Input = styled.input`
    height: 25px;
    width: 260px;
    border: 2px solid rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    color: ${({ theme: { color } }) => color.gray1};
    padding: 5px 10px;
`;

const PasswordInputContainer = styled.div`
    position: relative;
    width: 284px;
`;

const ToggleSwitch = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const StyledBsEyeFill = styled(BsEyeFill)`
    color: ${({ theme }) => theme.color.gray1};
`;

const StyledBsEyeSlashFill = styled(BsEyeSlashFill)`
    color: ${({ theme }) => theme.color.gray1};
`;

const LoginButton = styled.button`
    height: 35px;
    width: 280px;
    margin: 20px;
    border: transparent;
    border-radius: 5px;
    background-color: ${({ theme: { color } }) => color.indigo};
    color: white;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

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

const ImageContainer = styled.div`
    width: 450px;
    height: 450px;
    background-color: ${({ theme: { color } }) => color.indigo};
    border-radius: 0 5px 5px 0;
`;

export default LoginPage;
