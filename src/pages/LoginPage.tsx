import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import postLogin from '../feature/auth/remotes/postLogin';
import saveTokenToLocalStorage from '../feature/auth/function/saveTokenToLocalStorage';
import { getUserInfo } from '../feature/auth/remotes/getUserInfo';
import useFetch from '../shared/hooks/useFetch';
import { useSetRecoilState } from 'recoil';
import { Project } from '../shared/types/project';
import { adminPageAddProjectState } from '../recoil/admin/atom';
import { userRoleState } from '../recoil/atom';
import getRoleConstants from '../feature/auth/function/getRoleConstants';
import logoTextImg from '../assets/imgs/logo_text.png';
import projectPandaImg from '../assets/imgs/project_panda.png';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const setUserRoleState = useSetRecoilState<string>(userRoleState);
  const getLoginUserInfo = () => getUserInfo();
  const {data: userLoginInfo, fetchData} = useFetch(getLoginUserInfo);

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setId('');
    setPassword('');
    setPasswordVisible(false);

    const postResult = await postLogin(id, password);

    if (postResult) {
      void fetchData();
      if(userLoginInfo !== null) {
        setUserRoleState(getRoleConstants(userLoginInfo.role));
        alert('환영합니다!')
        navigate('/');
      }
    } else{
      alert('로그인 실패');
    }
  }

  const signUpClick = () => {
    navigate('/signUp');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <LoginContainer>
        <LogoText src={logoTextImg} alt="로고 텍스트 이미지 : Project Panda"/>
        <Form onSubmit={loginSubmit}>
          <FormElement>
            <Input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디 입력"
              required
            />
          </FormElement>
          <FormElement>
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                placeholder="패스워드 입력"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ToggleSwitch onClick={togglePasswordVisibility}>
                {passwordVisible ? <StyledBsEyeFill /> : <StyledBsEyeSlashFill />}
              </ToggleSwitch>
            </PasswordInputContainer>
          </FormElement>
          <LoginButton type="submit">로그인</LoginButton>
        </Form>
        <SignUp>
          <span>계정이 없으신가요? </span>
          <a onClick={signUpClick}>계정 생성하기</a>
        </SignUp>
      </LoginContainer>
      <PandaImg src={projectPandaImg} alt="프로젝트 판다 캐릭터"/>
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
    background-color: ${({ theme: { color } }) => color.black200};
`;

const LoginContainer = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
`;

const PandaImg = styled.img`
    width: 450px;
    height: 450px;
    border-radius: 0 5px 5px 0;
`;

const LogoText = styled.img`
    width: 134px;
    height: 100px;
    margin-bottom: 40;
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
    background-color: ${({ theme: { color } }) => color.blue};
    font-size: 14px;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
    font-weight: bold;

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
    margin: 8px;
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

export default LoginPage;
