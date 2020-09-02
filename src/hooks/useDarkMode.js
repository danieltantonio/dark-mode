import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('somevalue');

    return [someValue, setSomeValue];
}