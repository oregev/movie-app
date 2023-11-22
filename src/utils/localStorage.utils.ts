export const addToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
