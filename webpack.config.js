import { resolve } from 'path-browserify';
import { resolve as resolveOs } from 'os-browserify/browser';
import { resolve as resolveCrypto } from 'crypto-browserify';
import { resolve as resolveStream } from 'stream-browserify';

export const webpackConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      os: resolveOs,
      crypto: resolveCrypto,
      stream: resolveStream,
      path: resolve,
    };

    return config;
  },
};
