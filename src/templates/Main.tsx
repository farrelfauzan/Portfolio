import type { ReactNode } from 'react';

import { Navigation } from '@/components/Navigation';

import bg from '../../public/assets/images/background-portfolio.png';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  console.log('ini props', props.children?.type?.name);
  return (
    <div className="w-full text-gray-500 antialiased">
      {props.meta}
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className="h-full bg-cover"
      >
        <Navigation />
        {props.children}
      </div>
    </div>
  );
};

export { Main };
