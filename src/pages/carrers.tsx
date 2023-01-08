import { CarrerTimeLine } from '@/components/CarrerTimeLine';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Carrers = () => {
  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <CarrerTimeLine />
    </Main>
  );
};

export default Carrers;
