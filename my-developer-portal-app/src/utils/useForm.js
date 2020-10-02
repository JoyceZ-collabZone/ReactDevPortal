import { useState } from "react";
export const useForm = (initialState) => {
  const [userInput, setUserInput] = useState(initialState);
  const captureUserInput = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    console.log("logging use form ", value);
    let inputObject = { ...userInput };
    inputObject[name] = value;
    setUserInput(inputObject);
    console.log("logging user name ", name, value);
  };
  return { userInput, captureUserInput };
};
