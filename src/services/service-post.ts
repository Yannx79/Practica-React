import { tesloApi } from "../api/tesloApi"
import { Post } from "../types";

const getPosts = async () => {
    try {
        const { data } = await tesloApi.get<Post[]>(
            `/posts`,
        )
        return data.map(post => ({
            ...post,
            isAdded: false,
        }));
    } catch (error) {
        throw new Error('Error getting posts')
    }
}

const getPostPaginated = async (page: number = 1, limit: number = 10) => {
    try {
        const { data } = await tesloApi.get<Post[]>(
            `/posts`
        )
        const start = (page - 1) * limit
        const end = start + limit
        const paginatedData = data.slice(start, end)

        return {
            total: data.length,
            page,
            limit,
            totalPages: Math.ceil(data.length / limit),
            posts: paginatedData,
        }

    } catch (error) {
        throw new Error('Error getting posts')
    }
}

const getPostById = async (id: number) => {
    try {
        const { data } = await tesloApi.get<Post>(
            `/posts/${id}`
        )
        return data;
    } catch (error) {
        throw new Error('Error getting post by id')
    }
}

const createPost = async (post: Post) => {
    try {
        const { data } = await tesloApi.post<Post>(`/posts`, post)
        return data
    } catch (error) {
        throw new Error('Error creating post')
    }
}

const updatePost = async (id: number, post: Post) => {
    try {
        const { data } = await tesloApi.put<Post>(`/posts/${id}`, post)
        return data
    } catch (error) {
        throw new Error('Error updating post')
    }
}

const patchPost = async (id: number, post: Partial<Post>) => {
    try {
        const { data } = await tesloApi.patch<Post>(`/posts/${id}`, post);
        return data
    } catch (error) {
        throw new Error('Error patching post')
    }
}

const deletePost = async (id: number) => {
    try {
        await tesloApi.delete(`/posts/${id}`)
        return { message: 'Post deleted successfully' }
    } catch (error) {
        throw new Error('Error deleting post')
    }
}

export {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    patchPost,
    deletePost,
    getPostPaginated,
}