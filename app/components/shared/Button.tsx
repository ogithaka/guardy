import { ButtonStyles } from '@sharedStyles';
import Link from 'next/link';

export default function Button({ url, name, style }: ButtonProps) {
    return (
        <Link
            className={style ? `${style}` : ButtonStyles.Button}
            href={url}
        >
            {name}
        </Link>
    );
}
