import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/shared/utils/storageUtils";
import { useState, useCallback } from "react";

const getNestedValue = (obj, path) =>
  path.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
    obj
  );

const setNestedValue = (obj, path, value) =>
  path.reduce((acc, key, index) => {
    if (index === path.length - 1) {
      acc[key] = value;
    } else {
      acc[key] = acc[key] || {};
    }
    return acc[key];
  }, obj);

const useJsonLocalStorage = (storageKey, nestedPath) => {
  const path = Array.isArray(nestedPath) ? nestedPath : [nestedPath];

  const [storedValue, setStoredValue] = useState(() => {
    // if (!isLocalStorageAvailable()) return {};

    const parsedItem = getLocalStorageItem(storageKey, {});
    return getNestedValue(parsedItem, path) ?? {};
  });

  const setValue = useCallback(
    (value) => {
      // if (!isLocalStorageAvailable()) return;

      const parsedItem = getLocalStorageItem(storageKey, {});
      setNestedValue(parsedItem, path, value);
      setLocalStorageItem(storageKey, parsedItem);
      setStoredValue(value);
    },
    [storageKey, path]
  );

  return [storedValue, setValue];
};

export default useJsonLocalStorage;
