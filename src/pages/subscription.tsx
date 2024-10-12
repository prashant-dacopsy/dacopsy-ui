import React from 'react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { plans } from '../data/subscription/data';

const SubscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10">
      <Label variant="legend" className="font-bold text-primary">
        Choose the plan that’s right for you
      </Label>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 max-w-6xl w-full">
        {plans?.map((plan) => (
          <>
            <div
              key={plan.id}
              className={`border h-[25rem] hover:-translate-y-1 rounded-lg shadow-md p-6 relative bg-white w-full md:w-64 ${
                plan.popular ? 'border-blue-600' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="float-right bg-slate-200 px-2 rounded-md">
                  Most Popular
                </div>
              )}
              <Label variant="title" className="text-primary">
                {plan.title}
              </Label>
              <Label variant="subtitle" className="block font-semibold">
                {plan.price}/month
              </Label>
              <div className="mt-5 space-y-3">
                <Label variant="label" className="block">
                  Video and sound quality: {plan.quality}
                </Label>
                <Label variant="label" className="block">
                  Resolution: {plan.resolution}
                </Label>
                <Label variant="label" className="block">
                  Supported devices: {plan.devices}
                </Label>
                <Label variant="label" className="block">
                  Devices you can watch at the same time: {plan.simultaneous}
                </Label>
                <Label variant="label" className="block">
                  Download devices: {plan.downloads}
                </Label>
              </div>
              <Button
                variant="default"
                className="w-11/12 absolute bottom-3 right-2.5"
              >
                Subscribe
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
