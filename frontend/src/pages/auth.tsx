import React, { useState } from "react";
import { FormContainer } from "../components/ui/form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { iUserSignupdata, iUserLogindata } from "@/types";
import { GoogleLogin } from "@react-oauth/google";
import { validateEmail, validatePassword, validateUsername } from "../utils";
import { handleSignUp } from "../apis/index";
import "../App.css";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<iUserLogindata>({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [invalidField, setInvalidField] = useState<string>("");

  const navigate = useNavigate();
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log("Login failed");
  };
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer onsubmit={handleSubmit} id='loginForm'>
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-sm lg:text-2xl font-semibold'>Welcome Back!</h1>
        </div>
        <div className='flex flex-col gap-1'>
          <Label> Name or Email </Label>
          <Input
            placeholder='Enter name or email'
            icon={Mail}
            id='identifier'
            required
            autoComplete='username'
            onChange={(e) => {
              handleForm(e);
            }}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label>Password</Label>

          <div className='relative'>
            <Input
              placeholder='Enter your password'
              icon={Lock}
              type={showPassword ? "text" : "password"}
              id='password'
              required
              minLength={8}
              maxLength={12}
              autoComplete='current-password'
              className={
                error === true && invalidField === "password"
                  ? "border border-red-400 pr-10"
                  : "pr-10"
              }
              onChange={handleForm}
            />

            <button
              type='button'
              onClick={togglePassword}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 '>
              {showPassword ? (
                <EyeOff size={18} className='cursor-pointer' />
              ) : (
                <Eye size={18} className='cursor-pointer' />
              )}
            </button>
          </div>

          {error === true && invalidField === "password" && (
            <span className='text-red-400'>
              Password must include uppercase, lowercase, number, and symbol.
            </span>
          )}
        </div>

        <div className='flex items-center justify-between text-sm'>
          <label className='flex items-center gap-2'>
            <input type='checkbox' />
            Remember me
          </label>

          <button className='text-blue-600 text-sm font-medium'>
            Forgot password?
          </button>
        </div>

        <Button className='mt-3' type='submit'>
          Sign In
        </Button>

        <div className='w-full flex gap-5 items-center justify-center'>
          <p className='text-center text-sm mt-1'>Don't have an account?</p>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className='text-blue-600 font-medium cursor-pointer underline'>
            Sign up
          </button>
        </div>

        <p className='text-center text-sm my-2'>Or</p>
        <div className='w-full max-w-sm  mx-auto'>
          <GoogleLogin
            theme='outline'
            size='large'
            logo_alignment='center'
            text='continue_with'
            onSuccess={responseMessage}
            onError={errorMessage}></GoogleLogin>
        </div>
      </FormContainer>
    </div>
  );
};

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState<iUserSignupdata>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<boolean>(false);
  const [invalidField, setInvalidField] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }
  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function throwInputError(fieldName: string) {
    setError(true);
    setInvalidField(fieldName);
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateUsername(form.name)) return throwInputError("name");
    if (!validatePassword(form.password)) return throwInputError("password");
    if (!validateEmail(form.email)) return throwInputError("email");
    // const isSuccess = await handleSignUp(form);
  }
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log("Login failed");
  };
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer onsubmit={submitForm} id='signupForm'>
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-sm lg:text-2xl font-semibold'>
            Welcome to Kanflo
          </h1>
        </div>
        <div className='flex flex-col gap-1'>
          <Label> Name </Label>
          <Input
            placeholder='Enter your name'
            icon={User}
            id='name'
            required
            minLength={6}
            maxLength={16}
            autoComplete='name'
            className={
              error === true && invalidField === "name"
                ? "border border-red-400"
                : ""
            }
            onChange={(e) => {
              handleForm(e);
            }}
          />
          {error === true && invalidField === "name" && (
            <span className='text-red-400'>
              Username must start with a letter and contain no spaces.
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <Label> Email </Label>
          <Input
            placeholder='name@example.com'
            icon={Mail}
            id='email'
            required
            type='email'
            autoComplete='email'
            className={
              error === true && invalidField === "email"
                ? "border border-red-400"
                : ""
            }
            onChange={(e) => {
              handleForm(e);
            }}
          />
          {error === true && invalidField === "email" && (
            <span className='text-red-400'>
              Please enter a valid email adress.
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <Label>Password</Label>

          <div className='relative'>
            <Input
              placeholder='Enter your password'
              icon={Lock}
              type={showPassword ? "text" : "password"}
              id='password'
              required
              minLength={8}
              maxLength={12}
              autoComplete='current-password'
              className={
                error === true && invalidField === "password"
                  ? "border border-red-400 pr-10"
                  : "pr-10"
              }
              onChange={handleForm}
            />

            <button
              type='button'
              onClick={togglePassword}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 '>
              {showPassword ? (
                <EyeOff size={18} className='cursor-pointer' />
              ) : (
                <Eye size={18} className='cursor-pointer' />
              )}
            </button>
          </div>

          {error === true && invalidField === "password" && (
            <span className='text-red-400'>
              Password must include uppercase, lowercase, number, and symbol.
            </span>
          )}
        </div>

        <Button className='mt-3' type='submit'>
          Sign Up
        </Button>

        <div className='w-full flex gap-5 items-center justify-center'>
          <p className='text-center text-sm mt-1'>Don't have an account?</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className='text-blue-600 underline font-medium cursor-pointer '>
            Login
          </button>
        </div>

        <p className='text-center text-sm my-2'>Or</p>

        <div className='w-full max-w-sm  mx-auto'>
          <GoogleLogin
            theme='outline'
            size='large'
            logo_alignment='center'
            text='continue_with'
            onSuccess={responseMessage}
            onError={errorMessage}></GoogleLogin>
        </div>
      </FormContainer>
    </div>
  );
};

export { SignUpForm, LoginForm };
