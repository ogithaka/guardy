'use client';
import { NavigationStyles } from '@sharedStyles';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation({ children }: NavigationProps) {
    const [dropdown, setDropdown] = useState(false);
    function triggerDropdown() {
        return setDropdown(!dropdown);
    }
    return (
        <nav className={NavigationStyles.Navigation}>
            <div className={NavigationStyles.NavigationLarge}>{children}</div>
            <div className={NavigationStyles.NavigationSmall}>
                <div
                    className={NavigationStyles.NavigationTrigger}
                    onClick={triggerDropdown}
                >
                    {dropdown ? (
                        <Image
                            src={'/icons/close.svg'}
                            alt='Close Icon'
                            width={25}
                            height={25}
                        />
                    ) : (
                        <Image
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={25}
                            height={25}
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
