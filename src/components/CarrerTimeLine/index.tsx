/* eslint-disable no-constant-condition */
import { Button, Timeline } from 'flowbite-react';
import Image from 'next/image';

import { TimelineList } from './TimlineList';

export const CarrerTimeLine = () => {
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
              {index === 2 || index === 3 ? (
                <Button color="purple">More</Button>
              ) : null}
            </Timeline.Item>
          );
        })}
      </Timeline>
      <div className="w-1/2 items-center text-center text-3xl text-white">
        This section will be detailed of your achivement
      </div>
    </div>
  );
};
