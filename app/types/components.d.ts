import { ReactNode } from 'react';

declare global {
    interface LogoProps {
        width: number;
        height: number;
    }
    interface HeaderProps {
        children: ReactNode;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface NavigationItemProps {
        url: string;
        name: string;
        active?: boolean;
    }
    interface ButtonProps {
        url: string;
        name: string;
        active?: boolean;
        style?: string;
    }
    interface MainProps {
        children: ReactNode;
    }
}

export {};
