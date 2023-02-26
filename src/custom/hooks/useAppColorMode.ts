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
        const getWindowMatchMedia = () => (window && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)'));

        if (getWindowMatchMedia) {
            // Add listener to update styles
            // @ts-ignore
            const fixer = getWindowMatchMedia().addEventListener
            fixer && fixer('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

            // Setup dark/light mode for the first time
            // @ts-ignore
            onSelectMode(getWindowMatchMedia().matches ? 'dark' : 'light')
        }

        // Remove listener
        return () => {
            if (getWindowMatchMedia) {
                const fixer = getWindowMatchMedia().removeEventListener
                fixer && fixer('change', () => {
                });
            }
        }
    }, [onSelectMode]);

    return [mode, onSelectMode] as const;
}