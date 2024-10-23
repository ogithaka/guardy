'use client';
import { useState } from 'react';
import { NavigationStyles } from '@components';
import Image from 'next/image';

export default function Navigation({ children }: NavigationProps) {
    const [dropdown, setDropdown] = useState(false);
    function toggleDropdown() {
        setDropdown(!dropdown);
    }
    return (
        <nav className={NavigationStyles.Navigation}>
            <div className={NavigationStyles.NavigationLarge}>{children}</div>
            <div className={NavigationStyles.NavigationSmall}>
                <div
                    className={NavigationStyles.NavigationToggle}
                    onClick={toggleDropdown}
                >
                    {dropdown ? (
                        <Image
                            src={'/icons/close.svg'}
                            alt='Close Icon'
                            width={24}
                            height={24}
                        />
                    ) : (
                        <Image
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={24}
                            height={24}
                        />
                    )}
                </div>
                {dropdown ? (
                    <div className={NavigationStyles.NavigationDropdown}>
                        {children}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
