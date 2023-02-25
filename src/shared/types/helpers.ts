import type { FC, PropsWithChildren } from 'react';

export type FCWithChildren<T> = FC<PropsWithChildren<T>>;

export type ExtendsString<T extends string | null = null> = T extends string ? Omit<string, T> : string;

export type RawContent = string;
