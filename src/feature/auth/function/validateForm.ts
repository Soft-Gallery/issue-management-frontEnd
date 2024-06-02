
export default function validateForm(id: string, password:string, username: string, email:string, role:string) {
  const newErrors= {
    id : '',
    password : '',
    username : '',
    email : '',
    role : '',
  };

  if (!id) {
    newErrors.id = '아이디 입력란을 채워주세요';
  } else if (!/^[a-zA-Z0-9]{4,8}$/.test(id)) {
    newErrors.id = '아이디는 영문+숫자 4~8자리여야 합니다';
  }

  if (!password) {
    newErrors.password = '비밀번호 입력란을 채워주세요';
  } else if (!/^[a-zA-Z0-9]{8,16}$/.test(password)) {
    newErrors.password = '비밀번호는 영문+숫자 8~16자리여야 합니다';
  }

  if (!username) {
    newErrors.username = '이름 입력란을 채워주세요';
  } else if (!/^[a-zA-Z0-9]{4,8}$/.test(id)) {
    newErrors.username = '이름은 영문 20자 이내이어야 합니다';
  }

  if (!email) {
    newErrors.email = '이메일 입력란을 채워주세요';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = '이메일 형식을 지켜주세요';
  }

  if (!role) {
    newErrors.role = '역할을 선택해주세요';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.role = '역할을 선택해주세요';
  }

  return newErrors;
}