import { writable } from 'svelte/store';

export const counter = writable(0);

export const increment = () => {
  counter.update(val => ++val);
};

export const decrement = () => {
  counter.update(val => --val);
};
