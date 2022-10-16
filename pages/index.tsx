import { EngHome, EspHome } from '@/src/i18n-pages';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { locale } = useRouter();
  const isEng = locale === 'en';

  return isEng ? <EngHome /> : <EspHome />;
};

export default Home;
