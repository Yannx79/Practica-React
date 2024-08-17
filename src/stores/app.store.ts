import { create } from "zustand";
import { Post } from "../types";
import { getPosts } from "../services";

type Store = {
    posts: Post[];
    addPost: (post: Post) => void;
    removePost: (id: number) => void;
    total: () => number;
}

export const usePostStore = create<Store>((set, get) => ({
    posts: [],
    addPost: (post: Post) =>
        set((state) => ({
            posts: [...state.posts, post],
        })),
    removePost: (id: number) => 
        set((state) => ({
            posts: state.posts.filter((post) => post.id !== id),
        })),
    total: () => 
        get().posts.length,
}));
