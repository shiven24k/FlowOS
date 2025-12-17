import type React from "react";
import { User, Mail, Lock } from "lucide-react";
import "../App.css";
import { FormContainer } from "../components/ui/form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer>
        <h1>Here will be logo</h1>
        <div className='flex flex-col gap-1'>
          <Label> Name or Email </Label>
          <Input
            placeholder='Enter name or email'
            icon={Mail}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label>Password</Label>
          <Input
            placeholder='Enter your password'
            icon={Lock}
            type='password'
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

        <Button className='mt-3'>Sign In</Button>

        <div className='w-full flex gap-5 items-center justify-center'>
          <p className='text-center text-sm mt-1'>Don't have an account?</p>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className='text-blue-600 font-medium cursor-pointer'>
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
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer>
        <h1>Here will be logo</h1>
        <div className='flex flex-col gap-1'>
          <Label> Name </Label>
          <Input
            placeholder='Enter your name'
            icon={User}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <Label> Email </Label>
          <Input
            placeholder='Enter your email'
            icon={Mail}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Label>Password</Label>
          <Input
            placeholder='Enter your password'
            icon={Lock}
            type='password'
          />
        </div>

        <Button className='mt-3'>Sign Up</Button>

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
