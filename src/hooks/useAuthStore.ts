import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogout } from "../store/auth/authSlice";
import fondflexAPI from "../api/fondflexAPI";

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const state =  useSelector((state: any) => state.auth);
    const startLogin = async (email: string, password: string) => {
        try {
            const { data } = await fondflexAPI.post('/login', { email, password });
            console.log(data);
            // dispatch(login(response.data));
        } catch (error) {

            setTimeout(() => {
            }, 3000);
        }
    };

    const startLogout = async () => {
        try {
            // await axios.post('/logout');

        } catch (error) {
            // dispatch(logout());
        }
    };
    
    return {
        startLogin,
        startLogout,
    };
}
