import { ButtonStyles } from '@sharedStyles';
import Link from 'next/link';

export default function Button({ url, name }: ButtonProps) {
    return (
        <Link
            className={ButtonStyles.Button}
            href={url}
        >
            {name}
        </Link>
    );
}
