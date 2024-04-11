import { useSelector } from "react-redux";
import { openPopUp, closePopUp } from "../store/popUp/popUpSlice";
import { useAppDispatch } from "./useAppDispatch";
import { RootState } from "../store";

export const usePopUp = () => {
  const dispatch = useAppDispatch();

  const { message, isOpen } = useSelector((state:RootState) => state.popUp);


  const showPopUp = (message: string) => {
    dispatch(openPopUp(message));
  };

  const hidePopUp = () => {
    dispatch(closePopUp());
  };

  return {
    message,
    isOpen,
    showPopUp,
    hidePopUp,
  };
};