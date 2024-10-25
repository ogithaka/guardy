import { NavigationItemStyles } from '@sharedStyles';
import Link from 'next/link';

export default function NavigationItem({
    url,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
            href={url}
        >
            {name}
        </Link>
    );
}
