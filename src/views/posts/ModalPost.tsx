import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Post } from "../../types";

type ModalPostProps = {
    post: Post,
}

export default function ModalPost({ post }: ModalPostProps) {
    const [isOpen, setIsOpen] = useState(false); // Inicia cerrado

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={openModal}
                className='p-6 bg-yellow-400 h-0 w-full flex items-center justify-center text-sm text-white mt-4 shadow-lg cursor-pointer hover:bg-yellow-500 hover:scale-105 rounded-md transition-transform duration-150 ease-out'
            >
                Más
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="max-w-lg w-full bg-white border p-8 rounded-lg shadow-lg">
                                <Dialog.Title className="text-lg font-semibold">
                                    {post.title}
                                </Dialog.Title>
                                <div className="mt-4">
                                    <p>{post.content}</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-150"
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
