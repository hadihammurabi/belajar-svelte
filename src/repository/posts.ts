import axios from 'axios';

export const getAllPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

export const getPost = async (id: number) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
};