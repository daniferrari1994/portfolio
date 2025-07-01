import structuredClone from '@ungap/structured-clone';
import '@testing-library/jest-dom';


if (typeof global.structuredClone !== 'function') {
  global.structuredClone = structuredClone as any;
}

if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

import './src/i18nForTest';

function deepClone(obj: any): any {
  if (obj === null || typeof obj !== 'object') return obj;
  if (typeof obj === 'function' || typeof obj === 'symbol') return undefined;

  if (Array.isArray(obj)) return obj.map(deepClone);

  const cloned: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}
