import axios from 'axios';

export const getJoke = async () => {
  const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single');
  return res.data;
};
