import { isBrowser } from './is-browser';
import { ExtendedWindow, Environment } from 'next';

const serverEnv: Environment = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export const env = isBrowser
  ? (window as ExtendedWindow).env || serverEnv
  : serverEnv;
