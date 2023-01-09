/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
import { Button } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Introduction = () => {
  const router = useRouter();
  const [choose, setChoose] = useState('');
  return (
    <div className="flex justify-start p-24 xs:p-2">
      <Image
        alt=""
        className="absolute left-12 top-60 h-[250px] xs:left-[-80px] xs:top-40"
        src="/assets/images/Rocket.svg"
        width={200}
        height={200}
      />
      <div className="mx-8 flex h-96 w-1/2 flex-col rounded-[15px] bg-blue-400 shadow-lg shadow-cyan-500/100 sm:w-full md:w-full xl:w-1/2 2xl:w-1/2 xs:mx-0 xs:h-80 xs:w-full">
        <div className="flex flex-col justify-start px-20 pt-8">
          <span className="text-3xl font-bold text-purple-800 xs:text-lg">
            Looking For A Web Developer ?
          </span>
          <div className="pt-2">
            {choose === 'yes' ? (
              <div>
                <span className="font-semibold text-purple-800">
                  Hi, My name is Muhammad Farrel Fauzan. you can call me farrel.
                  I'm a web developer and if you want to know more, let explore
                  with me
                </span>
                <div className="flex flex-row justify-center">
                  <Image
                    alt=""
                    className="absolute right-[1250px] xs:w-2/3"
                    src="/assets/images/astronaut-opening.svg"
                    width={150}
                    height={200}
                  />
                </div>
              </div>
            ) : choose === 'no' ? (
              <div className="flex items-center justify-center">
                <Image
                  alt=""
                  className="xs:w-2/3"
                  src="/assets/images/sadBoy.svg"
                  width={200}
                  height={200}
                />
                <span className="text-xl font-bold text-purple-800 ">
                  GoodBye ~~~
                </span>
              </div>
            ) : null}
          </div>
        </div>
        {choose === 'no' ? (
          <div className="flex items-end justify-end pr-8 xs:pt-2">
            <Button
              onClick={() => setChoose('')}
              className="focus:!outline-0 focus:!ring-0"
            >
              Back
            </Button>
          </div>
        ) : choose === 'yes' ? (
          <div className="flex items-end justify-between px-32  pt-44 xs:pt-2">
            <Button
              color="failure"
              onClick={() => setChoose('')}
              className="focus:!outline-0 focus:!ring-0"
            >
              Take Me Home
            </Button>
            <Button
              onClick={() => {
                router.push('/carrers');
              }}
              className="focus:!outline-0 focus:!ring-0"
            >
              Explore
            </Button>
          </div>
        ) : (
          <div className="flex w-full justify-between px-[350px] py-24 xs:p-10 xs:py-32">
            <Button
              color="purple"
              className="focus:!outline-0 focus:!ring-0"
              onClick={() => setChoose('yes')}
            >
              YES
            </Button>
            <Button
              color="failure"
              className="focus:!outline-0 focus:!ring-0"
              onClick={() => setChoose('no')}
            >
              NO
            </Button>
          </div>
        )}
      </div>
      {choose === 'yes' ? (
        <div>
          <Image
            alt=""
            className="absolute left-[1190px] top-[200px] h-[200px] w-[200px]"
            src="/assets/images/flying-saucer.svg"
            width={600}
            height={600}
          />
          <div>
            <Image
              alt=""
              className="absolute left-[1272px] top-[370px] h-[350px] w-[300px] rounded-full shadow-lg shadow-cyan-500/100 brightness-110 contrast-125 xs:top-[563px] xs:left-1 xs:ml-12"
              src="/assets/images/IMG_0209.jpg"
              width={400}
              height={800}
            />
          </div>
        </div>
      ) : (
        <Image
          alt=""
          className="absolute left-[1272px] top-96 h-[250px] xs:top-[616px] xs:left-1"
          src="/assets/images/telescope2.svg"
          width={400}
          height={200}
        />
      )}
    </div>
  );
};
