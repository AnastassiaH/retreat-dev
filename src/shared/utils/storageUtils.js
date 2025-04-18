// import brlg from "lib/helpers/brlg";

const isClient = typeof window !== "undefined";

export const setLocalStorageItem = (key, value) => {
  if (!isClient) return false;

  try {
    localStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch (error) {
    // brlg.warn("Error setting localStorage item:", error);
    return false;
  }
};

export const getLocalStorageItem = (key, defaultValue = null) => {
  if (!isClient) return defaultValue;

  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch (error) {
    // brlg.warn("Error getting localStorage item:", error);
    return defaultValue;
  }
};

export const removeLocalStorageItem = (key) => {
  if (!isClient) return false;

  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    // brlg.warn("Error removing localStorage item:", error);
    return false;
  }
};

export const isLocalStorageAvailable = () => {
  if (!isClient) return false;

  try {
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};
