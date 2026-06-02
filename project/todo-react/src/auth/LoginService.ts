import axios from "axios";
import type { } from "./Login";
import type { LoginDto } from "./Login";
import type { Register } from "react-router-dom";

const LOGIN_BACKEND_URL = "http://localhost:8080/api/auth";

export const registerApiCall = (registerDto: Register) =>
  axios.post(`${LOGIN_BACKEND_URL}/register`, registerDto);

export const loginApiCall = (loginDto: LoginDto) => {
  return axios.post(`${LOGIN_BACKEND_URL}/login`, loginDto);
};

export const setLoginUsername = (username: string) => {
  sessionStorage.setItem("username", username);
}

export const getLoggedInUsername = () => {
  return sessionStorage.getItem("username");
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isLoggedIn = () => {
  return getLoggedInUsername() !== null;
}

export const logout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("username");
};