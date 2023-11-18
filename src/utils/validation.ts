import { store } from "../app/store";
import { Dispatch, SetStateAction } from "react";
import { showNotificationModal } from "../feature/notification/notificationSlice";

export const VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

// export const VALID_PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/gi;
export const VALID_PASSWORD = /\d{9,}/gi;

export const isInputsFilled = (inputsValue: { [index: string]: string }) => {
  return Object.values(inputsValue).every((value) => value.trim());
};

export const isValidInputValue = (inputValue: string, pattern: RegExp) => {
  return inputValue.match(pattern);
};

export const displayError = (setError: Dispatch<SetStateAction<string>>, message: string): void => {
  setError(message);
  store.dispatch(showNotificationModal());
};
