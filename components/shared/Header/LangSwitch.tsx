import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LangToggler: React.FC = () => {
  const router = useRouter();
  return (
    <div className='w-full max-w-xs !px-2 fixed'>
      <div className='relative'>
        <div className='absolute z-10 !px-4 mt-1 -left-[2.7rem] sm:!px-0 lg:max-w-3xl'>
          <div className='overflow-hidden  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='relative outline-none  bg-white text-center text-sm !px-6 !py-2 '>
              <Menu.Item>
                {() => (
                  <Link href={router.asPath} locale='en'>
                    <p className='text-black cursor-pointer  mb-3'>English</p>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <Link href={router.asPath} locale='ge'>
                    <p className='text-black cursor-pointer'>ქართული</p>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangToggler;
