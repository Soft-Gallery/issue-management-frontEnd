import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import projectPandaImg from '../assets/imgs/project_panda.png';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import validateForm from '../feature/auth/function/validateForm';
import postSignUp from '../feature/auth/remotes/postSignUp';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('ROLE_ADMIN');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [validateErrors, setValidateErrors] = useState({id: '', password: '', username: '', email: '', role: ''});

  const signUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(validateForm(id, password, username, email, role)).every(value => value === '')) {
      setValidateErrors(validateForm(id, password, username, email, role));

      const postResult = await postSignUp(id, password, username, email, role);

      setId('');
      setPassword('');
      setUsername('');
      setEmail('');
      setRole('ADMIN');
      setPasswordVisible(false);

      if (postResult === true) {
        alert('회원가입 성공!');
        navigate('/login');
      } else if(postResult === false) {
        alert('회원가입 실패!');
      } else {
        alert(`회원가입 실패!\n에러 : ${postResult}`);
      }
    } else{
      setValidateErrors(validateForm(id, password, username, email, role));
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
      <PandaImg src={projectPandaImg} alt="프로젝트 판다 캐릭터" />
      <SignUpContainer>
        <h2 style={{ marginTop: 20, marginBottom: 20 }}>프로젝트 판다</h2>
        <Form onSubmit={signUpSubmit}>

          <FormElement>
            <Input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="사용자 아이디"
            />
            <InstructionText error={!!validateErrors.id}>{validateErrors.id || '영문+숫자 4~8자리'}</InstructionText>
          </FormElement>

          <FormElement>
            <PasswordInputContainer>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                placeholder="사용자 패스워드"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleSwitch onClick={togglePasswordVisibility}>
                {passwordVisible ? <StyledBsEyeFill /> : <StyledBsEyeSlashFill />}
              </ToggleSwitch>
            </PasswordInputContainer>
            <InstructionText error={!!validateErrors.password}>{validateErrors.password || '영문+숫자 8~16자리'}</InstructionText>
          </FormElement>

          <FormElement>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="사용자 이름"
            />
            <InstructionText error={!!validateErrors.username}>{validateErrors.username || '영문 20자 이내'}</InstructionText>
          </FormElement>

          <FormElement>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="사용자 이메일 주소"
            />
            <InstructionText error={!!validateErrors.email}>{validateErrors.email || '이메일 형식에 맞게 입력해주세요'}</InstructionText>
          </FormElement>

          <FormElement>
            <Role>
              <label>
                <input type="radio" name="role" value="ROLE_ADMIN" checked={role === 'ROLE_ADMIN'} onChange={handleRoleChange} />ADMIN
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_PL" checked={role === 'ROLE_PL'} onChange={handleRoleChange} />PL
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_DEVELOPER" checked={role === 'ROLE_DEVELOPER'} onChange={handleRoleChange} />DEV
              </label>
              <label>
                <input type="radio" name="role" value="ROLE_TESTER" checked={role === 'ROLE_TESTER'} onChange={handleRoleChange} />TESTER
              </label>
            </Role>
          </FormElement>

          <BtnRow>
            <Button type="submit">회원가입</Button>
            <TransparentButton type="button" onClick={loginClick}>로그인</TransparentButton>
          </BtnRow>
        </Form>
      </SignUpContainer>
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

const PandaImg = styled.img`
    width: 550px;
    height: 550px;
    border-radius: 5px 0 0 5px;
`;

const SignUpContainer = styled.div`
    width: 500px;
    height: 550px;
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
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 5px 10px;
`;

const PasswordInputContainer = styled.div`
    position: relative;
    width: 304px;
`;

const StyledBsEyeFill = styled(BsEyeFill)`
    color: ${({ theme }) => theme.color.gray1};
`;

const StyledBsEyeSlashFill = styled(BsEyeSlashFill)`
    color: ${({ theme }) => theme.color.gray1};
`;

const ToggleSwitch = styled.span`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const BtnRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    height: 35px;
    width: 130px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: transparent;
    border-radius: 5px;
    background-color: ${({ theme: { color } }) => color.blue};
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
    font-size: 14px;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
    }
`;

const TransparentButton = styled(Button)`
    background-color: ${({ theme: { color } }) => `rgba(${parseInt(color.blue.slice(1, 3), 16)}, ${parseInt(color.indigo.slice(3, 5), 16)}, ${parseInt(color.indigo.slice(5, 7), 16)}, 0.5)`};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const FormElement = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
`;

const InstructionText = styled.p<{ error: boolean }>`
    margin-top: 5px;
    margin-left: 5px;
    font-size: 12px;
    color: ${({ error }) => (error ? 'red' : 'gray')};
    align-self: flex-start;
`

const Role = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
`;

export default SignUpPage;
