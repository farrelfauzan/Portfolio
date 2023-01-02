import type { ReactNode } from 'react';

import { Navigation } from '@/components/Navigation';

import bg from '../../public/assets/images/background-portfolio.png';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-500 antialiased">
    {props.meta}
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className="h-full"
    >
      <Navigation />
      {props.children}
    </div>
  </div>
);

export { Main };
