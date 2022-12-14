import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalProps } from 'components';

const Modal: React.FC<ModalProps> = ({
  setOpen,
  open,
  className,
  children,
  classes,
  dialogClass,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className={`relative !z-50 ${className}`}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 backdrop-blur-md' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div
            className={`flex items-end sm:items-center justify-center min-h-full md:!p-4 text-center sm:!p-0 ${classes}`}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel
                className={`relative bg-[#222030] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all w-full  md:max-w-lg min-w-max  sm:!p-6 ${dialogClass}`}
              >
                <div className=' flex justify-center items-center'>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
