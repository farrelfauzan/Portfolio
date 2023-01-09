import { Button } from 'flowbite-react';
import Image from 'next/image';

export const Embreo = () => {
  return (
    <div className="flex flex-col items-center justify-start px-32 pb-96 pt-44">
      <div className="flex h-80 w-2/3 flex-col rounded-[15px] bg-purple-500 text-black">
        <div className="flex justify-center pt-8">
          <Image
            alt=""
            src="/assets/icons/ReachLogo.svg"
            width={200}
            height={200}
          />
        </div>
        <div className="px-20 pt-8 text-justify">
          <span className=" font-semibold text-black">
            Reach project is the project that I create with my partner Purjayadi
            in Embreo Pte Ltd. This project provides you to bargaining with
            insurance company for your insurance policy. This is the dashboard
            app, there are 3 dashboard work for now, agent, agency, and admin.
            Reach is more like third party application that can connect between
            you and the insurance company.
          </span>
        </div>
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => window.open('https://reach-landing.embreo.global/')}
            className="bg-green-500 hover:bg-green-500"
          >
            Go To Reach Project
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Image
          alt=""
          src="/assets/images/paperandpeople.svg"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};
