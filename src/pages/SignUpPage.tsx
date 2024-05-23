import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ValidationErrorType } from '../feature/auth/type/types';
import validateForm from '../feature/auth/function/validateForm';
import postSignUp from '../feature/auth/remotes/postSignUp';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('ADMIN');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [validateErrors, setValidateErrors] = useState<ValidationErrorType>({});

  const signUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(id, password, username, email, role);

    if (Object.keys(validationErrors).length > 0) {
      setValidateErrors(validationErrors);
    } else {
      setValidateErrors(validationErrors);

      setId('');
      setPassword('');
      setUsername('');
      setEmail('');
      setRole('ADMIN');
      setPasswordVisible(false);

      const postResult = await postSignUp(id, password, username, email, role);

      // 회원가입 확인용 alert
      if (postResult) {
        alert('회원가입 성공!');
      } else {
        alert('회원가입 실패');
      }

    }
  };

  const loginClick = () => {
    navigate('/login');
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <ImageContainer />
      <SignUpContainer>
        <h2 style={{ marginBottom: 40 }}>Welcome!</h2>
        <Form onSubmit={signUpSubmit}>

           {/*아이디*/}
          <FormElement>
            <Input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Create ID"
              required
            />
            <InstructionText error={!!validateErrors.id}>{validateErrors.id || '영문+숫자 4~8자리'}</InstructionText>
          </FormElement>

          {/*패스워드*/}
          <FormElement>
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Create password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ToggleSwitch onClick={togglePasswordVisibility}>
                {passwordVisible ? <StyledBsEyeFill /> : <StyledBsEyeSlashFill />}
              </ToggleSwitch>
            </PasswordInputContainer>
            <InstructionText error={!!validateErrors.password}>{validateErrors.password || '영문+숫자 8~16자리'}</InstructionText>
          </FormElement>

          {/*사용자 이름*/}
          <FormElement>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Set username"
              required
            />
            <InstructionText error={!!validateErrors.username}>{validateErrors.username || '영문 20자 이내'}</InstructionText>
          </FormElement>

          {/*이메일 입력*/}
          <FormElement>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
            <InstructionText error={!!validateErrors.email}>{validateErrors.email || '유효한 이메일 주소'}</InstructionText>
          </FormElement>

          {/*역할*/}
          <FormElement>
            <Role>
              <label>
                <input type="radio" name="role" value="ROLE_ADMIN" checked={role === 'ROLE_ADMIN'} onChange={handleRoleChange} />ADMIN
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_PL" checked={role === 'ROLE_PL'} onChange={handleRoleChange} />PL
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_DEV" checked={role === 'ROLE_DEV'} onChange={handleRoleChange} />DEV
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_TESTER" checked={role === 'ROLE_TESTER'} onChange={handleRoleChange} />TESTER
              </label>
            </Role>
          </FormElement>

          {/*제출 버튼*/}
          <BtnRow>
            <Button type="submit">Sign Up</Button>
            <TransparentButton type="button" onClick={loginClick}>Log In</TransparentButton>
          </BtnRow>
        </Form>
      </SignUpContainer>
    </Container>
  );
};

const BtnRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const SignUpContainer = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
`;

const Input = styled.input`
    height: 25px;
    width: 280px;
    border: 2px solid rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    color: ${({ theme: { color } }) => color.gray1};
    padding: 5px 10px;
`;

const PasswordInputContainer = styled.div`
    position: relative;
    width: 304px;
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

const Button = styled.button`
    height: 35px;
    width: 120px;
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

const TransparentButton = styled(Button)`
    background-color: ${({ theme: { color } }) => `rgba(${parseInt(color.indigo.slice(1, 3), 16)}, ${parseInt(color.indigo.slice(3, 5), 16)}, ${parseInt(color.indigo.slice(5, 7), 16)}, 0.5)`};
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
    flex-direction: column;
    align-items: flex-start;
    margin: 5px;
`;

const InstructionText = styled.p<{ error: boolean }>`
    margin-top: 5px;
    margin-left: 5px;
    font-size: 12px;
    color: ${({ error }) => (error ? 'red' : 'gray')};
    align-self: flex-start;
`;

const ImageContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${({ theme: { color } }) => color.indigo};
    border-radius: 0 5px 5px 0;
`;

const Role = styled.div`
    display: flex;
    flex-direction: row;
`;

export default SignUpPage;
