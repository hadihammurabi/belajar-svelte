import { useQuery } from '@sveltestack/svelte-query';
import * as jokeRepository from '../repository/jokes';

export const getJoke = () => useQuery(['jokes'], jokeRepository.getJoke);
