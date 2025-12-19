import React, { useState } from "react";
import { FormContainer } from "../components/ui/form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { iUserSignupdata, iUserLogindata } from "@/types";
import "../App.css";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<iUserLogindata>({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();

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
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer onsubmit={handleSubmit}>
        <h1>Here will be logo</h1>
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
          <Input
            placeholder='Enter your password'
            icon={Lock}
            id='password'
            type='password'
            autoComplete='current-password'
            required
            minLength={8}
            maxLength={12}
            onChange={(e) => {
              handleForm(e);
            }}
          />
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

        <p className='text-center text-sm my-2'>Or continue with</p>

        <Button
          variant='outline'
          icon={() => (
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              className='w-5'
            />
          )}>
          Google
        </Button>
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

  const navigate = useNavigate();

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function validateEmail(email: string) {
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailPattern.test(email);
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.name.length < 6) return;
    if (form.password.length < 8) return;
    if (!validateEmail(form.email)) return;
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer onsubmit={submitForm}>
        <h1>Here will be logo</h1>
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
            onChange={(e) => {
              handleForm(e);
            }}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label> Email </Label>
          <Input
            placeholder='name@example.com'
            icon={Mail}
            id='email'
            required
            autoComplete='email'
            onChange={(e) => {
              handleForm(e);
            }}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label>Password</Label>
          <Input
            placeholder='Enter your password'
            icon={Lock}
            type='password'
            id='password'
            required
            minLength={8}
            maxLength={12}
            autoComplete='current-password'
            onChange={(e) => {
              handleForm(e);
            }}
          />
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

        <p className='text-center text-sm my-2'>Or continue with</p>

        <Button
          variant='outline'
          icon={() => (
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              className='w-5'
            />
          )}>
          Google
        </Button>
      </FormContainer>
    </div>
  );
};

export { SignUpForm, LoginForm };
