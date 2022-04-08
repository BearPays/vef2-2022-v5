import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h2>404: Villa</h2>
      <p>síða fannst ekki</p>
    </>
  );
};

export default Custom404;
