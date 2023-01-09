/* eslint-disable no-constant-condition */
import { Button, Timeline } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { AstronautAnimation } from '../AstronautAnimation';
import { TimelineList } from './TimlineList';

export const CarrerTimeLine = () => {
  const router = useRouter();
  const MoveToDetailPages = (index: number) => {
    if (index === 3) {
      router.push('/carrers/BinarAcademy');
    } else if (index === 2) {
      router.push('/carrers/UniversitasIndonesia');
    } else if (index === 4) {
      router.push('carrers/Embreo');
    }
  };
  return (
    <div className="flex h-full flex-row pb-64 pt-20 pl-32">
      <Timeline className="flex h-screen w-1/2 flex-col pl-4">
        {TimelineList.map((timeline, index) => {
          return (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Image
                className="relative left-[-0.25rem] "
                alt=""
                src={timeline.icons}
                width={40}
                height={40}
              />
              <Timeline.Content>
                <Timeline.Time className="!mb-0 !ml-0">
                  {timeline.date}
                </Timeline.Time>
                <Timeline.Title className="text-white">
                  {timeline.title}
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Body className="text-gray-400">
                {timeline.desc}
              </Timeline.Body>
              {index === 2 || index === 3 || index === 4 ? (
                <Button onClick={() => MoveToDetailPages(index)} color="purple">
                  More
                </Button>
              ) : null}
            </Timeline.Item>
          );
        })}
      </Timeline>
      <div className="w-1/2 items-center pl-32 pt-32 text-3xl text-white">
        <AstronautAnimation />
      </div>
    </div>
  );
};
