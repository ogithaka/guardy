import { ReactNode } from 'react';

declare global {
    interface LogoProps {
        width: number;
        height: number;
    }
    interface HeaderProps {
        children: ReactNode;
    }
}

export {};
