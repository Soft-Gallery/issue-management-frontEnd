import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import postLogin from '../feature/auth/remotes/postLogin';
import saveTokenToLocalStorage from '../feature/auth/function/saveTokenToLocalStorage';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setId('');
    setPassword('');
    setPasswordVisible(false);

    const postResult = await postLogin(id, password);

    if (postResult) {
      navigate('/');
    } else{
      alert(`로그인 실패!\n에러 : ${postResult}`);
    }
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
        <p style={{ marginBottom: 50 }}>프로그램 판다 텍스트 이미지 </p>
        <Form onSubmit={loginSubmit}>
          <FormElement>
            <Input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
          <LoginButton type="submit">Log In</LoginButton>
        </Form>
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
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
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
        display: inline;
    }
    a {
        display: inline-block;
        margin-left: 5px;
        color: ${({ theme: { color } }) => color.indigo};
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const ImageContainer = styled.div`
    width: 450px;
    height: 450px;
    background-color: ${({ theme: { color } }) => color.indigo};
    border-radius: 0 5px 5px 0;
`;

export default LoginPage;
