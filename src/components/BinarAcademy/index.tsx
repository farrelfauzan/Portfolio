/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Button } from 'flowbite-react';
import { useState } from 'react';

import { MoonAstronaut } from '../AstronautWorksAnimation';
import { PhaseDescription } from './PhaseDescription';

export const BinarAcademy = () => {
  const [phase, setPhase] = useState(1);
  const OnClickNextPhase = () => {
    setPhase(phase + 1);
  };
  const OnClickPreviousPhase = () => {
    setPhase(phase - 1);
  };
  const GoToProject = (link: string) => {
    window.open(link);
  };
  return (
    <div className="flex flex-col items-center justify-start px-32 pb-96 pt-44">
      {PhaseDescription.map((item, index) => {
        if (phase === item.id) {
          return (
            <div
              className="flex h-80 w-2/3 flex-col rounded-[15px] bg-purple-500 text-black"
              key={index}
            >
              <div className="justify-center px-20 py-8 text-center">
                <h2 className="text-2xl font-bold text-black">{item.name}</h2>
              </div>
              <div className="flex  flex-col px-8 text-justify">
                <span className="font-semibold text-black">{item.desc}</span>
                <span className="pt-8 font-semibold text-black">
                  {item.desc2}
                </span>
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => GoToProject(item.link)}
                  className="bg-green-500 hover:bg-green-500"
                >
                  See Project
                </Button>
              </div>
            </div>
          );
        }
      })}
      <div>
        <MoonAstronaut />
      </div>
      <div
        className={
          phase === 1
            ? 'flex w-2/3 flex-row justify-end pt-12'
            : 'flex w-2/3 flex-row justify-between pt-12'
        }
      >
        {phase !== 1 ? (
          <Button
            onClick={() => OnClickPreviousPhase()}
            className="bg-violet-500 hover:bg-violet-500"
          >
            Previous Phase
          </Button>
        ) : null}
        {phase === 3 ? null : (
          <Button
            onClick={() => OnClickNextPhase()}
            className="bg-blue-500 hover:bg-blue-500"
          >
            Next Phase
          </Button>
        )}
      </div>
    </div>
  );
};
