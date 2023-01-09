import { Embreo } from '@/components/Embreo';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const EmbreoCarrer = () => {
  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <Embreo />
    </Main>
  );
};

export default EmbreoCarrer;
