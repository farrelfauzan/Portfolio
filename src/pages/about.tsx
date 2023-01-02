import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="Farrel Fauzan Portfolio"
          description="This is Farrel Fauzan carrer portfolio"
        />
      }
    >
      <div>About Page Here</div>
    </Main>
  );
};

export default About;
