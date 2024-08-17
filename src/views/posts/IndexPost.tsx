
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../services'
import CardPost from './CardPost';
import { Toaster } from 'react-hot-toast';

export default function IndexPost() {

    const { data: posts, error, isLoading, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })

    if (isLoading) return <div className='h-60 bg-orange-600 text-white text-3xl'>Loading...</div>; // Muestra mensaje de carga mientras se obtienen los posts
    if (error) return <div className='h-60 bg-red-600 text-white text-3xl'>Error: {error.message}</div>; // Muestra mensaje de error si ocurre un problema


    return (
        <>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    posts?.map((post, index) => (
                        <CardPost key={post.id} post={post} />
                    ))
                }
                <Toaster position="top-right"
                    reverseOrder={false} />
            </div>
        </>
    )

}