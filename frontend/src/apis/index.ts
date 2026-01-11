const API_URL = "localhost8000"; //backend url this will be in .env file tho
import { iUserSignupdata } from "@/types";

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

export { handleSignUp };
