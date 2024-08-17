import { usePostStore } from "../../stores/app.store";

export default function AddedPost() {

    const { posts, removePost } = usePostStore();

    return (
        <>
            <div className="text-gray-900 bg-gray-200">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Users
                    </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5">Title</th>
                                <th className="text-left p-3 px-5">Status</th>
                                <th className="text-left p-3 px-5">Category</th>
                                <th className="text-left p-3 px-5">Acciones</th>
                                <th></th>
                            </tr>
                            {
                                posts.map((post) => (
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td className="p-3 px-5"><input type="text" value={post.title} className="bg-transparent" /></td>
                                        <td className="p-3 px-5"><input type="text" value={post.status} className="bg-transparent" /></td>
                                        <td className="p-3 px-5"><input type="text" value={post.category} className="bg-transparent" /></td>
                                        <td className="p-3 px-5 flex justify-end"><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-all hover:scale-110 ease-in-out duration-300" onClick={() => removePost(post.id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}