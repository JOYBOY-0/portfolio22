import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({
    show,
    onClose,
    ...props}) {


  return (
    <Transition show={show} as={Fragment}>

    <Dialog 
    onClose={onClose}
    className="relative z-50" 
    >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            <div className="fixed inset-0 flex items-center justify-center px-2 sm:px-4  py-2 sm:py-6">

                <Dialog.Panel className="w-full h-full max-w-7xl" >
                    
                    {props.children}

                </Dialog.Panel>

            </div>
        </Transition.Child>

    </Dialog>
    </Transition>

  )
}
