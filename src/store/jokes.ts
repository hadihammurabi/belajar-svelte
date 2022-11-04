import { useQuery } from '@sveltestack/svelte-query';
import * as jokeRepository from 'src/repository/jokes';

export const getJoke = () => useQuery(['jokes'], jokeRepository.getJoke);
