import React, { useEffect, useState } from "react";

export function useAppColorMode() {
    const [mode, setMode] = useState();
    const onSelectMode = React.useCallback((newMode: typeof mode) => {
        setMode(newMode)
        if (newMode === 'dark')
            document.body.classList.add('dark-mode')
        else
            document.body.classList.remove('dark-mode')
    }, []);

    useEffect(() => {
        // Add listener to update styles
        // @ts-ignore
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

        // Setup dark/light mode for the first time
        // @ts-ignore
        onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

        // Remove listener
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, [onSelectMode]);

    return [mode, onSelectMode] as const;
}