import { IntroSection } from '@/components/Intro';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <IntroSection />
    </Main>
  );
};

export default Index;
