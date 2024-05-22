import axios from 'axios';
import { client } from '../../../shared/remotes/axios';
import { UserAccountType } from '../type/types';
import { useState } from 'react';

export default function postSignUp(id: string, password: string, username: string, email: string, role: string) {
  if(role === "ADMIN"){
    role = "ROLE_ADMIN";
  } else if(role === "PL"){
    role = "ROLE_PL";
  } else if(role === "DEV"){
    role = "ROLE_DEV";
  } else if(role === "TESTER"){
    role = "ROLE_TESTER";
  }

  const userData = {
    "id": id,
    "password": password,
    "username": username,
    "email": email,
    "role": role,
  }

  const registerUser = async (userData: UserAccountType) => {
    try {
      const response = await client.post('/user/signup', userData);
      console.log('User registered successfully:', response.data);
      return true; // indicate success
    } catch (error) {
      console.error('Error registering user:');
      return false; // indicate failure
    }
  };

  return registerUser(userData);
}