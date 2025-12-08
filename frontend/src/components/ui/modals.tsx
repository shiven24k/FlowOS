import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { LogOut, UserCircle, Kanban } from "lucide-react";
import { Label } from "./label";
import { Input } from "./input";

const AccountMenu: React.FC = () => {
  return (
    <div className='w-1/2 absolute right-8 top-16 shadow-2xl lg:w-55 md:left-2  md:top-[78%] p-1 h-fit flex flex-col bg-white rounded-sm z-40'>
      <Button variant='ghost'>
        <UserCircle /> Profile
      </Button>
      <Button variant='ghost'>
        <LogOut /> Logout
      </Button>
    </div>
  );
};

const supportModalclasses = cva(
  "w-[32rem] max-w-full bg-white rounded-xl shadow-xl h-[50vh] flex flex-col items-start justify-start p-6 gap-4 z-50"
);

interface UserSupportModalProps {
  h1?: string;
  h2?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode; // could be 1 or 2 buttons
}

const UserSupportModal: React.FC<UserSupportModalProps> = ({
  h1,
  h2,
  content,
  actions,
}: UserSupportModalProps) => {
  return (
    <>
      <div className='w-screen h-screen  flex items-center justify-center'>
        <div className={cn(supportModalclasses())}>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
          <div>{content}</div>
          <div className='w-full flex justify-end'>{actions}</div>
        </div>
      </div>
    </>
  );
};

const UserHelp: React.FC = () => {
  return (
    <UserSupportModal
      h1='Welcome to kanflow Support'
      h2='We would love to help you.
'
      content={
        <div>
          <p>
            kanFlow is an innovative AI-powered task managment platform designed
            to help you manage your work,projects and organize your life.
          </p>
          <h3>Contact US: kanflowsupport@gmail.com</h3>
        </div>
      }
      actions={
        <button className='bg-black text-white px-4 py-2 rounded-lg'>
          cancel
        </button>
      }
    />
  );
};

const UserFeedback: React.FC = () => {
  return (
    <UserSupportModal
      h1='Feedback'
      h2='Tell us what you think'
      content={<textarea className='w-full h-24 p-2 border rounded-lg' />}
      actions={
        <button className='bg-black text-white px-4 py-2 rounded-lg'>
          Submit
        </button>
      }
    />
  );
};

const CreateBoard: React.FC = () => {
  return (
    <>
      <div className='w-screen h-screen absolute flex items-center justify-center z-50 overflow-hidden bg-white/40 '>
        <div className='w-[300px] h-fit bg-white rounded-sm p-4 flex flex-col gap-2 justify-around shadow-2xl'>
          <div className="w-full flex justify-between items-center cursor-pointer">
            <h1>Create Board</h1>
            <h1 className="font-bold text-2xl">x</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <Label>Board Title </Label>
            <Input
              placeholder='Project'
              icon={Kanban}
              // value={}
            />
            <h2 className='font-light text-[14px] text-gray-500'>
              Board Title is Required!
            </h2>
          </div>
          <div className='flex flex-col gap-1'>
            <h2>Visibility</h2>
            <select
              className='visibility-select '
              onChange={(e) => e.target.value}>
              <option value='public'>Public</option>
              <option value='workspace'>My Workspace</option>
              <option value='private'>Private</option>
            </select>
          </div>
          <Button>Create</Button>
        </div>
      </div>
    </>
  );
};

export { AccountMenu, UserSupportModal, UserHelp, UserFeedback, CreateBoard };
