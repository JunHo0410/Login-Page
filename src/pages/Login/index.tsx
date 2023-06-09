import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import LoginForm from "../../components/LoginForm";

import bread from "../../assets/svgs/bread.svg";
import logo from "../../assets/svgs/logo.svg";

const LoginPage: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="bg-blue-100 w-full h-screen absolute top-0 overflow-hidden">
        <div className="">
          <img src={bread} alt="Image 1" className="absolute right-0 top-0" />
          <img src={logo} alt="Image 2" className="absolute top-275 left-3" />
        </div>
        <div className="mt-399 px-3">
          <LoginForm />
        </div>
        <div className="absolute bottom-4 flex w-full justify-center">
          <p className="text-base text-white">Don't have an account?&nbsp;</p>
          <a href="#" className="text-base text-blue-300">
            Sign Up
          </a>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LoginPage;
