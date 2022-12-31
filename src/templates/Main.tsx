import type { ReactNode } from 'react';

import { Navigation } from '@/components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-500 antialiased">
    {props.meta}
    <div
      style={{
        backgroundImage: `url('https://cdn.dribbble.com/userupload/3274746/file/original-c4c6dc1fbc4277fb6159b83edc7d2ef9.png?compress=1&resize=1905x1072')`,
      }}
    >
      <Navigation />
      {props.children}
    </div>
  </div>
);

export { Main };
