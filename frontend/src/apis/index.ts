import { iUserLogindata, iUserSignupdata } from "@/types";
const API_URL = "http://localhost:8000";

async function handleSignUp(formdata: iUserSignupdata) {
  try {
    const response = await fetch(`${API_URL}/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    if (response.status === 200) {
      return true;
    }
    if (response.status != 200) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function handleLogin(formdata: iUserLogindata) {
  try {
    const response = await fetch(`${API_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formdata),
    });
    if (response.status === 200) {
      return true;
    }
    if (response.status != 200) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleSignUp, handleLogin };
