import { Button } from 'flowbite-react';
import { useRouter } from 'next/dist/client/router';

/* eslint-disable react/no-unescaped-entities */
export const SelfExplaination = () => {
  const router = useRouter();
  const MoveToCarrers = () => {
    router.push('/carrers');
  };
  return (
    <div className="flex justify-center pb-64 pt-32">
      <div className=" w-1/2 rounded-[15px] bg-blue-400 py-8 shadow-lg shadow-cyan-500/100">
        <span className="p-8 text-2xl font-bold text-black">
          Hi, I'm Farrel
        </span>
        <p className="px-8 pt-8 text-justify font-semibold text-black">
          I'm a Full Stack Web Developer. Currently I work for Embreo Pte Ltd as
          a JavaScript web developer. I am graduated from Universitas Indonesia
          as a Bachelor of physics and interested in Physics Instrumentation.
          So, beside I can do a web development, I also can do some machine
          learning from what I got from my college.
        </p>
        <div className="py-8">
          <span className="p-8 text-2xl font-bold text-black">
            Self Development
          </span>
        </div>
        <p className="px-8 font-semibold text-black">
          As a student of Physics in Universitas Indonesia, I have many
          experience in organization to gain my self development. The
          organization call Himpunan Departemen Fisika Universitas Indonesia
          that I joined in 2019 until 2020 to grind my self development in
          public relation.
        </p>
        <p className="px-8 py-12 font-semibold text-black">
          If you wondering what experience and skill about programming that I
          mastered in click the buttons below.
        </p>
        <div className="flex h-32 flex-col items-center justify-between">
          <Button className="w-fit" onClick={() => MoveToCarrers()}>
            Carrers
          </Button>
          <Button className="w-fit">Experience in programming </Button>
        </div>
      </div>
    </div>
  );
};
