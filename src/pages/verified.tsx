import React from 'react';
import { FiSmile } from 'react-icons/fi';
import CompanyLogo from '../components/Icons/logo';
import { Label } from '../components/ui/label';

interface VerifiedProps {}

const Verified: React.FC<VerifiedProps> = () => {
  return (
    <>
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
            <div className="h-72 w-[90%]" />
            <p className="w-[90%] text-justify text-secondary font-semibold">
              The information provided on this website is for general
              informational purposes only. We make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance you place on such information is therefore
              strictly at your own risk.
            </p>
            <div className="pt-20">
              <Label variant={'label'} className="text-white font-semibold">
                Dacopsy India Pvt Ltd. All Rights Reserved
              </Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <FiSmile size={'20%'} className="text-primary h-48" />
          <Label
            variant={'legend'}
            className="font-semibold text-primary pb-2 text-4xl"
          >
            You’re verified!
          </Label>
          <Label
            variant={'input'}
            className="font-light w-[30%] text-center text-xl"
          >
            Please wait while we redirect you to the Dashboard
          </Label>
        </div>
      </div>
    </>
  );
};

export default Verified;
