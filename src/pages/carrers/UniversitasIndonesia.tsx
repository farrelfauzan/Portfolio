import { UniversitasIndonesia } from '@/components/UniversitasIndonesia';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const UniversitasIndonesiaCarrer = () => {
  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <UniversitasIndonesia />
    </Main>
  );
};

export default UniversitasIndonesiaCarrer;
