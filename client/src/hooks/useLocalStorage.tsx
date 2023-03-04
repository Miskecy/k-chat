import React from 'react';

const PREFIX = 'k-chat-';

export default function useLocalStorage<T>(key: string, initialValue: any) {
    const prefixedKey = PREFIX + key;

    const [value, setValue] = React.useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);

        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    });

    React.useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
