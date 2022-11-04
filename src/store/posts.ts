import { useQuery } from '@sveltestack/svelte-query';
import * as postRepository from "src/repository/posts";

export const getAllPosts = () => useQuery(['posts'], postRepository.getAllPosts);
export const getPost = (id: number) => useQuery(['posts', id], () => postRepository.getPost(id));
