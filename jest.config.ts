import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ["<rootDir>/global.mock.js"],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
