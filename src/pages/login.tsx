import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiBox3Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import CompanyLogo from '../components/Icons/logo';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-20 items-center ">
      <div className="h-screen cont bg-primary px-20  flex flex-col justify-center">
        <div className="space-y-5">
          <div className="flex gap-2 items-center">
            <CompanyLogo size={60} type="dark" />
            <div className="flex flex-col gap-1">
              <Label className="text-white" variant={'legend'}>
                Dacopsy
              </Label>
              <Label className="text-white font-normal" variant={'title'}>
                Datacooker for Psychologists
              </Label>
            </div>
          </div>
          <div className="px-10 border rounded-lg h-72 w-[90%] gap-10 border-secondary flex flex-col justify-center">
            <Label variant={'legend'} className="text-white">
              Start creating datasets in under a minute!
            </Label>
            <Button
              onClick={() => navigate('./trail')}
              variant={'secondary'}
              className="w-36 text-lg gap-5 text-white font-light h-14"
            >
              Try Now <RiBox3Line size={30} />
            </Button>
          </div>
          <p className="w-[90%] text-justify text-secondary font-semibold">
            The information provided on this website is for general
            informational purposes only. We make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the website or the information, products, services, or related
            graphics contained on the website for any purpose. Any reliance you
            place on such information is therefore strictly at your own risk.
          </p>
          <div className="pt-20">
            <Label variant={'label'} className="text-white font-semibold">
              Dacopsy India Pvt Ltd. All Rights Reserved
            </Label>
          </div>
        </div>
      </div>
      <div className="pl-16 w-[55%] gap-5">
        <div className="justify-start flex flex-col items-start h-40">
          <Label className="font-normal text-primary" variant={'title'}>
            Welcome to
          </Label>
          <Label className="text-primary" variant={'legend'}>
            Dacopsy!
          </Label>
        </div>
        <div className="h-48 items-center space-y-4">
          <div className="space-y-1">
            <Label>Email * </Label>
            <Input variant={'default'} placeholder="Email" type="email" />
          </div>
          <div className="space-y-1">
            <Label>Password *</Label>
            <Input variant={'default'} placeholder="Password" type="password" />
          </div>
          <div>
            <Link
              to="#"
              className="w-fit float-right underline underline-offset-4 text-gray-400 hover:text-primary"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-16">
          <Button className="h-12 text-lg font-light">Sign In</Button>
          <Button
            className="text-gray-500 h-12 text-lg font-light"
            variant={'outline'}
          >
            <FcGoogle size={20} />
            Connect via Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
