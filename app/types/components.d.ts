import { ReactNode } from 'react';

declare global {
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
}

export {};
