import React from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import LoginForm from '../LoginForm';

const LoginDialog: React.FC = () => {
  return (
    <TooltipProvider>
      <Dialog>
        <DialogTrigger asChild>
          <Tooltip>
            <TooltipTrigger>
              <button className="text-indigo-500 hover:underline">Forgot password?</button>
            </TooltipTrigger>
            <TooltipContent sideOffset={5}>
              Click to open login dialog
            </TooltipContent>
          </Tooltip>
        </DialogTrigger>
        <DialogContent>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default LoginDialog;
