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
    interface MainProps {
        children: ReactNode;
    }
    interface ButtonProps {
        url: string;
        name: string;
        outline?: boolean;
    }
    interface FormProps {
        children: ReactNode;
    }
    interface InputFieldProps {
        id?: string;
        label?: string;
        type: string;
        placeholder?: string;
        value?: string;
        disabled?: boolean;
    }
}

export {};
