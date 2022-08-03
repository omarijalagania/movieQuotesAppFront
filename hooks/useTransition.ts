import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useTransition = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return { t, router };
};

export default useTransition;
