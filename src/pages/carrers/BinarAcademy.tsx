import { BinarAcademy } from '@/components/BinarAcademy';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const BinarAcademyCarrer = () => {
  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <BinarAcademy />
    </Main>
  );
};

export default BinarAcademyCarrer;
