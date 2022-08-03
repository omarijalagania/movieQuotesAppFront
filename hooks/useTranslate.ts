import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useTranslate = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return { t, router };
};

export default useTranslate;
