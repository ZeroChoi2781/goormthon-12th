import { useEffect, useState } from 'react';

const IS_SERVER = typeof window === 'undefined';

const useSessionStorage = <T>(
    key: string,
    initialValue: T,
): {
    storedValue: T;
    setValue: (value: T | ((val: T) => T)) => void;
    removeValue: () => void;
} => {
    const readValue = (): T => {
        if (IS_SERVER) {
            return initialValue;
        }

        try {
            const item = window.sessionStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading sessionStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(initialValue);

    useEffect(() => {
        if (!IS_SERVER) {
            setStoredValue(readValue());
        }
    }, [key]);

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have the same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to sessionStorage
            if (typeof window !== 'undefined') {
                window.sessionStorage.setItem(
                    key,
                    JSON.stringify(valueToStore),
                );
            }
        } catch (error) {
            console.warn(`Error setting sessionStorage key "${key}":`, error);
        }
    };

    const removeValue = () => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== 'undefined') {
                window.sessionStorage.removeItem(key);
            }
        } catch (error) {
            console.warn(`Error removing sessionStorage key "${key}":`, error);
        }
    };

    return { storedValue, setValue, removeValue };
};

export default useSessionStorage;
