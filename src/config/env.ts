const KEYS = [
  'VITE_COLLECTIONS_API_URL',
  'VITE_QUESTIONS_API_URL',
  'VITE_SPECIALIZATIONS_API_URL',
  'VITE_COLLECTION_BY_ID_API_URL',
  'VITE_QUESTION_BY_ID_API_URL',
] as const;

type ConfigKey = (typeof KEYS)[number];
type Config = Record<ConfigKey, string | undefined>;

export const CONFIG = KEYS.reduce<Config>((obj, key) => {
  obj[key] = import.meta.env[key];
  return obj;
}, {} as Config);
