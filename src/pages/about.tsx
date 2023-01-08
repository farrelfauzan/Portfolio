import { SelfExplaination } from '@/components/SelfExplanation';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Farrel Fauzan Portfolio"
        description="This is Farrel Fauzan carrer portfolio"
      />
    }
  >
    <SelfExplaination />
  </Main>
);

export default About;
