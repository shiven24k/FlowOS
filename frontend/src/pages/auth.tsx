import type React from "react";
import { User, Mail, Lock } from "lucide-react";
import "../App.css";
import { FormContainer } from "../components/ui/form";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";

const SignUp: React.FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <form
        className='
        flex flex-col gap-[10px] bg-white p-[30px] w-[450px] rounded-[20px]
        font-sans
      '>
        <div className='flex flex-col'>
          <label className='text-[#151717] font-semibold'>Name</label>
        </div>

        <div
          className='
          border border-[#ecedec] rounded-[10px] h-[50px] flex items-center
          pl-[10px] transition duration-200 focus-within:border-[#2d79f3]
        '>
          <User size={20} className='text-gray-600' />

          <input
            type='text'
            placeholder='Enter your Name'
            className='
            ml-[10px] rounded-[10px] border-none w-full h-full
            focus:outline-none placeholder:font-sans
          '
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-[#151717] font-semibold'>Email</label>
        </div>

        <div
          className='
          border border-[#ecedec] rounded-[10px] h-[50px] flex items-center
          pl-[10px] transition duration-200 focus-within:border-[#2d79f3]
        '>
          <Mail size={20} className='text-gray-600' />

          <input
            type='email'
            placeholder='Enter your Email'
            className='
            ml-[10px] rounded-[10px] border-none w-full h-full
            focus:outline-none placeholder:font-sans
          '
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-[#151717] font-semibold'>Password</label>
        </div>

        <div
          className='
          border border-[#ecedec] rounded-[10px] h-[50px] flex items-center
          pl-[10px] transition duration-200 focus-within:border-[#2d79f3]
        '>
          <Lock size={20} className='text-gray-600' />

          <input
            type='password'
            placeholder='Enter your Password'
            className='
            ml-[10px] rounded-[10px] border-none w-full h-full
            focus:outline-none placeholder:font-sans
          '
          />
        </div>
        <div className='flex flex-row items-center justify-between gap-[10px]'>
          <div className='flex items-center gap-2'>
            <input type='checkbox' />
            <label className='text-black font-normal text-[14px]'>
              Remember me
            </label>
          </div>

          <span className='text-[14px] text-[#2d79f3] font-medium cursor-pointer'>
            Forgot password?
          </span>
        </div>
        <button
          className='
          my-[20px] mb-[10px] bg-[#151717] text-white text-[15px] font-medium
          rounded-[10px] h-[50px] w-full cursor-pointer
        '>
          Sign In
        </button>

        <p className='text-center text-black text-[14px] my-[5px]'>
          Don't have an account?
          <span className='text-[#2d79f3] font-medium cursor-pointer ml-[5px]'>
            Sign Up
          </span>
        </p>

        <p className='text-center text-black text-[14px] my-[5px]'>Or With</p>
        <div className='flex flex-row items-center justify-between gap-[10px]'>
          <button
            className='
            mt-[10px] w-full h-[50px] rounded-[10px] flex justify-center items-center
            font-medium gap-[10px] border border-[#ededef] bg-white cursor-pointer
            transition duration-200 hover:border-[#2d79f3]
          '>
            <img
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              className='w-5 h-5'
            />
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

// const LogIn: React.FC = () => {
//   return (
//     <div className='w-screen h-screen flex items-center justify-center'>
//       <form
//         className='
//         flex flex-col gap-[10px] bg-white p-[30px] w-[450px]
//         rounded-[20px] font-sans
//       '>

//         <div className='flex flex-col'>
//           <label className='text-[#151717] font-semibold'>Name or Email</label>
//         </div>

//         <div
//           className='
//           border border-[#ecedec] rounded-[10px] h-[50px] flex items-center
//           pl-[10px] transition duration-200 focus-within:border-[#2d79f3]
//         '>
//           <User size={20} className='text-gray-600' />

//           <input
//             type='text'
//             placeholder='Enter your name or email'
//             className='
//             ml-[10px] rounded-[10px] border-none w-full h-full
//             focus:outline-none placeholder:font-sans
//           '
//           />
//         </div>

//         <div className='flex flex-col mt-[5px]'>
//           <label className='text-[#151717] font-semibold'>Password</label>
//         </div>

//         <div
//           className='
//           border border-[#ecedec] rounded-[10px] h-[50px] flex items-center
//           pl-[10px] transition duration-200 focus-within:border-[#2d79f3]
//         '>
//           <Lock size={20} className='text-gray-600' />

//           <input
//             type='password'
//             placeholder='Enter your password'
//             className='
//             ml-[10px] rounded-[10px] border-none w-full h-full
//             focus:outline-none placeholder:font-sans
//           '
//           />
//         </div>

//         <div className='flex flex-row items-center justify-between gap-[10px] mt-[5px]'>
//           <div className='flex items-center gap-2'>
//             <input type='checkbox' />
//             <label className='text-black text-[14px] font-normal'>
//               Remember me
//             </label>
//           </div>

//           <span className='text-[14px] text-[#2d79f3] font-medium cursor-pointer'>
//             Forgot password?
//           </span>
//         </div>

//         <button
//           className='
//           my-[20px] mb-[10px] bg-[#151717] text-white text-[15px] font-medium
//           rounded-[10px] h-[50px] w-full cursor-pointer
//         '>
//           Sign In
//         </button>

//         <p className='text-center text-black text-[14px] my-[5px]'>
//           Don't have an account?
//           <a
//             href='/signup'
//             className='text-[#2d79f3] font-medium cursor-pointer ml-[5px]'>
//             Sign Up
//           </a>
//         </p>

//         <p className='text-center text-black text-[14px] my-[5px]'>
//           Or Sign In With
//         </p>

//         <div className='flex flex-row items-center justify-between gap-[10px]'>
//           <button
//             className='
//             mt-[10px] w-full h-[50px] rounded-[10px] flex justify-center items-center
//             font-medium gap-[10px] border border-[#ededef] bg-white cursor-pointer
//             transition duration-200 hover:border-[#2d79f3]
//           '>
//             <img
//               src='https://www.svgrepo.com/show/475656/google-color.svg'
//               className='w-5 h-5'
//             />
//             Google
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export { SignUp, LogIn };

export default function LoginForm() {
  const [name, setName] = useState("");
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <FormContainer>
        <h1>Here will be logo</h1>
        <div className='flex flex-col gap-1'>
          <Label> Name or Email </Label>
          <Input
            placeholder='Enter name or email'
            icon={Mail}
            className={""}
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
            className={""}
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

        <p className='text-center text-sm mt-1'>
          Don't have an account?
          <a
            href='/signup'
            className='text-blue-600 font-medium cursor-pointer'>
            Sign up
          </a>
        </p>

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
}
