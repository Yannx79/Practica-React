import toast, { Toaster } from 'react-hot-toast';
import { usePostStore } from '../../stores/app.store';
import type { Post } from '../../types'
import ModalPost from './ModalPost';
import { ToastContainer } from 'react-toastify';

type CardPostProps = {
    post: Post,
}

function truncateText(text: string, wordLimit: number = 20): string {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
}

export default function CardPost({ post }: CardPostProps) {

    const { posts, addPost, removePost } = usePostStore();
    const notify = () => toast.success('Agregado exitosamente');

    const addPostModal = (post: Post) => {
        addPost(post)
        notify()
    }

    return (
        <>
            <div className="pt-12 bg-transparent flex items-center justify-center">
                <div className="px-5">
                    <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                        <div className="w-14 h-14 bg-yellow-800 shadow-md shadow-yellow-500 rounded-full flex items-center justify-center font-bold text-white"><img src={post.thumbnail} className='rounded-full border-yellow-500' alt="" /></div>
                        <div className="mt-4">
                            <h1 className="text-sm text-gray-700 font-semibold hover:underline cursor-pointer">{post.title}</h1>
                            <div className="flex mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p className="mt-4 text-xs text-justify text-gray-600">{truncateText(post.content, 40)}</p>
                            <ModalPost post={post} />
                            <div className="flex justify-between items-center">
                                <div className=" flex items-center space-x-4 py-6">
                                    {false ? <div className="">
                                        <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
                                    </div> : ''}
                                    <div className="text-xs text-gray-600 italic">
                                        <div>Category: {post.category}</div>
                                        <div>Published At: {post.publishedAt}</div>
                                        <div>Updated At: {post.updatedAt}</div>
                                    </div>
                                </div>
                                {
                                    !post.isAdded ?
                                        <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer hover:bg-yellow-500 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => addPostModal(post)}>+</div>
                                        : <div className="p-6 bg-red-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer hover:bg-red-500 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => addPost(post)}>-</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}