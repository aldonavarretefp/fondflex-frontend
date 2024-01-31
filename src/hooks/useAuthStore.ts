import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogout } from "../store/auth/authSlice";
import fondflexAPI from "../api/fondflexAPI";
import { UnknownAction } from "@reduxjs/toolkit";


export const useAuthStore = () => {
  
  const dispatch = useDispatch();
  
  const { status, user, errorMessage } = useSelector((state: any) => state.auth);
  
  const startLogin = async (email: string, password: string) => {
    try {
      const { data } = await fondflexAPI.post("/login", { email, password });
      console.log(data);

    } catch (error) {
      setTimeout(() => {}, 3000);
    }
  };

  const startLogout = async () => {
    try {
      // await axios.post('/logout');
    } catch (error) {
      // dispatch(logout());
    }
  };

  const checkAuthToken = async (token: string) => {
    dispatch(onChecking(null) as UnknownAction);
    
    if (token === undefined || !token) {
      console.error("CheckAuthToken: No token found");
      dispatch(onLogout(null) as UnknownAction);
      return;
    }
    console.log(`CheckAuthToken: token found ${token}`);
    try {
      const response = await fondflexAPI.get("/auth/renewToken");
      console.log(response);
      
    } catch (error) {}
  };

  return {
    status,
    startLogin,
    startLogout,
    checkAuthToken,
  };
};
