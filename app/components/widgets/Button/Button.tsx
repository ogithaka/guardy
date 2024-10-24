import { ButtonStyles } from '@components';
import Link from 'next/link';

export default function Button({ url, name, outline }: ButtonProps) {
    return (
        <Link
            className={
                outline ? ButtonStyles.ButtonOutline : ButtonStyles.Button
            }
            href={url}
        >
            {name}
        </Link>
    );
}
